import React, { useState } from "react";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendURL + "/api/user/admin", {
        email,
        password,
      }); // Fetching the Backend Admin email & Password
      if (response.data.success) {
        setToken(response.data.token); //If My admin & password Token matches in Login then allow me to enter into the webpage
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded px-8 w-96 py-12">
        <h1 className="text-3xl poppins-bold mb-5 text-center">Admin Panel</h1>
        <form onClick={onSubmitHandler}>
          <div className="mb-2 min-w-72">
            <p className="text-sm text-gray-900 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className="mb-2 min-w-72">
            <p className="text-sm text-gray-900 mb-2">Password</p>
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="rounded w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="text-center">
            <button
              className="mt-5 bg-black text-white border px-5 w-40 py-3 cursor-pointer rounded-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
