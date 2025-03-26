import React from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 
                     ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer" onClick={() => setIsCartOpen(false)}>
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-bold p-4 border-b">My Bag</h2>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-100px)]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your bag is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                <div className="flex-1 ml-3">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-600">${Number(item.price).toFixed(2)} x {item.quantity}</p>
                  <p className="text-sm font-bold text-green-600">${(Number(item.price) * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, 1)} className="text-green-600 text-xl px-2">+</button>
                  <button onClick={() => updateQuantity(item.id, -1)} className="text-red-600 text-xl px-2">-</button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total Price */}
        <div className="p-4 border-t">
          <h3 className="text-lg font-semibold">Total: <span className="text-green-600">${getTotalPrice()}</span></h3>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
