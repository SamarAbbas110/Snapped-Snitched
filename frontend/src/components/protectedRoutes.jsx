// components/ProtectedRoute.jsx (or inside App.js)
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { shopContext } from "../context/ShopContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(shopContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
