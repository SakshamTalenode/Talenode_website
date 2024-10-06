import React, { useState } from "react";
import landIcon from "../assets/IMG3-8.png";
import SubscribeCard from "../components/SubscribeCard";
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
            <p className="header-hero">You Nurture Talent, We Nurture Data</p>
            <p className="tagline-hero">
              Talenode gu ides organizations to look beyond the bend, so they can
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="122"
                viewBox="0 0 115 122"
                fill="none"
              >
                <path
                  d="M16.875 77.9974V40.9718L42.0625 26.0868L37.9309 19.0911L10.7447 35.1583C10.1369 35.5177 9.63328 36.0293 9.2835 36.6427C8.93371 37.2561 8.74984 37.95 8.75 38.6561V77.9974C6.38193 78.8346 4.33037 80.383 2.87598 82.4308C1.42159 84.4786 0.635412 86.9257 0.625 89.4374C0.625 96.1568 6.09312 101.625 12.8125 101.625C19.5319 101.625 25 96.1568 25 89.4374C24.9896 86.9257 24.2034 84.4786 22.749 82.4308C21.2946 80.383 19.2431 78.8346 16.875 77.9974ZM12.8125 93.4999C11.7665 93.4531 10.7788 93.0046 10.0552 92.2479C9.33154 91.4911 8.92766 90.4844 8.92766 89.4374C8.92766 88.3903 9.33154 87.3836 10.0552 86.6269C10.7788 85.8701 11.7665 85.4217 12.8125 85.3749C13.8585 85.4217 14.8462 85.8701 15.5698 86.6269C16.2935 87.3836 16.6973 88.3903 16.6973 89.4374C16.6973 90.4844 16.2935 91.4911 15.5698 92.2479C14.8462 93.0046 13.8585 93.4531 12.8125 93.4999ZM102.188 77.2499C95.4681 77.2499 90 82.718 90 89.4374C90 90.8714 90.2925 92.2283 90.7516 93.508L57.5 113.154L31.4837 97.7818L27.3522 104.777L55.4322 121.369C56.058 121.74 56.772 121.936 57.4994 121.936C58.2269 121.937 58.9413 121.742 59.5678 121.373L95.9678 99.8618C97.7959 100.955 99.9084 101.625 102.188 101.625C108.907 101.625 114.375 96.1568 114.375 89.4374C114.375 82.718 108.907 77.2499 102.188 77.2499ZM102.188 93.4999C101.141 93.4531 100.154 93.0046 99.4302 92.2479C98.7065 91.4911 98.3027 90.4844 98.3027 89.4374C98.3027 88.3903 98.7065 87.3836 99.4302 86.6269C100.154 85.8701 101.141 85.4217 102.188 85.3749C103.234 85.4217 104.221 85.8701 104.945 86.6269C105.668 87.3836 106.072 88.3903 106.072 89.4374C106.072 90.4844 105.668 91.4911 104.945 92.2479C104.221 93.0046 103.234 93.4531 102.188 93.4999ZM57.5 24.4374C60.4697 24.4374 63.155 23.3283 65.2716 21.5611L98.125 40.9758V69.1249H106.25V38.6561C106.25 37.95 106.066 37.2561 105.716 36.6427C105.367 36.0293 104.863 35.5177 104.255 35.1583L69.4519 14.5939C69.6035 13.8356 69.6821 13.0543 69.6875 12.2499C69.6875 5.5305 64.2194 0.0623779 57.5 0.0623779C50.7806 0.0623779 45.3125 5.5305 45.3125 12.2499C45.3125 18.9693 50.7806 24.4374 57.5 24.4374ZM57.5 8.18738C58.3046 8.18657 59.0914 8.42449 59.7608 8.87103C60.4302 9.31756 60.952 9.95262 61.2603 10.6959C61.5686 11.4391 61.6495 12.2571 61.4927 13.0463C61.3359 13.8355 60.9485 14.5605 60.3796 15.1294C59.8106 15.6984 59.0856 16.0858 58.2964 16.2426C57.5072 16.3993 56.6892 16.3185 55.946 16.0102C55.2027 15.7019 54.5677 15.18 54.1211 14.5107C53.6746 13.8413 53.4367 13.0545 53.4375 12.2499C53.4375 10.0074 55.2616 8.18738 57.5 8.18738Z"
                  fill="#4A7C29"
                />
              </svg>
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
              <p className="header-card">Perfect Synergy of Advisory</p>
              <p className="tagline-card">
                Combine the expertise of 'People' with the effectiveness of
                'Technology' to deliver robust people analytics solutions
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div className="card-sec2">
            <img src={roi} width="115px" height="115px"/>
              <p className="header-card">Maximize Your Analytics ROI</p>
              <p className="tagline-card">
                We take on the intensive work of building a strong data-led
                foundation, ensuring you focus your efforts on problem solving,
                thereby deriving maximum value from people analytics.
              </p>
            </div>
          </Tilt>
        </div>

        <div className="cards-home-sec2-mobile ">
          <div className="card-sec2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="115"
              height="122"
              viewBox="0 0 115 122"
              fill="none"
            >
              <path
                d="M16.875 77.9974V40.9718L42.0625 26.0868L37.9309 19.0911L10.7447 35.1583C10.1369 35.5177 9.63328 36.0293 9.2835 36.6427C8.93371 37.2561 8.74984 37.95 8.75 38.6561V77.9974C6.38193 78.8346 4.33037 80.383 2.87598 82.4308C1.42159 84.4786 0.635412 86.9257 0.625 89.4374C0.625 96.1568 6.09312 101.625 12.8125 101.625C19.5319 101.625 25 96.1568 25 89.4374C24.9896 86.9257 24.2034 84.4786 22.749 82.4308C21.2946 80.383 19.2431 78.8346 16.875 77.9974ZM12.8125 93.4999C11.7665 93.4531 10.7788 93.0046 10.0552 92.2479C9.33154 91.4911 8.92766 90.4844 8.92766 89.4374C8.92766 88.3903 9.33154 87.3836 10.0552 86.6269C10.7788 85.8701 11.7665 85.4217 12.8125 85.3749C13.8585 85.4217 14.8462 85.8701 15.5698 86.6269C16.2935 87.3836 16.6973 88.3903 16.6973 89.4374C16.6973 90.4844 16.2935 91.4911 15.5698 92.2479C14.8462 93.0046 13.8585 93.4531 12.8125 93.4999ZM102.188 77.2499C95.4681 77.2499 90 82.718 90 89.4374C90 90.8714 90.2925 92.2283 90.7516 93.508L57.5 113.154L31.4837 97.7818L27.3522 104.777L55.4322 121.369C56.058 121.74 56.772 121.936 57.4994 121.936C58.2269 121.937 58.9413 121.742 59.5678 121.373L95.9678 99.8618C97.7959 100.955 99.9084 101.625 102.188 101.625C108.907 101.625 114.375 96.1568 114.375 89.4374C114.375 82.718 108.907 77.2499 102.188 77.2499ZM102.188 93.4999C101.141 93.4531 100.154 93.0046 99.4302 92.2479C98.7065 91.4911 98.3027 90.4844 98.3027 89.4374C98.3027 88.3903 98.7065 87.3836 99.4302 86.6269C100.154 85.8701 101.141 85.4217 102.188 85.3749C103.234 85.4217 104.221 85.8701 104.945 86.6269C105.668 87.3836 106.072 88.3903 106.072 89.4374C106.072 90.4844 105.668 91.4911 104.945 92.2479C104.221 93.0046 103.234 93.4531 102.188 93.4999ZM57.5 24.4374C60.4697 24.4374 63.155 23.3283 65.2716 21.5611L98.125 40.9758V69.1249H106.25V38.6561C106.25 37.95 106.066 37.2561 105.716 36.6427C105.367 36.0293 104.863 35.5177 104.255 35.1583L69.4519 14.5939C69.6035 13.8356 69.6821 13.0543 69.6875 12.2499C69.6875 5.5305 64.2194 0.0623779 57.5 0.0623779C50.7806 0.0623779 45.3125 5.5305 45.3125 12.2499C45.3125 18.9693 50.7806 24.4374 57.5 24.4374ZM57.5 8.18738C58.3046 8.18657 59.0914 8.42449 59.7608 8.87103C60.4302 9.31756 60.952 9.95262 61.2603 10.6959C61.5686 11.4391 61.6495 12.2571 61.4927 13.0463C61.3359 13.8355 60.9485 14.5605 60.3796 15.1294C59.8106 15.6984 59.0856 16.0858 58.2964 16.2426C57.5072 16.3993 56.6892 16.3185 55.946 16.0102C55.2027 15.7019 54.5677 15.18 54.1211 14.5107C53.6746 13.8413 53.4367 13.0545 53.4375 12.2499C53.4375 10.0074 55.2616 8.18738 57.5 8.18738Z"
                fill="#4A7C29"
              />
            </svg>
            <p className="header-card">People Analytics</p>
            <p className="tagline-card">
              We prioritize data accuracy and unification.
            </p>
          </div>

          <div className="card-sec2">
          <img src={synergy} width="150px" height="150px"/>
            <p className="header-card">The Perfect Synergy</p>
            <p className="tagline-card">
              Expertise of 'People' with efficiency and precision.
            </p>
          </div>

          <div className="card-sec2">
          <img src={roi} width="115px" height="115px"/>
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
          <p className="header-heroProduct">Our suite of Offerings</p>
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

      <div className="carousel-home">
        <Marquee pauseOnHover="true" direction="right" speed={50}>
          <div className="marquee">
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
          </div>
        </Marquee>
      </div>

      <div className="subCard-sec">
        <SubscribeCard />
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

export default Home;
