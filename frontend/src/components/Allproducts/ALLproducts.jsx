import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cartslice";
import { products } from "../products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AllProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="max-w-7xl overflow-hidden mx-auto px-4 py-12">
      {/* Heading */}
      <div className="w-full flex text-gray-700 justify-center items-center">
        <div className="lg:py-10 px-4 w-full lg:w-[70%] text-center overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex-grow border-t border-black" data-aos="fade-left"></div>
            <h2 className="mx-4 text-2xl font-bold whitespace-nowrap" data-aos="fade-down">
              ALL PRODUCTS
            </h2>
            <div className="flex-grow border-t border-black" data-aos="fade-right"></div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <Link to={`/product/${product.id}`}>
              <div
                className="w-full h-60 py-5 relative overflow-hidden rounded transition-transform duration-300 group"
                style={{ background: product.bgColor }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[90%] h-[90%] object-contain absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.title} Hover`}
                  className="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </Link>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-600 mb-3 font-medium">
                Rs. {product.price.toLocaleString()}
              </p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-herbal text-white px-5 py-2 rounded hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
