import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ImageCarousel from "../heroslider/Herolsider";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaThLarge,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";
import logo from '../../images/shifalogo.png';

const Header = () => {
  const message =
    "🚨 Diafree available | 🌿 Natural solution for diabetes | 💧 Urine control & kidney support | 💚 Stay healthy with Hebiotic products | 🚚 Free shipping over Rs. 1,000 | ";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductDropdownOpen, setMobileProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const categories = [
    "Women's Health",
    "Beauty Health",
    "Weight Management",
    "Kids Health",
    "Bones & Joints",
    "Diabetic Support",
    "Men's Health",
    "Heart Health",
    "Immune Health",
    "Fertility Support",
    "Vitamins & Minerals",
    "Brain & Vision",
    "Stress & Sleep",
    "Syrups",
  ];

  const mobileMenuItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/allproducts', label: 'All Products', icon: <FaThLarge /> },
    { path: '/about', label: 'About Us', icon: <FaInfoCircle /> },
    { path: '/contact', label: 'Contact Us', icon: <FaPhone /> },
  ];

  return (
    <>
      {/* Marquee */}
      <div className="bg-herbal overflow-hidden py-1 whitespace-nowrap text-white text-lg font-semibold">
        <div className="flex animate-marquee">
          <span className="px-4">{message.repeat(2)}</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white overflow-hidden sticky shadow-sm shadow-slate-100 top-0 z-50">
        {/* Desktop */}
        <div className="hidden md:flex justify-around items-center px-6 py-2 md:px-10">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold">
            <img src={logo} alt="Logo" className="lg:max-w-[130px] hover:scale-110 max-w-[100px]" />
          </NavLink>

          {/* Menu */}
          <nav className="flex space-x-10 text-lg font-medium relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pb-1 transition-all ${isActive
                  ? 'text-herbal border-b-2 border-herbal'
                  : 'text-gray-500 hover:text-herbal hover:border-b-2 border-transparent'}`
              }
            >
              Home
            </NavLink>

            {/* All Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <span
                className="pb-1 text-gray-500 hover:text-herbal cursor-pointer border-b-2 border-transparent hover:border-herbal"
              >
                All Products ▾
              </span>
              {productDropdownOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-md rounded-md mt-2 z-10 w-72 grid grid-cols-2 gap-3 p-4">
                  {categories.map((category, index) => (
                    <NavLink
                      key={index}
                      to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-600 hover:text-herbal"
                    >
                      {category}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `pb-1 transition-all ${isActive
                  ? 'text-herbal border-b-2 border-herbal'
                  : 'text-gray-500 hover:text-herbal hover:border-b-2 border-transparent'}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pb-1 transition-all ${isActive
                  ? 'text-herbal border-b-2 border-herbal'
                  : 'text-gray-500 hover:text-herbal hover:border-b-2 border-transparent'}`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center text-xl space-x-6 text-gray-500">
            <button className="hover:text-herbal hover:scale-110 transition">
              <FaSearch />
            </button>
            <NavLink to="/cart" className="hover:text-herbal hover:scale-110 transition">
              <FaShoppingCart />
            </NavLink>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <button onClick={toggleMenu} className="text-xl text-gray-500">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <NavLink to="/">
            <img src={logo} alt="Logo" className="max-w-[100px]" />
          </NavLink>

          <div className="flex items-center space-x-4 text-xl text-gray-500">
            <button className="hover:text-herbal">
              <FaSearch />
            </button>
            <NavLink to="/cart" className="hover:text-herbal">
              <FaShoppingCart />
            </NavLink>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 text-base font-medium border-t">
            {mobileMenuItems.map(({ path, label, icon }) => {
              if (label === 'All Products') {
                return (
                  <div key={path}>
                    <div
                      className="flex justify-between items-center cursor-pointer text-gray-500"
                      onClick={() => setMobileProductDropdownOpen(!mobileProductDropdownOpen)}
                    >
                      <span className="flex gap-2 items-center">{icon} {label}</span>
                      <span>{mobileProductDropdownOpen ? '▴' : '▾'}</span>
                    </div>
                    {mobileProductDropdownOpen && (
                      <div className="pl-6 mt-2 space-y-1">
                        {categories.map((category, index) => (
                          <NavLink
                            key={index}
                            to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-sm text-gray-600 hover:text-herbal"
                            onClick={toggleMenu}
                          >
                            {category}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block flex items-center gap-2 text-gray-500 ${isActive ? 'text-herbal font-semibold border-l-4 border-herbal pl-2' : 'hover:text-herbal'}`
                    }
                  >
                    {icon}
                    {label}
                  </NavLink>
                );
              }
            })}
          </div>
        )}
      </header>

      <ImageCarousel />
    </>
  );
};

export default Header;
