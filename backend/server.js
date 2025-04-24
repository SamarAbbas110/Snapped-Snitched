import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import prodRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRoutes from "./routes/orderRoutes.js";

// Server Config
const server = express();
const port = process.env.port || 4040;
connectDB(); //Connecting the MongoDB
connectCloudinary(); //COnnecting the Cloudinary

// middlewares
server.use(express.json());
server.use(cors({ origin: "*" }));

// api Endpoints
server.use("/api/user", userRouter);
server.use("/api/product", prodRouter);
server.use("/api/cart", cartRouter);
server.use("/api/order", orderRoutes);
server.get("/", (req, res) => {
  res.send("API is Working");
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
    