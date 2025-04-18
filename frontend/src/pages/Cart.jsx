import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import TotalCartAmt from "../components/TotalCartAmt";

const Cart = () => {
  const { products, currency, cartItem, updateQuantity, navigate } =
    useContext(shopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItem) {
        for (const size in cartItem[itemId]) {
          if (cartItem[itemId][size] > 0) {
            tempData.push({
              _id: itemId,
              size: size,
              quantity: cartItem[itemId][size],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItem, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title titleText1={"YOUR"} titleText2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const cartProducts = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[2fr_0.5fr_0.2fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20 rounded"
                  src={cartProducts.image[0]}
                  alt=""
                />
                <div className="">
                  <p className="text-xs sm:text-lg poppins-bold">
                    {cartProducts.name} - {item.size}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">
                      {currency}
                      {cartProducts.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === 0
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded"
                type="number"
                defaultValue={item.quantity}
                min={1}
                id=""
              />
              {/* (item._id , item.size , 0) - Means if the Quantity is 0 it will remove from the Cart */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <TotalCartAmt />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
