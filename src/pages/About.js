import React, { useState } from "react";
import hero from "../assets/hero-about.png";
import CarouselAbout from "../components/CarouselAbout";
import Marquee from "react-fast-marquee";
import analytics from "../assets/card1-icon.png";
import synergy from "../assets/Synergy Icon-8.png";
import SubscribeCard from "../components/SubscribeCard";
import roi from "../assets/ROI Icon-8.png";
import logo from "../assets/nav-logo.png";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Tilt from "react-parallax-tilt";
import { leaders } from "../utils/data";
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";

const About = () => {
  const [currleader, setCurrleader] = useState(leaders[0]);

  return (
    <div className="aboutPage">
      <div className="hero-about flex justify-between w-full">
        <div>
          <p className="headerHero-about">
            You Nurture Talent, We Nurture Data
          </p>
          <p className="tagHero-about">
            Talenode guides organizations to look beyond the bend, so they can
            build a forward-thinking talent organization
          </p>
        </div>
        <img src={hero} />
      </div>

      <div className="sec2-about w-full flex flex-col gap-8 items-center">
        <p className="headerHero-about">About Us</p>
        <p className="tagHero-about tagabout">
          At Talenode, we’re not just another talent analytics platform—we’re
          the future of data-driven action. In a world where talent is the
          heartbeat of every organization, we turn unruly, fragmented data into
          powerful actions that keep you ahead of the curve.
          <br />
          <br /> We believe that data should do more than just inform and
          definitely more than expecting the decision makers to make sense of
          it; it should actually drive your next move. That’s why we’ve built a
          seamless solution that transforms complex talent data into clear,
          actionable guidance, helping you navigate the ever-evolving landscape
          of work with confidence.
          <br />
          <br /> Whether you’re looking to understand your workforce better,
          anticipate challenges, or accelerate growth, we’re here to fuel your
          journey with precision and impact. With our innovative technology and
          advisory support, we empower organizations to focus on what they do
          best—nurturing talent—while we take care of the data that drives
          success.
          <br />
          <br /> <b>Join us, and let’s shape the future of work together</b>.
        </p>
        <div className="cards-home-sec2 flex-wrap">
          <Tilt>
            <div className="card-sec2">
              <img src={analytics} width="150px" height="150px" />
              <p className="header-card">Start-to-End People Analytics</p>
              <p className="tagline-card">
                Unified, clean data to derive actionable insights for decision
                makers to proactively respond.
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div className="card-sec2">
              <img src={synergy} width="150px" height="150px" />
              <p className="header-card">Perfect Synergy of Advisory</p>
              <p className="tagline-card">
                Combine the expertise of 'People' with the effectiveness of
                'Technology' to deliver robust people analytics solutions
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div className="card-sec2">
              <img src={roi} width="150px" height="150px" />
              <p className="header-card">Maximize Your Analytics ROI</p>
              <p className="tagline-card">
                We take on the intensive work of building a strong data-led
                foundation, ensuring you focus your efforts on problem solving.
              </p>
            </div>
          </Tilt>
        </div>

        <div className="cards-home-sec2-mobile ">
          <div className="card-sec2">
            <img src={analytics} width="150px" height="150px" />
            <p className="header-card">People Analytics</p>
            <p className="tagline-card">
              We prioritize data accuracy and unification.
            </p>
          </div>

          <div className="card-sec2">
            <img src={synergy} width="150px" height="150px" />
            <p className="header-card">The Perfect Synergy</p>
            <p className="tagline-card">
              Expertise of 'People' with efficiency and precision.
            </p>
          </div>

          <div className="card-sec2">
            <img src={roi} width="150px" height="150px" />
            <p className="header-card">Our Effort, Your ROI</p>
            <p className="tagline-card">
              Building a strong data-led foundation.
            </p>
          </div>
        </div>
      </div>

      <div className="meet-talenode">

        <p className="headerHero-about w-100">Meet our Leaders</p>

        <div className="cards-meet">
          {leaders.map((leader) => (
            <div className="card-meet">
              <img src={leader.img}/>
              <div>
                <p className="name-leader">{leader.name}</p>
                <p className="tag-leader">{leader.designation}</p>
                <p className="desc-leader">{leader.desc}</p>
                <p className="exp-leader"><i>Ex - {leader.comps}</i></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="leaders-about flex justify-between items-center">
        <div className="sec1-leaders flex flex-col gap-5">
          <p className="headerHero-about w-100">Meet our Leaders</p>
          <p className="tagHero-about text-center w-100">
            "{currleader.desc}"
          </p>
          <p className="tagHero-about " ><b> - {currleader.name} </b>, {currleader.designation} <br/> <i className="leader-comps">{currleader.comps}</i> </p>
        </div>
        <div className="sec2-leaders carousel-about">
          <button onClick={() => setCurrleader(leaders[0])} className="img1" >
            <img src={leaders[0].img} className={currleader === leaders[0] ? "leader-hover" : "leader-hover2"}/>
          </button>
          <button onClick={() => setCurrleader(leaders[1])} className="img2">
            <img  src={leaders[1].img} className={currleader === leaders[1] ? "leader-hover" : "leader-hover2"} />
          </button>
          <button onClick={() => setCurrleader(leaders[2])} className="img3">
            <img src={leaders[2].img} className={currleader === leaders[2] ? "leader-hover" : "leader-hover2"}/>
          </button>
        </div>
      </div> */}

      {/* <div className="marquee-aboutPage pb-20">
        <p className="headerHero-about text-center pb-10">Strategic Partners</p>
        <div>
          <Marquee pauseOnHover="true" direction="right" speed={50}>
            <div className="marquee">
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
            </div>
          </Marquee>
        </div>
      </div> */}

      {/* <div className="contact-about">
        <div className="sec1-contact">
          <p className="headerHero-about">Contact Us</p>
          <div className="contact-details">
            <p>
              <b>Phone: </b> xx xxxxxxxxxx
            </p>
            <p>
              <b>Address: </b> 1234, abcd, wxyz
            </p>
            <p>
              <b>E-Mail: </b> abcdefg@gmail.com
            </p>
          </div>
          <div className="email-contactAbout">
            <input
              type="email"
              placeholder="Type your email..."
              className=" pl-5"
            />
            <button>Contact</button>
          </div>
        </div>
        <div className="sec2-contact">
          <p>THIS IS A DEMO</p>
          <button>Demo</button>
        </div>
      </div> */}

      <div id="#contact" className="subCard-sec">
        {/* <SubscribeCard /> */}
        <div className="sub-card">
          <div className="header-subCard">
            <p>Take the next step in your people analytics journey today</p>
          </div>
          <div className="email-subCard">
            {/* <input
              className="input-subCard"
              type="text"
              placeholder="Enter your email..."
            /> */}
            <button className="btn-actionCard">Speak With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
