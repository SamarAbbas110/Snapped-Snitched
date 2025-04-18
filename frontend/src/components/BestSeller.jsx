import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductList from "./ProductList";
const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSeller, SetbestSeller] = useState([]);

  useEffect(() => {
    const bestSellerProduct = products.filter((item) => item.bestseller);
    SetbestSeller(bestSellerProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-3xl text-center py-8">
        <Title titleText1={"TOP"} titleText2={"SELLERS"} />
        <p className="w-3/4 m-auto text-sm sm:text-base poppins-regular">
          Discover the best-selling items from our wide selection.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5">
        {bestSeller.map((item, index) => (
          <ProductList
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
