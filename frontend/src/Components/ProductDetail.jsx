import React from "react";
import Modal from "react-modal";
import { FaShoppingBag, FaTimes, FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductDetail = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart(); 

  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      overlayClassName="fixed inset-0 bg-transparent"
    >
      <div className="bg-white p-6 rounded-md shadow-md w-96 relative pointer-events-auto">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer" onClick={onClose}>
          <FaTimes size={20} />
        </button>

        {/* Product Image */}
        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto rounded-lg mb-4" />

        {/* Product Name */}
        <h2 className="text-xl font-bold text-blue-800 text-center mb-2">{product.name}</h2>

        {/* Brand & Description */}
        <p className="text-gray-600 font-medium text-center">{product.brand}</p>
        <p className="text-gray-700 mt-2 text-center">{product.description}</p>

        {/* Price */}
        <p className="text-lg font-bold text-green-600 mt-3 text-center">${product.price}</p>

        {/* Reviews Section */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-700">Customer Reviews:</h3>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="bg-gray-300 p-3 rounded-lg shadow-sm mt-2">
                <p className="text-sm text-gray-800 font-medium">{review.review}</p>
                <div className="flex items-center mt-1">
                  {[...Array(Math.round(review.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">({review.rating.toFixed(1)})</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No reviews yet.</p>
          )}
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full flex 
                       items-center gap-2 hover:from-red-500 hover:to-pink-500 transition-all duration-300 cursor-pointer shadow-md w-40"
          >
            <FaShoppingBag /> Add to Bag
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetail;
