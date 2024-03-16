import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const BilderCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
        <img src={image} alt={`Slide ${index}`} className="w-full" />
      </div>
      ))}
    </Slider>
  )
}

export default BilderCarousel