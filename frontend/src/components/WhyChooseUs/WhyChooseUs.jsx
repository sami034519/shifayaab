import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className="w-full  py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center overflow-hidden justify-center gap-2 mb-3 lg:mb-6">
          <div
            className="flex-grow border-t border-black"
            data-aos="fade-left"
          ></div>
          <h2
            className="mx-4 text-2xl font-bold text-gray-700 whitespace-nowrap"
            data-aos="fade-down"
          >
            WHY CHOOSE SHIFAYAAB
          </h2>
          <div
            className="flex-grow border-t border-black"
            data-aos="fade-right"
          ></div>
        </div>
        <div className="w-full flex justify-center overflow-hidden">
          <p
            className=" lg:text-lg text-base text-gray-500 w-[90%] lg:w-[60%] mb-3 lg:mb-12"
            data-aos="fade-left"
          >
            Experience the healing power of nature with our 100% natural
            products. We are committed to purity, quality, and customer
            well-being.
          </p>
        </div>

        {/* Thumbnail Preview */}
        <div
          onClick={openModal}
          className="relative cursor-pointer max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
        >
          {/* Replace with actual image or use poster frame later */}
          <img
            src="/images/videobg1f.png" // ← use a thumbnail image instead of video
            alt="Why Choose Us Video"
            className="w-full h-auto object-cover"
            data-aos="fade-down"
          />

          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center  justify-center bg-black bg-opacity-40">
            <div className="bg-white text-herbal rounded-full  p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>
          </div>

          {/* Duration Tag (Bottom Left) */}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
            3:34
          </div>
        </div>

        {/* Video Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full  max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-white text-3xl font-bold z-10 hover:text-red-500"
              >
                &times;
              </button>

              {/* Video Player */}
            <div className="w-full h-[500px]">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/9fQ3nzQgpNI?autoplay=1&mute=1"
    title="Why Choose Shifayaab"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
