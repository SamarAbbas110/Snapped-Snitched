import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import { uploadProductImages } from "../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";

const prodRouter = express.Router();

prodRouter.post("/addproducts", adminAuth, uploadProductImages, addProduct); //only Admin can do this
prodRouter.post("/removeproducts", adminAuth, removeProduct); //only Admin can do this
prodRouter.get("/listproducts", listProduct);
prodRouter.post("/singleProduct", singleProduct);

export default prodRouter;
