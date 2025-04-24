import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendURL } = useContext(shopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //calling registration Api from Backend to Frontend
      if (currentState === "Sign Up") {
        const registration = await axios.post(
          backendURL + "/api/user/register",
          { name, email, password }
        );
        if (registration.data.success) {
          setToken(registration.data.token);
          localStorage.setItem("token", registration.data.token);
        }
        else{
          toast.error(registration.data.message)
        }
      }
      else{
        //login Api 
        const login = await axios.post(backendURL + "/api/user/login" , {email , password})
        if(login.data.success){
          setToken(login.data.message)
          localStorage.setItem('token' , login.data.token)
        }
        else{
          toast.error(login.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if(token){ //if we are logged in we are not able to to log again
      navigate("/" )
    }
  }, [token])

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-600"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className=" border-none h-[2px] w-12 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-4 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-4 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-4 py-2 border border-gray-800"
        placeholder="Password"
        required
      />{" "}
      <div className="w-full flex justify-between text-xs mt-[-8px] poppins-regular">
        <p className="cursor-pointer">Forget your Password?</p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          > 
            Create an Account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white px-8 py-2 mt-3">
        {currentState === "Login" ? "Sign In " : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
