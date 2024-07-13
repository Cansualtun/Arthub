import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

interface BannerProps {
  title: string;
  description?: string;
  imagePath: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, imagePath }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={imagePath}
        alt="banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        {description && (
          <p className="mt-4 text-xl mx-96 !font-normal">{description}</p>
        )}
      </div>
    </div>
  );
};

interface BannerSliderProps {
  banners: BannerProps[];
}

const BannerSlider: React.FC<BannerSliderProps> = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {banners?.map((banner, index) => (
        <Banner key={index} {...banner} />
      ))}
    </Slider>
  );
};

export default BannerSlider;
