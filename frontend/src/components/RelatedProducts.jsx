import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductList from "./ProductList";

const RelatedProducts = ({ category, subCategory }) => {
  const [related, setRelated] = useState([]);
  // Fetch related products based on the provided category and subcategory

  const { products } = useContext(shopContext);

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      let productCopy = products.filter(
        (product) =>
          product.category === category && product.subCategory === subCategory
      );
      setRelated(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title titleText1={"Related"} titleText2={"Products"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5">
        {related.map((item, index) => (
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

export default RelatedProducts;
