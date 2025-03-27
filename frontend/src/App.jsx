import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import CartSidebar from "./Components/SideCart";
import About from "./Components/About"; 
// import Footer from "./Components/Footer";  
import Barcode from "./Components/BarcodeScanner";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/barcode" element={<Barcode />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <CartSidebar /> 
          {/* <Footer />  */}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
