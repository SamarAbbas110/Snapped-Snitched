import React, { use, useEffect, useState } from "react";
import { backendURL, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const ListProducts = ({token}) => {
  const [list, setList] = useState([]);

  const fetchproducts = async () => {
    try {
      const fetchprods = await axios.get(
        backendURL + "/api/product/listproducts"
      )
      const products = fetchprods?.data?.message;
      if (Array.isArray(products)) {
        setList(products);
      } else {
        toast.error("Products data is not an array.");
        setList([]); // fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error(error.message);
      setList([]); // fallback on error
    }
  };


  const removeProducts = async (id) => {
    try {
      const response = await axios.post(backendURL + "/api/product/removeproducts" , {id} , {headers : {token}})
      if(response.data.success){
        toast.success(response.data.message);
        await fetchproducts(); 
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)

    }
  }

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <div>
      <p className="mb-4 text-2xl poppins-bold">Products List</p>
      <div className="flex flex-col gap-2">
        {/* listing table titles */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 border bg-gray-100 rounded-full">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* products rows */}

        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] rounded py-2 px-2 border items-center"
            key={index}
          >
            <img className="w-20 rounded" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p onClick={() => removeProducts(item._id)} className="text-right cursor-pointer md:text-center text-base">Delete </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
