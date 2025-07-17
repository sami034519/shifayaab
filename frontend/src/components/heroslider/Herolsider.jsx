import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';

import useIsMobile from './Useismobile';

// Image imports
import slider11 from '../../images/Banner-4.svg';
import slider12 from '../../images/diafixmobile.jpg';
import slider21 from '../../images/Banner-1.svg';
import slider22 from '../../images/uricare mobile.jpg';
import slider31 from '../../images/Banner-2.svg';
import slider32 from '../../images/slimmobile.jpg';
import slider41 from '../../images/Banner-3.svg';
import slider42 from '../../images/herbalancemobile.jpg';

const slides = [
  { desktopImage: slider11, mobileImage: slider12, alt: 'Banner 1' },
  { desktopImage: slider21, mobileImage: slider22, alt: 'Banner 2' },
  { desktopImage: slider31, mobileImage: slider32, alt: 'Banner 3' },
  { desktopImage: slider41, mobileImage: slider42, alt: 'Banner 4' },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile(); // 👈 detect screen size

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <div className="w-full mx-auto px-0 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative  overflow-hidden h-[80vh] md:h-[70vh] lg:h-[90vh]">
              <img
                src={isMobile ? slide.mobileImage : slide.desktopImage}
                alt={slide.alt}
                className={`w-full h-full object-cover ${
                  activeIndex === index
                    ? ''
                    : ''
                }`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
