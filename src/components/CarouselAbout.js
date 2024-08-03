import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leader from "../assets/leader.png";
import Slider from "react-slick";

const CarouselAbout = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider className="slider-about" {...settings}>
        <div className="flex flex-col gap-3">
          <img src={leader}/>
          <h3 className="text-center">Leader 1</h3>
          <p className="text-center">Description</p>
        </div>
        <div className="flex flex-col gap-3">
          <img src={leader}/>
          <h3 className="text-center">Leader 2</h3>
          <p className="text-center">Description</p>
        </div>
        <div className="flex flex-col gap-3">
          <img src={leader}/>
          <h3 className="text-center">Leader 3</h3>
          <p className="text-center">Description</p>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselAbout;
