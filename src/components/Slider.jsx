import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full shadow-lg w-10 h-10 flex items-center justify-center z-10 cursor-pointer hover:bg-green-600 hover:text-white "
    >
      <span className="text-xl font-bold">{'>'}</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full shadow-lg w-10 h-10 flex items-center justify-center z-10 cursor-pointer hover:bg-green-600 hover:text-white "
    >
      <span className="text-xl font-bold ">{'<'}</span>
    </div>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://d91ztyz4qy326.cloudfront.net/storeking/27/conversions/slider_three-cover.png",
    "https://d91ztyz4qy326.cloudfront.net/storeking/26/conversions/slider_two-cover.png",
    "https://d91ztyz4qy326.cloudfront.net/storeking/25/conversions/slider_one-cover.png",
  ];

  return (
    <div className="w-full rounded-2xl h-96">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img 
              src={url} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-auto rounded-xl shadow-lg" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
