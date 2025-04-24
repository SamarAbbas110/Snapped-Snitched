import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";

const Product = () => {
  // TODO: Implement the Product component here

  const { productId } = useParams(); // Getting the ProductId from Routes
  const { products, currency, addToCart } = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const sizeRef = useRef();

  const fetchProduct = async () => {
    {
      products.map((item) => {
        if (item._id === productId) {
          setProductData(item); // show me the product when its matches the productId
          setImage(item.image[0]); // First Image in Main Image
      
          return null;
        }
      });
    }
  };

  useEffect(() => {
    fetchProduct();

    setTimeout(() => {
      sizeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product Data */}
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-12">
        {/* product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl mt-2 poppins-bold">{productData.name}</h1>
          <p className="mt-3 text-2xl text-red-500 poppins-bold">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 w-4/5">{productData.description}</p>
          <div ref={sizeRef} className="flex flex-col gap-4 my-8">
            <p>Select Sizes</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`w-[20%] px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md transition-all duration-200 ${
                    size === item
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(productData._id, size);
              toast.success("Added to cart!");
            }}
            className="px-8 py-3 border bg-black text-white active:bg-gray-800 rounded transition-all ease-in-out"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm mt-5 text-gray-500 flex flex-col gap-1">
            <p>- 100% Original Product.</p>
            <p>- Cash on Delivery is available on this product.</p>
            <p>- Easy returns or exchanges within 30 days of purchase.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productId}
      />

      <div className="text-center">
        <Link to={"/collections"}>
          {" "}
          <button className=" px-5 py-4  rounded bg-slate-900 text-white">
            Explore more Products...
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="opacity:0"></div>
  );
};

export default Product;
