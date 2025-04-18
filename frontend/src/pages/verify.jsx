import React, { useContext, useEffect } from "react";
import { shopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItem, backendURL } = useContext(shopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendURL + "/api/order/verify-stripe",
        success,
        orderId,
        { Headers: { token } }
      );
      if (response.data.success) {
        setCartItem({}); //If the payment will success , clear the Cart
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      toast.error(error.messsage);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div></div>;
};

export default Verify;
