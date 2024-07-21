import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import leader from "../assets/leader.png";



const CarouselAbout = () => {
  return (
    <div>
      <Carousel className='carouselAbout' showArrows={true} showIndicators={false} showThumbs={false} showStatus={false}>
            <div>
              <img src={leader} />
              <p className="pt-3 heroCA">Leader Name 1</p>
              <p className='tagCA'>Description</p>
            </div>
            <div>
              <img src={leader} />
              <p className="heroCA pt-3">Legend 2</p>
              <p className='tagCA'>Description</p>
            </div>
            <div>
              <img src={leader} />
              <p className="heroCA pt-3">Legend 3</p>
              <p className='tagCA'>Description</p>
            </div>
          </Carousel>
    </div>
  )
}

export default CarouselAbout
