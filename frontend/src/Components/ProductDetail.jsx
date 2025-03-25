import React from "react";
import Modal from "react-modal";
import { FaShoppingBag, FaTimes } from "react-icons/fa";

const ProductDetail = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button 
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer" 
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto rounded-lg mb-4" />

        <h2 className="text-xl font-bold text-blue-800 text-center mb-2">{product.name}</h2>
        
        <p className="text-gray-600 font-medium text-center">{product.brand}</p>
        <p className="text-gray-700 mt-2 text-center">{product.description}</p>

        <p className="text-lg font-bold text-green-600 mt-3 text-center">${product.price}</p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-700 text-center mb-2">Reviews:</h3>
          {product.reviews.map((review, index) => (
            <p key={index} className="text-gray-600 italic text-sm text-center">
              "{review.review}" ⭐ {review.rating} ({review.count} reviews)
            </p>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full flex 
                             items-center gap-2 hover:from-red-500 hover:to-pink-500 transition-all duration-300 cursor-pointer shadow-md w-40">
            <FaShoppingBag /> Add to Bag
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetail;