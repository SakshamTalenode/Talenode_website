import React, { useState } from "react";
import sample from "../assets/DataDrive-hero.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SubscribeCard from "../components/SubscribeCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Resources = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [toggle, setToggle] = useState(1);

  return (
    <div className="resourcesPage">
      <div className="topics-resources flex justify-between">
        <button
          style={
            toggle === 1
              ? { background: "#4A7C29", color: "#fff", border: "none" }
              : { background: "#F0F8EA" }
          }
          onClick={() => setToggle(1)}
        >
          All Topics
        </button>

        <button
          style={
            toggle === 2
              ? { background: "#4A7C29", color: "#fff" }
              : { background: "#F0F8EA" }
          }
          onClick={() => setToggle(2)}
        >
          Topic 1
        </button>

        <button
          style={
            toggle === 3
              ? { background: "#4A7C29", color: "#fff" }
              : { background: "#F0F8EA" }
          }
          onClick={() => setToggle(3)}
        >
          Topic 2
        </button>

        <button
          style={
            toggle === 4
              ? { background: "#4A7C29", color: "#fff" }
              : { background: "#F0F8EA" }
          }
          onClick={() => setToggle(4)}
        >
          Topic 3
        </button>
      </div>

      <div id="case-studies" className="caseStudies-resources">
        {/* <SlArrowLeft  className="arrowleft"/>
        <SlArrowRight className="arrowright"/> */}
        <p className=" text-center">Case Studies</p>
        <Carousel
          className="carousel-CS"
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>Case Study 1 <br/> (SWIPE -->)</div>
          <div>Case Study 2</div>
          <div>Case Study 3</div>
          <div>Case Study 4</div>
          <div>Case Study 5</div>
          
        </Carousel>
      </div>

      <div id="blogs" className="blogs-resources flex flex-col items-center gap-10">
        <p className="">Blog</p>
        <div className="blogCards flex justify-between items-center gap-10">
          <div className="blog1 flex justify-center items-center">Blog 1</div>
          <div className="blog2-3 flex flex-col justify-between gap-5">
            <div className="blog2 flex justify-center items-center">Blog 2</div>
            <div className="blog2 flex justify-center items-center">Blog 3</div>
          </div>
        </div>

        <div id="whitepapers" className="other-articles flex justify-between gap-10">
          <div className="flex justify-center items-center">White Papers</div>
          <div className="flex justify-center items-center">Upcoming Webinars</div>
        </div>
      </div>

      <div className="subCard-resources flex justify-center items-center">
          <SubscribeCard />
      </div>
    </div>
  );
};

export default Resources;
