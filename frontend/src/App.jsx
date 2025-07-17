// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';
import Footer from './components/Footer/Footer';
import CartPage from './components/redux/Cart';
import ScrollToTop from './components/ScrolltoTop';
import CategoryPage from './components/categorypage/CategoryPage';
import SearchResults from './components/Search';
import ProductDetail from './components/productsdetail/ProductsDetail';
import AllProductsPage from './components/Allproducts/ALLproducts';
import AboutUs from './components/Aboutus/AboutUs';
import ContactUs from './components/contactpage/Contactpage';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* ScrollToTop must go inside Router context but outside Routes */}
      <ScrollToTop />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
           <Route path="/products/:categorySlug" element={<CategoryPage />} />
           <Route path="/search" element={<SearchResults />} />
<Route path="/product/:id" element={<ProductDetail />} />
 <Route path="/allproducts" element={<AllProductsPage />} />
 <Route path="/aboutus" element={<AboutUs />} />
 <Route path="/contact" element={<ContactUs />} />
 



          {/* Add more routes here */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
