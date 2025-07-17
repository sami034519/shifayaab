import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTruck, FaUserMd, FaHospitalAlt, FaCapsules } from 'react-icons/fa';

const features = [
  {
    icon: <FaTruck size={24} />,
    title: 'Fast Medicine Delivery',
    description:
      'Fast medicine home delivery in Lahore. Free shipping on orders 5000 and above. Multiple options to place an order.',
    animation: 'fade-right',
  },
  {
    icon: <FaUserMd size={24} />,
    title: 'Expert Advice',
    description:
      'Trust our trained pharmacists and staff to provide expert advice, personalized care and highest quality products.',
    animation: 'fade-left',
  },
  {
    icon: <FaHospitalAlt size={24} />,
    title: 'Accessibility',
    description:
      'Convenience at your fingertips! Discover four accessible locations paired with hassle-free online delivery for all your healthcare shopping needs.',
    animation: 'fade-right',
  },
  {
    icon: <FaCapsules size={24} />,
    title: 'Well-Stocked',
    description:
      'CSH Pharmacy is your ultimate destination for medicines, health and wellness essentials, where we maintain fresh inventory to meet your health needs.',
    animation: 'fade-left',
  },
];

const Benifits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-green-50 py-16 overflow-hidden px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-y-16 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
            data-aos={feature.animation}
          >
            <div className="bg-herbal text-white rounded-full p-4">
              <span className="block transform transition-transform duration-500 hover:translate-x-[12px] group-hover:scale-110 group-hover:text-white group cursor-pointer">
                {feature.icon}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benifits;
