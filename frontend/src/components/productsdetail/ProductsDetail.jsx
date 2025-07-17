import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

import { addToCart } from "../redux/Cartslice";
import { products } from "../products/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  const [mainImage, setMainImage] = useState(product?.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  const handleImageSwap = () => {
    setMainImage((prev) =>
      prev === product.image ? product.hoverImage : product.image
    );
  };

  const handleCheckout = () => {
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Product Image Section */}
        <div
          className="p-6 rounded shadow"
          style={{ backgroundColor: product.bgColor || "#ffffff" }}
          data-aos="fade-right"
        >
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-80 object-contain mb-4"
            data-aos="zoom-in"
          />

          <div
            className="w-24 h-24 border rounded cursor-pointer overflow-hidden mx-auto"
            onClick={handleImageSwap}
            data-aos="fade-up"
          >
            <img
              src={mainImage === product.image ? product.hoverImage : product.image}
              alt="Alternate"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Right: Product Info Section */}
        <div data-aos="fade-left">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-herbal font-semibold mb-4">
            Rs. {product.price.toLocaleString()}
          </p>

          <p className="text-gray-700 mb-6" data-aos="fade-up">
            {product.description}
          </p>

          {product.benefits?.length > 0 && (
            <div className="mb-6" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {product.features?.length > 0 && (
            <div className="mb-6" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700"
            data-aos="fade-up"
          >
            {product.ingredients && (
              <div>
                <p><strong>Ingredients:</strong></p>
                <p>{product.ingredients}</p>
              </div>
            )}
            {product.usage && (
              <div>
                <p><strong>Usage:</strong></p>
                <p>{product.usage}</p>
              </div>
            )}
            {product.form && (
              <div>
                <p><strong>Form:</strong></p>
                <p>{product.form}</p>
              </div>
            )}
            {product.quantity && (
              <div>
                <p><strong>Quantity:</strong></p>
                <p>{product.quantity}</p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4" data-aos="zoom-in-up">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="px-6 py-3 bg-herbal text-white rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
