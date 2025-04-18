import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false } //minimize: false ensures that even if cartData is an empty object, it will still be stored as {} rather than being omitted.
);

const userModel = mongoose.models.product || mongoose.model("user", userScheme);

export default userModel;
