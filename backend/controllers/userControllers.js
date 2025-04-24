import userModel from "../models/userModel.js";
import Validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatchPass = await bcrypt.compare(password, user.password);

    if (isMatchPass) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const registerUser = async (req, res) => {
  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  try {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "User  already Exists" });
    }

    // Valdating email with Validator
    if (!Validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a valid Email Address",
      });
    }

    // Validating Password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter a Strong Password",
      });
    }

    //Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //After Valding the New user is Created with name , email , password
    const newUser = userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save(); // Saving the New User in Database

    // Created the Unique Token for Each Register User
    const token = createToken(user._id);
    res.status(201).json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// function for Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      //checks if the Admin email & password is matched with admin email and pass which is stored in .env file
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD 
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
