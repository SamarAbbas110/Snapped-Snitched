import Stripe from "stripe";
import orderModel from "../models/ordersModel.js";
import userModel from "../models/userModel.js";
import razorpay from "razorpay";

//Global Variables
const currency = "inr";
const deliveryCharge = 100;

//Stripe Gateway Initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpayInstance = new razorpay({
  //Razorpay Keys id and Secret fetched from .env File
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Payment Method for COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save(); // saving the Orders in MongoDB;

    await userModel.findByIdAndUpdate(userId, { cartData: {} }); // After filling the User Data the cart will be Reset.

    res.json({
      success: true,
      message: "Order Placed",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Payment method for Stripe
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const { origin } = req.headers; // localhost:5173

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    //placing the Order
    const newOrder = new orderModel(orderData);
    await newOrder.save(); // saving the Orders in MongoDB;

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Add delivery charges (example: flat ₹100)
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`, //If success Redirect to Given Url
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });
    res.json({
      success: true,
      session_url: session.url,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

//verify Stripe

const verifyStripe = async () => {
  const { orderId, success, userId } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} }); // Clear the Cart after making payment
      res.json({
        success: true,
      });
    } else {
      await orderModel.findByIdAndDelete(orderId); //if the success will true the order will be deleted
      res.json({
        success: false,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Payment method using Razorpay
const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save(); // saving the Orders in MongoDB;

    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(), // Currency needs to be in Uppercase in Razorpay
      receipt: newOrder._id.toString(),
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      //it creates the options for payment , if the payment failed we get errors
      if (error) {
        return res.json({
          success: false,
          message: error,
        });
      }
      res.json({
        success: true,
        order,
      });
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//controller function for Handling Razoray payment gateway

const verifyRazorpay = async (req, res) => {
  try {
    const { userId, razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id); //fetching the Razorpay Instance for Verifying
    if(orderInfo.status === "paid"){  // if Payment has been Done
      await orderModel.findByIdAndUpdate(orderInfo.receipt , {payment : true})
      await orderModel.findByIdAndUpdate(userId ,  { cartData: {} }); // After Successful payment the Cart will be cleared.
      res.json({
        success : true,
        message : "Payment Successfull"
      })
    }
    else{
      res.json({
        success : false,
        message : "Payment Failed"
      })
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
// Admin Handling Orders
const adminhandlingOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// All orders for Frontend
// Getting Information about orders after successfully placed orders
const userHandlingOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Updating the Order Status for Admin eg : Packing , Out for Delivery , Delivered
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({
      success: true,
      message: "Status Updated",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  adminhandlingOrders,
  userHandlingOrders,
  updateStatus,
  verifyRazorpay,
  verifyStripe,
};

