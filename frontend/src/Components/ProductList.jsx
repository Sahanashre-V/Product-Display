import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import products from "../data/products.json";
import ProductDetail from "./ProductDetail";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { addToCart } = useCart();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Shop Our Best Picks! 💖
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-blue-500 rounded-lg p-5 shadow-lg bg-gradient-to-r from-blue-100 to-purple-100
                      flex flex-col items-center text-center cursor-pointer
                      transition-transform transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
            onClick={() => openModal(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-44 h-44 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold text-blue-800">{product.name}</h3>
            <p className="text-gray-600 font-medium">{product.brand}</p>
            <p className="text-xl font-bold text-green-600 mt-3">
              ${product.price}
            </p>

            {/* Add to Cart Button */}
            <button
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2 rounded-full mt-4 flex 
                         items-center gap-2 hover:from-red-500 hover:to-pink-500 transition-all duration-300 cursor-pointer shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              <FaShoppingBag /> Add to Bag
            </button>
          </div>
        ))}
      </div>

      <ProductDetail product={selectedProduct} isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default ProductList;
