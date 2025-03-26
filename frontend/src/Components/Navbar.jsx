import React, { useState } from 'react';
import { Menu, ShoppingBag, User, Scan } from 'lucide-react';
import CartDrawer from './SideCart';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-indigo-500 rounded-md p-2 transition duration-300 md:hidden"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <h1 
            className="text-2xl font-bold text-white tracking-wider cursor-pointer"
            onClick={() => navigate('/')}  // Clicking logo goes to Home
          >
            BagItNow
          </h1>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => navigate('/')} 
              className="text-white hover:text-indigo-200 transition duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="text-white hover:text-indigo-200 transition duration-300"
            >
              About
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Scan Button */}
            <button
              onClick={() => navigate('/barcode')}
              className="text-white hover:bg-indigo-500 rounded-full p-2 transition duration-300 flex items-center gap-2"
            >
              <Scan size={20} />
              <span className="hidden md:inline">Scan</span>
            </button>

            {/* User Icon */}
            <button className="text-white hover:bg-indigo-500 rounded-full p-2 transition duration-300">
              <User size={20} />
            </button>

            {/* Cart Icon */}
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
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
