import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaBars,
  FaHome,
  FaThLarge,
  FaInfoCircle,
  FaPhone,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../images/shifayablogo.jpg";
import { removeFromCart } from "../redux/Cartslice";

import { products } from "../products/Products";

const Header = () => {
  const message =
    "🚨 Diafree available | 🌿 Natural solution for diabetes | 💧 Urine control & kidney support | 💚 Stay healthy with Hebiotic products | 🚚 Free shipping over Rs. 1,000 | ";

  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductDropdown, setMobileProductDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const filteredResults = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id) => {
    setSearchQuery("");
    setShowSearch(false);
    navigate(`/product/${id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (filteredResults.length > 0) {
        navigate(`/product/${filteredResults[0].id}`);
      } else {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const highlightMatch = (text) => {
    const regex = new RegExp(`(${searchQuery})`, "gi");
    return text.replace(
      regex,
      (match) => `<mark class='bg-yellow-200'>${match}</mark>`
    );
  };

  const categories = [
    "Womens Health",
    "Beauty Health",
    "Weight Management",
    "Kids Health",
    "Bones and Joints",
    "Diabetic Support",
    "Mens Health",
    "Heart Health",
    "Immune Health",
    "Fertility Support",
    "Vitamins and Minerals",
    "Brain and Vision",
    "Stress and Sleep",
    "Syrups",
  ];

  return (
    <>
      <div className="bg-herbal overflow-hidden py-1 whitespace-nowrap text-white text-lg font-semibold">
        <div className="flex animate-marquee">
          <span className="px-4">{message.repeat(2)}</span>
        </div>
      </div>

      <header className="bg-white  z-50 shadow-md shadow-slate-200 top-0 sticky">
        {/* Mobile Header */}
        <div className="flex md:hidden justify-between items-center px-4 py-3">
          <button onClick={toggleMenu} className="text-xl text-gray-500">
            <FaBars />
          </button>
          <NavLink to="/">
            <img src={logo} alt="Logo" className="max-w-[100px]" />
          </NavLink>
          <div className="flex items-center space-x-4 text-xl text-gray-500 relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-herbal"
            >
              <FaSearch />
            </button>
            <button onClick={toggleCart} className="relative hover:text-herbal">
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex justify-around items-center px-6 py-3">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="max-w-[120px]" />
          </NavLink>

          <nav className="flex space-x-10 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pb-1 transition-all ${
                  isActive
                    ? "text-herbal border-b-2 border-herbal"
                    : "text-gray-500 hover:text-herbal hover:border-b-2 border-transparent"
                }`
              }
            >
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <span className="pb-1 text-gray-500 hover:text-herbal cursor-pointer border-b-2 border-transparent hover:border-herbal">
                ByCategory ▾
              </span>
              {productDropdownOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-md rounded-md mt-2 z-50 w-72 grid grid-cols-2 gap-3 p-4">
                  {categories.map((category, index) => {
                    const slug = category
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[&'/]/g, "");
                    return (
                      <NavLink
                        key={index}
                        to={`/products/${slug}`}
                        className="text-sm text-gray-600 hover:text-herbal"
                      >
                        {category}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>

            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `pb-1 transition-all ${
                  isActive
                    ? "text-herbal border-b-2 border-herbal"
                    : "text-gray-500 hover:text-herbal hover:border-b-2 border-transparent"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pb-1 transition-all ${
                  isActive
                    ? "text-herbal border-b-2 border-herbal"
                    : "text-gray-500 hover:text-herbal hover:border-b-2 border-transparent"
                }`
              }
            >
              Contact Us
            </NavLink>
             <NavLink
              to="/allproducts"
              className={({ isActive }) =>
                `pb-1 transition-all ${
                  isActive
                    ? "text-herbal border-b-2 border-herbal"
                    : "text-gray-500 hover:text-herbal hover:border-b-2 border-transparent"
                }`
              }
            >
              All Products
            </NavLink>
          </nav>

          <div className="flex items-center text-xl space-x-6 text-gray-500">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-herbal"
            >
              <FaSearch />
            </button>
            <button onClick={toggleCart} className="relative hover:text-herbal">
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Cart Drawer */}
        <div
          className={`fixed top-0 right-0 w-[350px] h-full bg-white shadow-xl z-[999] transition-transform duration-300 ${
            cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">Shopping Cart</h3>
            <button onClick={() => setCartOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-9rem)]">
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center border-b pb-3"
                >
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 object-contain hover:scale-105 transition-transform"
                      onClick={() => setCartOpen(false)}
                      
                    />
                  </Link>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-600">
                      Rs. {item.price.toLocaleString()} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-4 border-t bg-gray-50 absolute bottom-0 w-full">
              <div className="flex justify-between font-semibold text-sm mb-3">
                <span>Total:</span>
                <span>
                  Rs.{" "}
                  {cartItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString()}
                </span>
              </div>
              <button
                className="w-full bg-herbal hover:bg-green-700 text-white py-2 px-4 rounded text-sm transition"
                onClick={() => {
                  setCartOpen(false);
                  navigate("/cart");
                   setCartOpen(false)
                }}
              >
                View Cart
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-base font-medium">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-gray-500 hover:text-herbal"
            >
              <FaHome /> Home
            </NavLink>

            <button
              onClick={() => setMobileProductDropdown(!mobileProductDropdown)}
              className="flex items-center justify-between w-full text-gray-500 hover:text-herbal"
            >
              <span className="flex items-center gap-2">
                <FaThLarge /> All Products
              </span>
              <FaChevronDown
                className={`${
                  mobileProductDropdown ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {mobileProductDropdown && (
              <div className="ml-5 space-y-1">
                {categories.map((category, index) => {
                  const slug = category
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[&'/]/g, "");
                  return (
                    <NavLink
                      key={index}
                      to={`/products/${slug}`}
                      onClick={toggleMenu}
                      className="block text-gray-500 hover:text-herbal py-1"
                    >
                      {category}
                    </NavLink>
                  );
                })}
              </div>
            )}

            <NavLink
              to="/aboutus"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-gray-500 hover:text-herbal"
            >
              <FaInfoCircle /> About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-gray-500 hover:text-herbal"
            >
              <FaPhone /> Contact Us
            </NavLink>
          </div>
        )}

        {/* Search Results */}
        {showSearch && (
          <div className="bg-white px-6 py-2 border-b shadow-md relative z-30">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-herbal"
            />
            {searchQuery && (
              <div className="absolute bg-white w-full mt-2 max-h-64 overflow-y-auto shadow z-50 rounded">
                {filteredResults.length > 0 ? (
                  filteredResults.map((product) => (
                    <div
                      key={product.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-10 h-10 object-contain"
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightMatch(product.title),
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No results found.
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </header>

      
    </>
  );
};

export default Header;
