import React, { useState, useEffect } from "react";

const Product = ({ prop }) => {
  const [currBtn, setCurrBtn] = useState(prop.productFeatures[0]);
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <div className="productPage">
      <div className="hero-product">
        <p className="header-heroProduct">{prop.headerLand}</p>
        <p className="tagline-heroProduct">{prop.tagLand}</p>
        <img src={prop.heroImg} />
      </div>

      <div className="hero-product">
        <p className="header-heroProduct">{prop.challengeStatement}</p>
        <p className="tagline-heroProduct">{prop.challengeDesc}</p>
        <img src={prop.challengeImg} />
      </div>

      {/* <div className="sec2-product">
        <div className="product-solution">
          <p className="header-heroProduct">{prop.header2}</p>
          <p className="tagline-heroProduct" style={{ padding: "0" }}>
            {prop.tag2}
          </p>
        </div>

        {prop.productFeatures.map((feature) => (
          <div
            className={feature.toggle ? "product-feature" : "reverse-product"}
          >
            <div className="feature-sec1">
              <div>
                <p className="head-feature">{feature.name}</p>
                <p className="desc-feature">{feature.desc}</p>
              </div>
              <a href={feature.demoLink}><button>Learn More</button></a>
            </div>

            <img src={feature.img} />
          </div>
        ))}
      </div> */}

      <div className="features-product">
        <p className="headerChallenges-home text-center pb-7">{prop.header2}</p>

        <div className="buttSec-Product">
          <div className="buttons-buttSec">
            {prop.productFeatures.map((feature, index) => (
              <button
                className={index === currIndex ? "highButt" : ""}
                onClick={() => {
                  setCurrBtn(feature);
                  setCurrIndex(index);
                }}
              >
                {feature.name}
              </button>
            ))}
          </div>
          <div className="content-buttSec">
            <div>
              <p className="header-buttSec">{currBtn.name}</p>
              <p className="tagline-buttSec">{currBtn.desc}</p>
              {/* <a href={currBtn.demoLink}>
                <button>Learn More</button>
              </a> */}
            </div>
            <img src={currBtn.img} />
          </div>
        </div>
      </div>

      {/* <div className="howItWorks-product">
        <div>
          <p className="header-how">{prop.headerHow}</p>

          <div>
            {prop.stepsHow.map((step, index) => (
              <p className="steps-how"> <b>Step {index+1}:</b> {step}</p>
            ))}
          </div>
        </div>

        <img src={prop.howImg} />
      </div> */}

      <div className="benefits-product">
        <div>
          <p className="header-how">{prop.benefitsHead}</p>

          <div>
            {prop.benefits.head.map((benefit, index) => (
              <p className="steps-how">
                <b>{benefit}</b> {prop.benefits.desc[index]}
              </p>
            ))}
          </div>
        </div>

        <img src={prop.benefitsImg} />
      </div>

      {/* <div className="sec3-product">
        <div className="">
          <p className="header-sec3Product">Ready to Clean Your HR Data?</p>
          <p className="tag-sec3Product">
            Get Started with Data Validator or Request a Demo
          </p>
        </div>
        <button>Demo</button>
      </div> */}

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
  );
};

export default Product;
