import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaGoogle,
  FaFlickr,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-herbal overflow-hidden text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-center md:text-left">Shifayaab</h1>
          <p className="text-sm text-center md:text-left">Medical Supplies & Healthcare</p>
        </div>

        {/* Responsive Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm border-b border-green-700 pb-6 mt-6">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-2">Products</h3>
            <ul className="space-y-1">
              <li>Medicines</li>
              <li>Wellness Kits</li>
              <li>Supplements</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold uppercase text-lg mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Doctor Consultation</li>
              <li>Prescription Refill</li>
              <li>Lab Tests</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold uppercase text-lg mb-2">Support</h3>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold uppercase text-lg mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-6 text-xl">
          <div className="p-1 rounded-full border border-white"><FaFacebookF /></div>
          <div className="p-1 rounded-full border border-white"><FaTwitter /></div>
          <div className="p-1 rounded-full border border-white"><FaRss /></div>
          <div className="p-1 rounded-full border border-white"><FaGoogle /></div>
          <div className="p-1 rounded-full border border-white"><FaFlickr /></div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-4">
          &copy; {new Date().getFullYear()} Shifayaab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
