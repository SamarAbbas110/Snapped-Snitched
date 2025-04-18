import React, { useContext, useState } from "react";
import Title from "../components/Title";
import TotalCartAmt from "../components/TotalCartAmt";
import { assets } from "../assets/frontend_assets/assets";
import { shopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("COD"); // to change the Color of circle when its clicked to current payment method
  const {
    navigate,
    backendURL,
    token,
    cartItem,
    setCartItem,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(shopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initpay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log("response" , response);
        try {
          const { data } = await axios.post(
            backendURL + "/api/order/verify-razorpay",
            response, 
            { headers: { token } }
          );
          if (data.success) {
            navigate("/orders");
            setCartItem({}); //After Successful Payment, it will be redirect to orders page and cart will be cleared
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options); //Redirecting to Razorpay Window
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItem = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const iteminfo = structuredClone(
              products.find((product) => product._id === items)
            );
            // If product exists, set the selected size and quantity
            if (iteminfo) {
              iteminfo.sizes = item;
              iteminfo.quantity = cartItem[items][item];
              orderItem.push(iteminfo);
            }
          }
        }
      }
      console.log(orderItem);

      //getting the Order Data from OrdersModel
      let orderData = {
        address: formData,
        items: orderItem,
        amount: getCartAmount() + delivery_fee,
      };

      //Using payment method from Backend
      switch (method) {
        case "COD":
          const response = await axios.post(
            backendURL + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItem({}); // Order will be placed and Cart is Empty Now
            navigate("/orders");
            toast.success("Order has been Placed");
          } else {
            toast.error(response.data.message);
          }
          break;

        //switch case for Stripe
        case "stripe":
          const responseStripe = await axios.post(
            backendURL + "/api/order/stripe", // <- calling your backend endpoint
            orderData, // <- Sending Order Data
            { headers: { token } } // <- Passing Auth Token
          );
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url); // <- Redirecting to Stripe Checkoutt
          } else {
            toast.error(responseStripe.data.message);
          }
          break;
        case "razorpay":
          const responseRazorpay = await axios.post(
            backendURL + "/api/order/razorpay",
            orderData,
            { headers: { token } }
          );
          if (responseRazorpay.data.success) {
            initpay(responseRazorpay.data.order);
          }
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row  justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      <div className="flex flex-col gap-4 w-full sm:w-[480px]">
        <div className="text-xl my-3 sm:text-2xl">
          <Title titleText1={"CHECKOUT"} titleText2={"DETAILS"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full "
            type="text"
            placeholder="First Name "
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full   "
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full   "
          type="email"
          placeholder="Enter your Email Address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full   "
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full "
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full   "
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full "
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full   "
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 text-sm rounded py-2 px-3.5 w-full   "
          type="number"
          placeholder="Enter your Phone Number"
        />
      </div>

      {/* Checkout/Payment Section */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <TotalCartAmt />
        </div>
        <div className="mt-12">
          <Title titleText1={"PAYMENT"} titleText2={"METHODS"} />
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              >
                {" "}
              </p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              >
                {" "}
              </p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("COD")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "COD" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm mx-4">Cash on Delivery</p>
            </div>
          </div>
          <div className="w-full text-end">
            <button
              type="submit"
              className="bg-black text-white text-sm my-8 px-8 py-3 rounded"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
