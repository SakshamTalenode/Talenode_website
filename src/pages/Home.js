import React, { useState } from "react";
import landIcon from "../assets/IMG3-8.png";
import SubscribeCard from "../components/SubscribeCard";
import analytics from "../assets/card1-icon.png";
import synergy from "../assets/Synergy Icon-8.png";
import roi from "../assets/ROI Icon-8.png";
import logo from "../assets/nav-logo.png";
import { products } from "../utils/data";
import Marquee from "react-fast-marquee";
import Tilt from "react-parallax-tilt";
import chal1 from "../assets/IMG5a-8.png";
import chal2 from "../assets/IMG5b-8.png";
import chal3 from "../assets/IMG5c-8.png";
import chal4 from "../assets/IMG5d-8.png";

const Home = () => {
  const [currContent, setCurrContent] = useState(1);
  let content;
  let head;
  let img = chal1;
  if (currContent === 1) {
    head = "Inaccurate, Soiled People Data";
    content =
      "Spend inordinate resources in stitching and cleaning data, yet end up with bad data yielding flawed insights";
    img = chal1;
  } else if (currContent === 2) {
    head = "Track Metrics that are feasible";
    content =
      "With incomplete data, foundational, lagging metrics get prioritized that do not uncover the real insights";
    img = chal2;
  } else if (currContent === 3) {
    head = "Ineffective Visualizations";
    content =
      "Most visualizations are costly real estate, hence, the challenge of fitting in the relevant information for relevant decision makers";
    img = chal3;
  } else if (currContent === 4) {
    head = "Lack of Data-Led Actioning";
    content =
      "Decision makers struggle to make sense of self-service dashboards, thereby leading to intertia and gut-based actioning";
    img = chal4;
  }

  return (
    <div className="homePage">
      <div className="hero">
        <div className="hero-sec1">
          <div className="flex flex-col gap-4">
            <p className="header-hero">You Nurture Talent, <br/> We Nurture Data</p>
            <p className="tagline-hero">
              Talenode guides organizations to look beyond the bend, so they can
              build a forward-thinking talent organization
            </p>
          </div>
          <button className="hero-button">Speak with us</button>
        </div>
        <div className="hero-sec2">
          <img src={landIcon} />
        </div>
      </div>

      <div className="home-sec2">
        <p className="header-sec2">
          The Talenode Advantage
        </p>
        <p className="tagline-sec2">
          Talenode tackles the complexities of people analytics so that you can
          focus on what truly matters...<br/>
          Building a Valuable, Forward-Thinking Talent Organization.
        </p>
        <div className="cards-home-sec2 flex-wrap">
          <Tilt>
            <div className="card-sec2">
              <img src={analytics} width="150px" height="150px"/>
              <p className="header-card">Start-to-End People Analytics</p>
              <p className="tagline-card">
                Unified, clean data to derive actionable insights for decision
                makers to proactively respond.
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div className="card-sec2">
              <img src={synergy} width="150px" height="150px"/>
              <p className="header-card">Blend of Advisory and Analytics</p>
              <p className="tagline-card">
                Combine the expertise of 'People' with the effectiveness of
                'Technology' to deliver robust people analytics solutions
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div className="card-sec2">
            <img src={roi} width="150px" height="150px"/>
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
            <img src={analytics} width="150px" height="150px"/>
            <p className="header-card">People Analytics</p>
            <p className="tagline-card">
              We prioritize data accuracy and unification.
            </p>
          </div>

          <div className="card-sec2">
          <img src={synergy} width="150px" height="150px"/>
            <p className="header-card">Advisory and Analytics</p>
            <p className="tagline-card">
              Expertise of 'People' with efficiency and precision.
            </p>
          </div>

          <div className="card-sec2">
          <img src={roi} width="150px" height="150px"/>
            <p className="header-card">Our Effort, Your ROI</p>
            <p className="tagline-card">
              Building a strong data-led foundation.
            </p>
          </div>
        </div>
      </div>

      <div className="challenges-homePage">
        <p className="headerChallenges-home">Challenges We Solve</p>

        <div className="buttSec-home">
          <div className="buttons-buttSec">
            <button
              className={currContent === 1 ? "highButt" : ""}
              onClick={() => setCurrContent(1)}
            >
              Inaccurate Data
            </button>
            <button
              className={currContent === 2 ? "highButt" : ""}
              onClick={() => setCurrContent(2)}
            >
              Lagging Metrics
            </button>
            <button
              className={currContent === 3 ? "highButt" : ""}
              onClick={() => setCurrContent(3)}
            >
              Ineffective Visualisations
            </button>
            <button
              className={currContent === 4 ? "highButt" : ""}
              onClick={() => setCurrContent(4)}
            >
              Lack of Data-Led Actioning
            </button>
          </div>
          <div className="content-buttSec">
            <div>
              <p className="header-buttSec">{head}</p>
              <p className="tagline-buttSec">{content}</p>
            </div>
            <img src={img} />
          </div>
        </div>
      </div>

      <div className="products-home">
        <div className="product-solution">
          <p className="header-heroProduct">Our Suite of Offerings</p>
          <p className="tagline-heroProduct" style={{ padding: "0" }}>
            Talenode aims to take the burning people analytics challenges head
            on.
          </p>
        </div>

        {products.map((product) => (
          <div
            className={product.toggle ? "product-feature" : "reverse-product"}
          >
            <div className="feature-sec1">
              <div>
                <p className="head-feature">{product.name}</p>
                <p className="desc-feature">{product.tagHome}</p>
              </div>
              <a href={`/products/${product.name}`}>
                <button>Learn More</button>
              </a>
            </div>

            <img src={product.imgHome} />
          </div>
        ))}
      </div>

      {/* <div className="home-sec2 home-sec3">
        <p className="header-sec2 header-sec3">
          People Analytics Journey Comes With It's Challenges
        </p>
        <p className="tagline-sec2 tagline-sec3">
          A multi-line statement elaborating challenges
        </p>

        <div className="cards-sec3">
          <div className="bigCard-sec3">
            <p>
              Super Impose Challenge with Our ideal solution stack and on hover
              you can click on it
            </p>
          </div>
          <div className="smallCards-sec3">
            <div className="smallCard-sec3">
              <p>Before intervention by Talenode</p>
            </div>
            <div className="smallCard-sec3">
              <p>After intervention by Talenode</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="carousel-home">
        <Marquee pauseOnHover="true" direction="right" speed={50}>
          <div className="marquee">
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
          </div>
        </Marquee>
      </div> */}

      <div className="subCard-sec">
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
            <a href="mailto:ContactUs@talenode.com" className="btn-actionCard">Speak With Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
