import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import DerPolo from "../images/1Der Polo.png";
import DerTiago from "../images/1Der Taigo.png";
import DerNeueTCross from "../images/1Der neue T-Cross.png";
import GKlass from "../images/1GKlass.png";
import GLA from "../images/1GLA 250 e.png";
import I7 from "../images/1I7.png";

const BilderCarousel = () => {
  const images=[DerPolo,DerTiago,DerNeueTCross,GKlass,GLA,I7]

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