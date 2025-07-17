import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tag1 from '../../images/tag11.jpg'
import tag2 from '../../images/tag2-removebg-preview.png'
import tag3 from '../../images/tag3-removebg-preview.png'
import tag4 from '../../images/tag4-removebg-preview.png'
import tag5 from '../../images/tag5-removebg-preview.png'

const reviews = [
  {
    client: "Ayesha Malik",
    product: "HerCare",
    message: "HerCare ne meri zindagi badal di! Ab mein zyada energetic aur balanced mehsoos karti hoon.",
    rating: 5,
  },
  {
    client: "Umar Shahbaz",
    product: "Diafix",
    message: "Diafix ne meri sugar level naturally control mein rakhne mein madad ki. Bohat acha product hai!",
    rating: 5,
  },
  {
    client: "Fatima Rizvi",
    product: "Uricare",
    message: "Ab joint pain bilkul khatam! Uricare jaise jadoo ka asar karta hai. Dil se recommend karti hoon!",
    rating: 5,
  },
  {
    client: "Ali Nawaz",
    product: "Slimfit",
    message: "Slimfit ki wajah se mein ne 1 mahine mein 6kg wazan kam kiya. Taste bhi acha hai aur results bhi!",
    rating: 5,
  },
];

const tags = [tag1, tag2, tag3, tag4, tag5];


const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <>
      {[...Array(full)].map((_, i) => <FaStar key={`f-${i}`} className="text-yellow-400" />)}
      {half === 1 && <FaStarHalfAlt className="text-yellow-400" />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`e-${i}`} className="text-yellow-400" />)}
    </>
  );
};

const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
    <div className="max-w-7xl overflow-hidden mx-auto px-4 ">
      {/* Heading */}
      <div className="w-full flex text-gray-700 justify-center mt-5 lg:mt-14 items-center">
        <div className="py-10 px-4 w-full lg:w-[70%] text-center overflow-hidden">
          <div className="flex items-center justify-center gap-2 ">
            <div className="flex-grow border-t border-black" data-aos="fade-left"></div>
            <h2 className="mx-4 text-2xl font-bold whitespace-nowrap uppercase" data-aos="fade-down">
              What Our Clients Say
            </h2>
            <div className="flex-grow border-t border-black" data-aos="fade-right"></div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-4 ">
            <div className="rounded-xl bg-white text-gray-800 p-6 py-10 mb-10  shadow-md h-full transition transform hover:scale-[1.02]">
              <div className="mb-4 text-sm leading-relaxed">
                “{review.message}”
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{review.client}</p>
                  <p className="text-xs text-gray-500">for {review.product}</p>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   <div className="lg:py-10 lg:mt-0 overflow-hidden  flex justify-center items-center px-5">
  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 lg:gap-x-24 max-w-full mx-auto">
    {tags.map((tag, index) => (
      <div key={index} className="flex text-center justify-center items-center">
        <img
          src={tag}
          alt={`Tag ${index + 1}`}
          className="w-28 h-auto object-contain hover:scale-105 transition-transform duration-300"
          data-aos='fade-down'
        />
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default ReviewSlider;
