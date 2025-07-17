import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactimg from '../../images/shifacontact.jpg'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLeaf,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div data-aos="fade-down">
          <FaLeaf className="text-herbal text-4xl mx-auto mb-2" />
          <h2 className="text-4xl font-bold text-herbal uppercase tracking-wide">
            Contact Us
          </h2>
        </div>
        <p
          className="text-gray-600 mt-3 max-w-xl mx-auto text-sm"
          data-aos="fade-up"
        >
          Whether you need product assistance, want to ask a question, or just want to say hello —
          we’re here for you!
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
         <img src={contactimg} className="max-h-[400px]" alt="" data-aos='zoom-in' />
        {/* Contact Info */}
        <div className="space-y-8" data-aos="fade-right">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-herbal text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Our Office</h4>
              <p className="text-gray-600">
            Shifa Industries , Plot no 24, Sundar Industrial Estate, Lahore , Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-herbal text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">0300-0174432</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-herbal text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">help@shifayaab.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-herbal text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Working Hours</h4>
              <p className="text-gray-600">Mon - Sat: 24/7</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
      
      </div>

      {/* Map Section */}
      <div className="mt-16 rounded overflow-hidden shadow-lg" data-aos="fade-up">
        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
