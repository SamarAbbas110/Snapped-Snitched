import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductList from "./ProductList";

const LatestCollections = () => {
  const { products } = useContext(shopContext);
  const [latestProduct, SetlatestProduct] = useState([]);

  useEffect(() => {
    // Filtering the products to get the 10 latest ones
    SetlatestProduct(products.slice(0, 10));
  }, [products]); // to render the products in Latest Collections
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title titleText1={"NEW"} titleText2={"ARRIVALS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base poppins-regular">
          Discover the latest trends with our newest collections, curated to
          elevate your style!
        </p>
      </div>

      {/* Rendering Products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5">
        {/* Using map to render each product */}
        {latestProduct.map((item, index) => (
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

export default LatestCollections;
