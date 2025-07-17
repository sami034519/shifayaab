import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import missionimg from "../../images/shifamission.jpg";
import {
  FaLeaf,
  FaHeartbeat,
  FaHandsHelping,
  FaRecycle,
  FaFlask,
} from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-7xl overflow-hidden mx-auto px-4 py-16 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold text-herbal uppercase"
          data-aos="fade-down"
        >
          About Us
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
          data-aos="fade-up"
        >
          At SHIFAYAAB, we believe in nature's power to heal, nourish, and
          uplift. Our herbal supplements are crafted with care to support your
          health naturally.
        </p>
        <div
          className="w-24 h-1 bg-herbal mx-auto mt-6"
          data-aos="zoom-in"
        ></div>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
        <img
          src={missionimg}
          alt="Our Mission"
          className="rounded-xl shadow-lg h-[400px] w-full"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4 text-herbal">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We aim to bridge the gap between ancient herbal wisdom and modern
            health needs. With carefully selected ingredients and eco-conscious
            processes, our mission is to deliver quality supplements that
            contribute to a healthier, happier you.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 mb-4">
            We believe wellness is not just a destination—it's a daily practice.
            That’s why we focus on formulating natural, effective, and
            affordable remedies that align with your lifestyle and long-term
            health goals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Rooted in trust and transparency, we’re committed to providing
            herbal solutions that are lab-tested, safe, and made with integrity.
            When you choose Minna Minnie, you choose a future rooted in nature
            and backed by science.
          </p>
        </div>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-20">
        <div
          className="p-6 rounded-lg shadow-md bg-green-50"
          data-aos="zoom-in-up"
        >
          <FaLeaf className="text-4xl text-herbal mx-auto mb-4" />
          <h4 className="text-lg font-bold">100% Herbal</h4>
          <p className="text-sm text-gray-600 mt-2">
            We use nature’s finest herbs, free from harmful chemicals or
            synthetic fillers.
          </p>
        </div>
        <div
          className="p-6 rounded-lg shadow-md bg-pink-50"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <FaHeartbeat className="text-4xl text-herbal mx-auto mb-4" />
          <h4 className="text-lg font-bold">Health-Centric</h4>
          <p className="text-sm text-gray-600 mt-2">
            Every product is crafted to support well-being—from immunity to
            heart health.
          </p>
        </div>
        <div
          className="p-6 rounded-lg shadow-md bg-yellow-50"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <FaHandsHelping className="text-4xl text-herbal mx-auto mb-4" />
          <h4 className="text-lg font-bold">Trusted Support</h4>
          <p className="text-sm text-gray-600 mt-2">
            We value every customer like family, and we’re here for your
            wellness journey.
          </p>
        </div>
        <div
          className="p-6 rounded-lg shadow-md bg-indigo-50"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <FaRecycle className="text-4xl text-herbal mx-auto mb-4" />
          <h4 className="text-lg font-bold">Eco-Friendly</h4>
          <p className="text-sm text-gray-600 mt-2">
            Sustainability is part of our roots. Our packaging and process
            respect the earth.
          </p>
        </div>
        <div
          className="p-6 rounded-lg shadow-md bg-teal-50"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <FaFlask className="text-4xl text-herbal mx-auto mb-4" />
          <h4 className="text-lg font-bold">Lab-Tested</h4>
          <p className="text-sm text-gray-600 mt-2">
            Every batch is tested for purity, quality, and consistency—your
            safety matters.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="bg-herbal text-white text-center py-12 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-semibold mb-2">
         ROOTED IN NATURE - BACKED BY SCIENCE
        </h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Explore our full range of herbal supplements made with love and
          science.
        </p>
        <a
          href="/allproducts"
          className="inline-block bg-white text-herbal px-6 py-3 rounded font-semibold hover:bg-green-100 transition"
        >
          Explore Products
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
