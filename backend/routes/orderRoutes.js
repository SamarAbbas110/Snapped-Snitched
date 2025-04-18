import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  adminhandlingOrders,
  userHandlingOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/cartAuth.js";

const orderRoutes = express.Router();

orderRoutes.post("/listproducts", adminAuth, adminhandlingOrders);
orderRoutes.post("/product-status", adminAuth, updateStatus);

// Payment Routes
orderRoutes.post("/place", authUser, placeOrder);
orderRoutes.post("/stripe", authUser, placeOrderStripe);
orderRoutes.post("/razorpay", authUser, placeOrderRazorpay);

//User Feature
orderRoutes.post("/user-orders", authUser, userHandlingOrders);

//verify stripe
orderRoutes.post("/verify-stripe", authUser, verifyStripe);

//verify Razorpay
orderRoutes.post("/verify-razorpay", authUser, verifyRazorpay);

export default orderRoutes;
