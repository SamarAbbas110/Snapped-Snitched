import express from "express";

import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartControllers.js";
import authUser from "../middlewares/cartAuth.js";

const cartRouter = express.Router();

cartRouter.post("/get-cart", authUser, addToCart);
cartRouter.post("/update-cart", authUser, updateCart);
cartRouter.post("/user-cart", authUser, getUserCart);

export default cartRouter;
