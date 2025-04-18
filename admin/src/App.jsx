import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router";
import AddProducts from "./pages/AddProducts";
import ListProducts from "./pages/listProducts";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import OrderProducts from "./pages/OrderProducts";

export const backendURL = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹"
const App = () => {
  const [token, settoken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  //storing the email and password in Localstorage
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {/* if token is not present its redirect to Login page */}
      {token === "" ? (
        <Login setToken={settoken} />
      ) : (
        <>
          <Navbar setToken={settoken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route
                  path="/addproducts"
                  element={<AddProducts token={token} />}
                />
                <Route
                  path="/listproducts"
                  element={<ListProducts token={token} />}
                />
                <Route
                  path="/orders"
                  element={<OrderProducts token={token} />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
