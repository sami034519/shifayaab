import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactImg from '../../images/caontactimg.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, product, message } = formData;

    // ✅ Format message for WhatsApp
    const whatsappNumber = "+923000174432"; // <-- Replace with your number
    const text = `Hello! I have a query:\n\n*Name:* ${name}\n*Email:* ${email}\n*Product:* ${product}\n*Message:* ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(text)}`;

    // ✅ Open WhatsApp with message
    window.open(whatsappURL, "_blank");
  };

  const products = ['HerCare', 'Diafix', 'Uricare', 'Slimfit'];

  return (
    <section className="lg:py-16 overflow-hidden py-10 px-4 mt-4 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image + Text */}
        <div data-aos="fade-right" className="text-center md:text-left">
          <img src={contactImg} alt="Contact Us" className="w-full rounded-lg max-w-md mx-auto md:mx-0" />
          <h2 className="text-3xl font-bold text-herbal mt-6">Need Help or Have Questions?</h2>
          <p className="text-gray-600 mt-2">Our team is here to support your wellness journey. Send us a message and we’ll get back to you shortly.</p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-5"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-herbal">Contact Us</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-herbal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-herbal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="product"
            className="w-full border border-gray-300 px-4 py-2 rounded text-gray-700"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select a Product</option>
            {products.map((prod, idx) => (
              <option key={idx} value={prod}>{prod}</option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-herbal"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-herbal w-full text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
