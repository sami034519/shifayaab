import React, { useState } from 'react';
import faqImage from '../../images/faqsimg.png'; // Replace with your actual image
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const faqData = [
  {
    question: 'What is HerCare used for?',
    answer: 'HerCare is designed to support hormonal balance, mood, and overall women’s wellness. It is ideal for PMS and menopause symptoms.',
  },
  {
    question: 'How does Diafix help with sugar control?',
    answer: 'Diafix helps maintain healthy blood glucose levels naturally and supports insulin function using herbal ingredients.',
  },
  {
    question: 'Is Uricare suitable for joint pain?',
    answer: 'Yes, Uricare helps reduce uric acid buildup, easing joint discomfort and improving mobility.',
  },
  {
    question: 'Can Slimfit be used for weight loss?',
    answer: 'Slimfit boosts metabolism and supports fat-burning with herbal extracts. Best results occur with regular use and a healthy diet.',
  },
];

const FAQs = () => {
     useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="lg:py-0 px-4 overflow-hidden bg-white">
        <div className="w-full flex text-gray-700 mb-5 justify-center items-center">
        <div className="py-10 px-4 w-full lg:w-[70%] text-center overflow-hidden">
          <div className="flex items-center justify-center gap-2 ">
            <div className="flex-grow border-t border-black" data-aos="fade-left"></div>
            <h2 className="mx-4 text-2xl font-bold whitespace-nowrap uppercase" data-aos="fade-down">
              FAQs
            </h2>
            <div className="flex-grow border-t border-black" data-aos="fade-right"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl bg-green-50 lg:py-5 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1 rounded-lg">
          <img src={faqImage} alt="FAQs" className="w-full rounded-lg max-w-md mx-auto" data-aos='fade-down' />
        </div>

        {/* Right Accordion */}
        <div className="flex-1 w-full">
        
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className=" rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4  bg-herbal hover:bg-slimfitbg transition"
                  data-aos='fade-down'
                >
                  <span className="text-left font-medium text-white">{faq.question}</span>
                  <span className="text-2xl text-white">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`px-6 text-gray-600 text-sm transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-40 py-3 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
