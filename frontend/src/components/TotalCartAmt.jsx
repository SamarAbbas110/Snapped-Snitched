import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";

const TotalCartAmt = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(shopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title titleText1={"CART"} titleText2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Charges</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Total Amount </p>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalCartAmt;
