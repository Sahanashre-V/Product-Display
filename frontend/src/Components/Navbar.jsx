// import React, { useState } from "react";
// import CartDrawer from "./CartDrawer";

// const Navbar = () => {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   return (
//     <>
//       <nav className="flex justify-between p-4 bg-gray-800 text-white">
//         <h1 className="text-xl font-bold">Shop</h1>
//         <button onClick={() => setIsCartOpen(true)} className="text-lg font-semibold">
//           My Bag 🛒
//         </button>
//       </nav>

//       <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Menu, ShoppingBag, Search, User } from 'lucide-react';
import CartDrawer from './SideCart';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-indigo-500 rounded-md p-2 transition duration-300"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-wider">
              PRODO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
              Home
            </a>
            <a href="/about" className="text-white hover:text-indigo-200 transition duration-300">
            About
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:bg-indigo-500 rounded-full p-2 transition duration-300">
              <User size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-white hover:bg-indigo-500 rounded-full p-2 transition duration-300 relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-white block hover:bg-indigo-500 rounded-md p-2">
                Home
              </a>
              <a href="#" className="text-white block hover:bg-indigo-500 rounded-md p-2">
                Shop
              </a>
              <a href="#" className="text-white block hover:bg-indigo-500 rounded-md p-2">
                Collections
              </a>
            </div>
          </div>
        )}
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
