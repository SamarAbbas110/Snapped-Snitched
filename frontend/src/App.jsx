  import { Route, Routes, Navigate } from "react-router-dom";
  import { ToastContainer } from "react-toastify";

  // Context
  import { useContext } from "react";
  import { shopContext } from "./context/ShopContext";

  // Components
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import SearchBar from "./components/SearchBar";
  import ProtectedRoute from "./components/protectedRoutes";

  // Pages
  import HomePage from "./pages/HomePage";
  import Collections from "./pages/Collections";
  import Contact from "./pages/Contact";
  import About from "./pages/About";
  import Product from "./pages/Product";
  import Cart from "./pages/Cart";
  import PlaceOrder from "./pages/PlaceOrder";
  import Orders from "./pages/Order";
  import Login from "./pages/Login";
  import Verify from "./pages/verify";
  import Terms_Condition from "./pages/Terms_Condition";


  function App() {
    return (
      <>
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <ToastContainer />
          <Navbar />
          <SearchBar />

          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/terms-conditions" element={<Terms_Condition />} />

            {/* Protected Routes */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/place-order"
              element={
                <ProtectedRoute>
                  <PlaceOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />

            {/* Catch-all Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </div>
      </>
    );
  }

  export default App;
