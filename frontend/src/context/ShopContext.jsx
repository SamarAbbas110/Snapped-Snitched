import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets"; // we dont want fetching product from Demo product folder
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const currency = "₹";
  const backendURL = import.meta.env.VITE_BACKEND_URL; // importing the Backend URL
  const delivery_fee = 100;
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  // Logic of adding size in Add to cart Button
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select product Size");
      return;
    }
    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          backendURL + "/api/cart/get-cart",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    // console.log(cartItem);
  }, [cartItem]);

  // Add the product count in Count Bag
  const getCartCount = () => {
    let TotalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            TotalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return TotalCount;
  };

  // For Totalling the Amount of Cart Product

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      let itemInfo = products.find((product) => product._id === itemId);
      for (const size in cartItem[itemId]) {
        try {
          if (cartItem[itemId][size] > 0) {
            totalAmount += itemInfo.price * cartItem[itemId][size];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  // for update/Delete the Products in Cart

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);

    cartData[itemId][size] = quantity;

    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          backendURL + "/api/cart/update-cart",
          { itemId, size, quantity },
          { headers: { token } }
        ); //updating the cart
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  //fetching the product from List item from backend and render in frontend
  const getProductDetails = async () => {
    try {
      const response = await axios.get(
        backendURL + "/api/product/listproducts"
      );
      if (response.data.success) {
        setProducts(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backendURL + "/api/cart/user-cart" , {} , {headers: {token}});
      if(response.data.success){
        setCartItem(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token", token)) {
      setToken(localStorage.getItem("token", token));
      getUserCart(localStorage.getItem("token", token));
    }
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    getCartCount,
    addToCart,
    updateQuantity,
    getCartAmount,
    navigate,
    backendURL,
    setCartItem,
    token,
    setToken,
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
