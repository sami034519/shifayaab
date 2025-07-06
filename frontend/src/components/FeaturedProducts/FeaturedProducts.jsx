import React from 'react';
import Slider from 'react-slick';
import { FaCartPlus } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Product Images
import diafix1 from '../../images/diafixsingle.png';
import diafix2 from '../../images/Diafixdouble-removebg-preview.png';
import uricare from '../../images/uricaresingle1.png';
import uricare2 from '../../images/Uricaredouble-removebg-preview.png';
import slim1 from '../../images/slimsingle.png';
import slim2 from '../../images/Slimdouble-removebg-preview.png';
import hercare1 from '../../images/herbalancesingle.png';
import hercare2 from '../../images/HerBalance2-removebg-preview.png';

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute overflow-hidden top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute overflow-hidden top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    ❮
  </div>
);

const products = [
  {
    id: 1,
    title: 'Diafix',
    price: 'Rs. 2,490',
    rating: 4,
    reviews: 276,
    image: diafix1,
    hoverImage: diafix2,
    bgColor: '#043f64'
  },
  {
    id: 2,
    title: 'Uricare',
    price: 'Rs. 2,190',
    rating: 5,
    reviews: 312,
    image: uricare,
    hoverImage: uricare2,
    bgColor: '#4d052e'
  },
  {
    id: 3,
    title: 'Slimfit',
    price: 'Rs. 2,990',
    rating: 4,
    reviews: 184,
    image: slim1,
    hoverImage: slim2,
    bgColor: '#59612e'
  },
  {
    id: 4,
    title: 'HerBalance',
    price: 'Rs. 4,200',
    rating: 4,
    reviews: 221,
    image: hercare1,
    hoverImage: hercare2,
    bgColor: '#5d0f41'
  }
];

const ProductSlider = () => {
  
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
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="max-w-7xl overflow-hidden mx-auto px-4 py-5 lg:py-10 relative">
         <div className='w-full flex text-gray-700 justify-center items-center '>
      <div className="lg:py-10 px-4 w-full lg:w-[70%]  text-center overflow-hidden">
  <div className="flex items-center justify-center gap-2 mb-6">
    <div className="flex-grow border-t  border-black" data-aos="fade-left"></div>
    <h2 className="mx-4 text-2xl font-bold whitespace-nowrap" data-aos="fade-down">
      OUR FEATURED PRODUCTS
    </h2>
    <div className="flex-grow border-t  border-black" data-aos="fade-right" ></div>
  </div>
</div>
</div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div
              className="rounded-lg shadow-lg cursor-pointer overflow-hidden relative group"
              style={{ backgroundColor: product.bgColor }}
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
                <button className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <FaCartPlus />
                </button>
              </div>
              {/* Product Info */}
              <div className="p-4 text-center bg-white">
                <h3 className="font-semibold text-sm truncate">{product.title}</h3>
                <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm">
                  {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                  <span className="ml-1 text-gray-600">({product.reviews})</span>
                </div>
                <p className="font-bold mt-2 text-gray-900">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
