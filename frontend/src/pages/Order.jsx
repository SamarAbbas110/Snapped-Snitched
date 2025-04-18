import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { shopContext } from "../context/ShopContext";
import axios from "axios";

const Orders = () => {
  const { backendURL, token, currency } = useContext(shopContext);

  const [orderdetails, setOrderDetails] = useState([]);

  const loadOrderDetails = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendURL + "/api/order/user-orders",
        {},
        { headers: { token } }
      );
      console.log(response.data); //receiving the order Details
      if (response.data.success) {
        let allOrderItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            (item["status"] = order.status),
              (item["payment"] = order.payment),
              (item["paymentMethod"] = order.paymentMethod),
              (item["date"] = order.date),
              allOrderItems.push(item);
          });
        });
        setOrderDetails(allOrderItems.reverse()) // new product get the first place
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderDetails();
  }, [token]);

  return (
    <div className="border-t p-16">
      <div className="text-2xl">
        <Title titleText1={"YOUR"} titleText2={"CART"} />
      </div>
      <div>
        {orderdetails.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
              <div>
                <p className="sm:text-base ">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity : {item.quantity}</p>
                  <p>Size : {item.sizes}</p>
                </div>
                <p className="mt-2">
                  Date : <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-2">
                  Payment Method : <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderDetails} className="border px-4 py-2 rounded text-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
