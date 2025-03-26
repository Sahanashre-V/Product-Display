import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">About BagItNow</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg text-center mb-4">
          <span className="font-bold text-blue-600">BagItNow</span> is your one-stop online shopping destination  
          for <strong>cosmetics, dresses, and much more</strong>. We bring you a <strong>seamless, user-friendly shopping experience</strong>  
          with high-quality products at great prices.
        </p>

        <div className="flex justify-center items-center">
          <img
            src="https://images.meesho.com/images/products/512316453/n5dad_400.webp"
            alt="Shopping"
            className="rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center text-blue-600 mt-6">Why Choose Us?</h2>
        <ul className="list-disc mt-4 text-lg text-gray-700 px-6 space-y-2">
          <li>🛍️ Wide range of <strong>fashion & beauty products</strong></li>
          <li>🚀 <strong>Fast & secure checkout</strong> process</li>
          <li>🎯 <strong>Easy navigation</strong> for a smooth shopping experience</li>
          <li>📦 <strong>Hassle-free returns & customer support</strong></li>
        </ul>

        <p className="text-lg text-center mt-6">
          Start shopping today and <strong>Bag It Now</strong>! 🛒✨
        </p>
      </div>
    </div>
  );
};

export default About;
