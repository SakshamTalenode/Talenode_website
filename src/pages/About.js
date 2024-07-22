import React from "react";
import hero from "../assets/hero-about.png";
import CarouselAbout from "../components/CarouselAbout";
import Marquee from "react-fast-marquee";
import logo from "../assets/nav-logo.png";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const About = () => {
  return (
    <div className="aboutPage">
      <div className="hero-about flex justify-between w-full">
        <div>
          <p className="headerHero-about">Our Mission Statement</p>
          <p className="tagHero-about">
            Talenode tackles the complexities of people analytics so that you
            can focus on what truly matters...
          </p>
        </div>
        <img src={hero} />
      </div>

      <div className="sec2-about w-full flex flex-col gap-8 items-center">
        <p className="headerHero-about">Our product vs other vendors</p>
        <p className="tagHero-about">
          Talenode tackles the complexities of people analytics so that you can
          focus on what truly matters...
        </p>
        <div className="cards-about flex justify-between w-full">
          <div>Statement 1</div>
          <div>Statement 2</div>
          <div>Statement 3</div>
        </div>
      </div>

      <div className="leaders-about flex justify-between items-center">
        <div className="sec1-leaders flex flex-col gap-5">
          <p className="headerHero-about text-center w-100">Meet our Leaders</p>
          <p className="tagHero-about text-center w-100">
            Experience From company logos - Aon, Deloitte, CEB etc
          </p>
        </div>
        <div className="sec2-leaders carousel-about">
          <SlArrowLeft  className="arrowleft"/>
          <SlArrowRight className="arrowright"/>
          <CarouselAbout />
        </div>
      </div>

      <div className="marquee-aboutPage pb-20">
        <p className="headerHero-about text-center pb-10">Strategic Partners</p>
        <div>
        <Marquee pauseOnHover="true" direction="right" speed={100}>
          <div className="marquee">
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
          </div>
        </Marquee>
      </div>
      </div>

      <div className="contact-about">
        <div className="sec1-contact">
          <p className="headerHero-about">Contact Us</p>
          <div className="contact-details">
            <p><b>Phone: </b> xx xxxxxxxxxx</p>
            <p><b>Address: </b> 1234, abcd, wxyz</p>
            <p><b>E-Mail: </b> abcdefg@gmail.com</p>
          </div>
          <div className="email-contactAbout">
            <input type="email" placeholder="Type your email..." className=" pl-5"/>
            <button>Contact</button>
          </div>
        </div>
        <div className="sec2-contact">
          <p>THIS IS A DEMO</p>
          <button>Demo</button>
        </div>
      </div>
    </div>
  );
};

export default About;
