import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { addToCart } from '../redux/Cartslice';
import { products } from '../products/Products';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    ❮
  </div>
);

const ProductSlider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl overflow-hidden mx-auto px-4 py-5 lg:py-5 relative">
      <div className="w-full flex text-gray-700 justify-center items-center">
        <div className="lg:py-10 px-4 w-full lg:w-[70%] text-center overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex-grow border-t border-black" data-aos="fade-left"></div>
            <h2 className="mx-4 text-2xl font-bold whitespace-nowrap" data-aos="fade-down">
              OUR FEATURED PRODUCTS
            </h2>
            <div className="flex-grow border-t border-black" data-aos="fade-right"></div>
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div
              onClick={() => navigate(`/product/${product.id}`)}
              className="rounded-lg shadow-lg cursor-pointer overflow-hidden relative group"
              style={{ backgroundColor: product.bgColor || '#ffffff' }}
            >
              {/* Product Image */}
              <div className="relative w-full lg:h-72 h-60 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="lg:max-h-56 max-h-48 transition-opacity duration-300 group-hover:opacity-0"
                  data-aos="fade-down"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.title} Hover`}
                  className="absolute top-0 left-1/2 -translate-x-1/2 max-h-56 sm:max-h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-10"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 text-center bg-white">
                <h3 className="font-semibold text-sm truncate">{product.title}</h3>
                <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm">
                  {'★'.repeat(product.rating || 4)}
                  {'☆'.repeat(5 - (product.rating || 4))}
                  <span className="ml-1 text-gray-600">({product.reviews || 5})</span>
                </div>
                <p className="font-bold mt-2 text-gray-900">
                  Rs. {product.price.toLocaleString()}-/pkr
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(product));
                  }}
                  className="mt-3 w-full bg-herbal text-white font-medium py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
