import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeadset, FaTruck, FaEnvelope } from "react-icons/fa";
import deliveryimg from "../../images/ordernow.png";

const features = [
  {
    icon: <FaHeadset className="w-6 h-6 text-black" />,
    title: "24hrs Customer Support",
  },
  {
    icon: <FaTruck className="w-6 h-6 text-black" />,
    title: "Fast Medicine Delivery",
  },
  {
    icon: <FaEnvelope className="w-6 h-6 text-black" />,
    title: "Email Notification",
  },
];

function Delivey() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      {/* Delivery Banner */}
      <div className="flex flex-col overflow-hidden lg:mt-5 sm:flex-row justify-center items-center gap-8 sm:gap-16 py-6 px-4 flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 lg:text-center text-left"
          >
            <div
              className="bg-gray-100 rounded-full p-3 flex items-center justify-center"
              data-aos="fade-down"
            >
              {feature.icon}
            </div>
            <span
              className="font-semibold text-base sm:text-lg uppercase text-black"
              data-aos="fade-left"
            >
              {feature.title}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-herbal overflow-hidden py-10 px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          {/* Left Text Content */}
          <div className="text-white flex flex-col gap-6 text-center md:text-left">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase"
              data-aos="fade-right"
            >
              Get Medicines
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl" data-aos="fade-right">
              Bringing It to Your Doorstep – Anywhere in Lahore
            </p>
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase"
              data-aos="fade-right"
            >
              Order Now!
            </h1>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left">
            <img
              src={deliveryimg}
              className="w-[250px] sm:w-[300px] md:w-[400px] h-auto mx-auto"
              alt="delivery"
            />
          </div>
        </div>
      </div>

      {/* Feature Row */}
    </>
  );
}

export default Delivey;
