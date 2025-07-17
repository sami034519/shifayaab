import {
 FaFacebookF, FaInstagram, FaYoutube, FaGoogle
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import logo from "../../images/shifafooterlogo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ContactUs from '../CONTACTus/Contactus';
export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
    <ContactUs/>
    <footer className="bg-herbal overflow-hidden text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section with Logo and Text */}
        <div className="text-center md:text-left" data-aos="fade-up">
          <p className="text-sm">Medical Supplies & Healthcare</p>
          <NavLink to="/" className="mt-2 inline-block md:block">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto md:mx-0 mt-2 lg:max-w-[130px] max-w-[100px] hover:scale-110 transition-transform duration-300"
            />
          </NavLink>
        </div>

        {/* Responsive Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm border-b border-green-700 pb-6 mt-6" data-aos="fade-down" data-aos-delay="200">
          <div>
            <h3 className="font-semibold text-lg uppercase mb-2">Products</h3>
            <ul className="space-y-1">
              <li>Medicines</li>
              <li>Wellness Kits</li>
              <li>Supplements</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-lg mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Doctor Consultation</li>
              <li>Prescription Refill</li>
              <li>Lab Tests</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-lg mb-2">Support</h3>
            <ul className="space-y-1">
              <NavLink to={'/contact'} >Contact Us </NavLink>
              <li>FAQs</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-lg mb-2">Company</h3>
            <ul className="space-y-1">
              <li className='cursor-pointer'> <NavLink to={'/aboutus'} >About Us</NavLink> </li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6 text-xl">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 rounded-full border border-white text-white hover:text-[#1877F2] hover:border-[#1877F2] transition"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/shifayaabpakistan?igsh=YXhrcXl4b3BicXMx"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 rounded-full border border-white text-white hover:text-[#E4405F] hover:border-[#E4405F] transition"
  >
    <FaInstagram />
  </a>
  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 rounded-full border border-white text-white hover:text-[#FF0000] hover:border-[#FF0000] transition"
  >
    <FaYoutube />
  </a>
  <a
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 rounded-full border border-white text-white hover:text-[#4285F4] hover:border-[#4285F4] transition"
  >
    <FaGoogle />
  </a>
</div>

        {/* Copyright */}
        <p className="text-center text-sm mt-4" >
          &copy; {new Date().getFullYear()} Shifayaab. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
