import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// Image imports
import icon1 from '../../images/Category_Icon-01.svg';
import icon2 from '../../images/Category_Icon-02.svg';
import icon3 from '../../images/Category_Icon-03.svg';
import icon4 from '../../images/Category_Icon-04.svg';
import icon5 from '../../images/Category_Icon-05.svg';
import icon6 from '../../images/Category_Icon-06.svg';
import icon7 from '../../images/Category_Icon-07.svg';
import icon8 from '../../images/Category_Icon-08.svg';
import icon9 from '../../images/Category_Icon-09_1.svg';
import icon10 from '../../images/Category_Icon-10.svg';
import icon11 from '../../images/Category_Icon-11.svg';
import icon12 from '../../images/Category_Icon-12.svg';
import icon13 from '../../images/Category_Icon-13.svg';
import icon14 from '../../images/Category_Icon-14.svg';

// Slug helper
const toSlug = (str) =>
  str.toLowerCase().replace(/\s+/g, "-").replace(/[&'/]/g, "");

const categories = [
  { title: "Womens Health", iconSrc: icon1, bgColor: 'bg-pink-100' },
  { title: "Beauty Health", iconSrc: icon2, bgColor: 'bg-rose-100' },
  { title: "Weight Management", iconSrc: icon3, bgColor: 'bg-yellow-100' },
  { title: "Kids Health", iconSrc: icon4, bgColor: 'bg-blue-100' },
  { title: "Bones & Joints", iconSrc: icon5, bgColor: 'bg-gray-200' },
  { title: "Diabetic Support", iconSrc: icon6, bgColor: 'bg-teal-100' },
  { title: "Men's Health", iconSrc: icon7, bgColor: 'bg-green-100' },
  { title: "Heart Health", iconSrc: icon8, bgColor: 'bg-red-100' },
  { title: "Immune Health", iconSrc: icon9, bgColor: 'bg-indigo-100' },
  { title: "Fertility Support", iconSrc: icon10, bgColor: 'bg-purple-100' },
  { title: "Vitamins & Minerals", iconSrc: icon11, bgColor: 'bg-orange-100' },
  { title: "Brain & Vision", iconSrc: icon12, bgColor: 'bg-sky-100' },
  { title: "Stress & Sleep", iconSrc: icon13, bgColor: 'bg-lime-100' },
  { title: "Syrups", iconSrc: icon14, bgColor: 'bg-amber-100' },
];

const CategoryGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 10);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleToggle = () => {
    setShowAll((prev) => {
      const next = !prev;
      setTimeout(() => AOS.refresh(), 200); // Refresh AOS after toggle
      return next;
    });
  };

  return (
    <div className="lg:pt-10 overflow-hidden text-center">
      {/* Heading */}
      <div className="w-full flex text-gray-700 justify-center items-center">
        <div className="pt-10 px-4 w-full lg:w-[70%] text-center overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex-grow border-t border-black" data-aos="fade-left"></div>
            <h2 className="mx-4 text-2xl font-bold whitespace-nowrap" data-aos="fade-down">
              OUR SUPPLEMENT CATEGORIES
            </h2>
            <div className="flex-grow border-t border-black" data-aos="fade-right"></div>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto overflow-hidden">
        {visibleCategories.map((cat, index) => (
          <Link
            to={`/products/${toSlug(cat.title)}`}
            key={index}
            className="flex flex-col items-center"
          >
            <div
              className={`w-28 h-28 rounded-full flex items-center justify-center p-1 cursor-pointer hover:scale-105 transition ${cat.bgColor}`}
              data-aos="fade-down"
            >
              <img src={cat.iconSrc} alt={cat.title} className="w-full h-full" />
            </div>
            <p className="mt-2 text-sm font-medium">{cat.title}</p>
          </Link>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-12">
        <button
          className="px-12 py-2 bg-herbal rounded text-white hover:bg-green-500 transition"
          onClick={handleToggle}
          data-aos="fade-down"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default CategoryGrid;
