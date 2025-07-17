import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { addToCart } from '../redux/Cartslice';
import { products, categories } from '../products/Products';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Convert slug to readable category
  const readableCategory = categorySlug.replace(/-/g, ' ');

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // Check if valid category
  const isValidCategory = categories
    .map((c) => c.toLowerCase())
    .includes(readableCategory.toLowerCase());

  if (!isValidCategory) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Category not found.
      </div>
    );
  }

  // Filter products by category
  const filteredProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() === readableCategory.toLowerCase()
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="w-full flex text-gray-700 mb-5 justify-center items-center">
        <div className="py-10 px-4 w-full lg:w-[70%] text-center overflow-hidden">
          <div className="flex items-center justify-center gap-2 ">
            <div className="flex-grow border-t border-black" data-aos="fade-left"></div>
            <h2 className="mx-4 text-2xl font-bold whitespace-nowrap uppercase" data-aos="fade-down">
              {readableCategory}
            </h2>
            <div className="flex-grow border-t border-black" data-aos="fade-right"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-md transition overflow-hidden bg-white"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-4 hover:scale-105 transition-transform"
                  style={{ background: product.bgColor }}
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-600 mb-3 font-medium">
                  Rs. {product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="px-4 py-2 bg-herbal hover:bg-green-700 text-white rounded transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center" data-aos="fade-up">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
