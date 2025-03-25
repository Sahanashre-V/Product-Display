import React, { useState } from "react";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Shop</h1>
        <button onClick={() => setIsCartOpen(true)} className="text-lg font-semibold">
          My Bag 🛒
        </button>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
