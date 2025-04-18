import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductList from "../components/ProductList";

const Collections = () => {
  const [showFilter, setshowFilter] = useState(false);
  const { products } = useContext(shopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState("Relavance");

  const { search, showSearch } = useContext(shopContext);

  // Used to filtering the products by category name
  const toggleHandlerCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((prev) => prev !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };

  //  Toggling function subCategory

  const toggleHandlerSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((prev) => prev !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };

  const ApplyFiters = () => {
    let allProducts = products.slice();
    if (search) {
      allProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase()); //Searching Functionality
      });
    }
    if (category.length > 0) {
      allProducts = allProducts.filter((product) =>
        category.includes(product.category)
      );
    }
    if (subCategory.length > 0) {
      allProducts = allProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    setFilteredProducts(allProducts);
  };

  // Sorting the Product

  const sortProducts = () => {
    let FpCopy = filteredProducts.slice(); // getting the all products

    switch (sort) {
      case "Low to High":
        setFilteredProducts(FpCopy.sort((a, b) => a.price - b.price));
        break;
      case "High to Low":
        setFilteredProducts(FpCopy.sort((a, b) => b.price - a.price));
        break;
      // case "Best Selling":
      //   setFilteredProducts(FpCopy.filter((item) => item.bestseller));
      //   break;
      default:
        ApplyFiters();
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sort]);

  useEffect(() => {
    ApplyFiters();
  }, [category, subCategory, search, showSearch  , products]); // added products in collections

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setshowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 poppins-bold"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-all ease-in-out ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category filter options */}
        <div
          className={`border border-gray-600 pl-5 py-3 mt-6 rounded-lg ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm poppins-bold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm">
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Men"}
                onChange={toggleHandlerCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3  cursor-pointer"
                type="checkbox"
                value={"Women"}
                onChange={toggleHandlerCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3  cursor-pointer"
                type="checkbox"
                value={"Kids"}
                onChange={toggleHandlerCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-600 pl-5 py-3 mt-6 rounded-lg ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm poppins-bold">TYPES</p>
          <div className="flex flex-col gap-2 text-sm">
            <p className="flex gap-2">
              <input
                className="w-3  cursor-pointer"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleHandlerSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3  cursor-pointer"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleHandlerSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3  cursor-pointer"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleHandlerSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1" >
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title titleText1={"ALL"} titleText2={"COLLECTIONS"} />

          {/* Product Sorting Section */}
          <select
            onClick={(e) => setSort(e.target.value)}
            className="border border-gray-600 text-sm p-2 rounded"
          >
            <option value="Relavance">Sort By Relevant</option>
            {/* <option value="Best Selling">Best Sellers</option> */}
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
          </select>
        </div>{" "}
        {/* Product List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
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
    </div>
  );
};

export default Collections;
