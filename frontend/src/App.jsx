import React from "react";
import { CartProvider } from "./context/CartContext"; 
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <CartProvider>
        <Navbar />
        <ProductList />
      </CartProvider>
    </div> 
  )
}

export default App;
