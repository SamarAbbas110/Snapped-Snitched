import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const OrderProducts = ({ token }) => {
  const [orders, setOrders] = useState([]);

  if (!token) {
    return null;
  }

  const fetchAllOrders = async () => {
    try {
      const response = await axios.post(
        backendURL + "/api/order/listproducts",
        {},
        { headers: { token } }
      );
      console.log(response.data);
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //Function Logic for Updating the Status

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendURL + "/api/order/product-status",
        {
          orderId,
          status: event.target.value,
        },
        { headers: { token } }
      );
      console.log("response", response);
      if (response.data.success) {
        await fetchAllOrders(); // Re-fetch all orders to reflect the updated status immediately in the UI
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h2 className="poppins-bold text-xl my-4">Orders Page</h2>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr_1fr_1fr] gap-4 items-start border border-gray-300 rounded-md p-5 text-sm text-gray-700"
          >
            {/* Parcel Icon */}
            <img
              src={assets.parcel_icon}
              alt="Parcel Icon"
              className="w-8 h-8"
            />

            {/* Order Items */}
            <div className="space-y-1">
              {order.items.map((item, idx) => (
                <p key={idx}>
                  {item.name} x {item.quantity}{" "}
                  <span className="text-gray-500">({item.sizes})</span>
                </p>
              ))}
            </div>

            {/* Address */}
            <div>
              <p className="font-semibold">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>{order.address.street}</p>
              <p>
                {order.address.city}, {order.address.state},{" "}
                {order.address.country} - {order.address.zipcode}
              </p>
            </div>

            {/* Phone */}
            <p className="self-center">📞 +91 {order.address.phone}</p>

            {/* Order Info */}
            <div className="space-y-1">
              <p>🛒 Items: {order.items.length}</p>
              <p>💳 Method: {order.paymentMethod}</p>
              <p>💰 Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>📅 Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Amount */}
            <p className="font-semibold self-center">
              {currency} {order.amount}
            </p>

            {/* Status Selector */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              className="border p-1 rounded"
              value={order.status}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProducts;
