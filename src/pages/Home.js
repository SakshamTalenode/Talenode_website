import React, { useState } from "react";
import landIcon from "../assets/landing-img.png";
import SubscribeCard from "../components/SubscribeCard";
import logo from "../assets/nav-logo.png";
import Marquee from "react-fast-marquee";
import Tilt from "react-parallax-tilt";
import challengeImg from "../assets/landing-img.png";

const Home = () => {

  const [currContent, setCurrContent] = useState(1);
  let content;
  let head;
  let img = challengeImg;
  if(currContent === 1){
    head = "Inaccurate, Soiled People Data";
    content = "Spend inordinate resources in stitching and cleaning data, yet end up with bad data yielding flawed insights";
  }else if(currContent === 2){
    head = "Track Metrics that are feasible";
    content = "With incomplete data, foundational, lagging metrics get prioritized that do not uncover the real insights";
  }else if(currContent === 3){
    head = "Ineffective Visualizations";
    content = "Most visualizations are costly real estate, hence, the challenge of fitting in the relevant information for relevant decision makers";
  }else if(currContent === 4){
    head = "Lack of Data-Led Actioning";
    content = "Decision makers struggle to make sense of self-service dashboards, thereby leading to intertia and gut-based actioning";
  }

  return (
    <div className="homePage">
      <div className="hero">
        <div className="hero-sec1">
          <div className="flex flex-col gap-4">
            <p className="header-hero">
              You Nurture Talent, We Nurture Data
            </p>
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

      <div className="challenges-homePage">
        <p className="headerChallenges-home">
          Solve Big Work-force Challenges
        </p>

        <div className="buttSec-home">
          <div className="buttons-buttSec">
            <button className={currContent === 1 ? "highButt" : ""} onClick={() => setCurrContent(1)}>Inaccurate Data</button>
            <button className={currContent === 2 ? "highButt" : ""} onClick={() => setCurrContent(2)}>Lagging Metrics</button>
            <button className={currContent === 3 ? "highButt" : ""} onClick={() => setCurrContent(3)}>Ineffective Visualisations</button>
            <button className={currContent === 4 ? "highButt" : ""} onClick={() => setCurrContent(4)}>Lack of Data-Led Actioning</button>
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
      
      <div className="home-sec2">
        <p className="header-sec2">
          Building a Valuable, Forward-Thinking Talent Organization.
        </p>
        <p className="tagline-sec2">
          Talenode tackles the complexities of people analytics so that you can
          focus on what truly matters...
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
              <p className="header-card">People Analytics</p>
              <p className="tagline-card">
                We prioritize data accuracy and unification.
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div className="card-sec2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="114"
                viewBox="0 0 115 114"
                fill="none"
              >
                <path
                  d="M98.1252 56.9997C95.2328 57.0145 92.3979 57.8089 89.9189 59.2991L78.3042 47.6844L87.6195 38.3691C89.1427 36.8454 89.9984 34.7792 89.9984 32.6247C89.9984 30.4703 89.1427 28.404 87.6195 26.8804L63.2445 2.50535C61.7209 0.982153 59.6546 0.126465 57.5002 0.126465C55.3457 0.126465 53.2794 0.982153 51.7558 2.50535L27.3808 26.8804C25.8576 28.404 25.0019 30.4703 25.0019 32.6247C25.0019 34.7792 25.8576 36.8454 27.3808 38.3691L36.6961 47.6844L25.0814 59.2991C21.64 57.2572 17.5715 56.5419 13.64 57.2875C9.70846 58.0331 6.18437 60.1883 3.7295 63.3485C1.27463 66.5086 0.0578628 70.4562 0.307697 74.45C0.55753 78.4438 2.25678 82.209 5.08633 85.0386C7.91589 87.8681 11.6811 89.5674 15.6749 89.8172C19.6687 90.067 23.6163 88.8503 26.7764 86.3954C29.9366 83.9405 32.0918 80.4164 32.8374 76.4849C33.583 72.5534 32.8677 68.4849 30.8258 65.0435L42.4405 53.4288L51.7558 62.7441C52.2595 63.2349 52.8249 63.6583 53.4377 64.0035V81.3747H41.2502V113.875H73.7502V81.3747H61.5627V63.9994C62.1752 63.6554 62.7405 63.2335 63.2445 62.7441L72.5599 53.4288L84.1745 65.0435C82.3754 68.1297 81.6464 71.724 82.1011 75.2673C82.5557 78.8106 84.1684 82.1044 86.6884 84.6365C89.2085 87.1686 92.4945 88.797 96.0356 89.2685C99.5768 89.74 103.174 89.0282 106.269 87.2438C109.364 85.4594 111.782 82.7024 113.148 79.4015C114.514 76.1006 114.751 72.4408 113.823 68.9913C112.894 65.5418 110.851 62.4959 108.012 60.3273C105.173 58.1587 101.698 56.9888 98.1252 56.9997ZM25.0002 73.2497C25.0002 74.8567 24.5236 76.4276 23.6308 77.7637C22.7381 79.0999 21.4691 80.1413 19.9845 80.7562C18.4998 81.3712 16.8661 81.5321 15.29 81.2186C13.714 80.9051 12.2662 80.1313 11.1299 78.995C9.99361 77.8587 9.21978 76.4109 8.90628 74.8348C8.59277 73.2587 8.75367 71.6251 9.36864 70.1404C9.9836 68.6558 11.025 67.3868 12.3612 66.494C13.6973 65.6012 15.2682 65.1247 16.8752 65.1247C19.03 65.1247 21.0967 65.9808 22.6204 67.5045C24.1441 69.0282 25.0002 71.0948 25.0002 73.2497ZM65.6252 89.4997V105.75H49.3752V89.4997H65.6252ZM57.5002 56.9997L33.1252 32.6247L57.5002 8.24973L81.8752 32.6247L57.5002 56.9997ZM98.1252 81.3747C96.5182 81.3747 94.9473 80.8982 93.6111 80.0054C92.275 79.1126 91.2336 77.8437 90.6186 76.359C90.0037 74.8744 89.8428 73.2407 90.1563 71.6646C90.4698 70.0885 91.2436 68.6408 92.3799 67.5045C93.5162 66.3682 94.964 65.5944 96.54 65.2808C98.1161 64.9673 99.7498 65.1282 101.234 65.7432C102.719 66.3582 103.988 67.3996 104.881 68.7357C105.774 70.0719 106.25 71.6428 106.25 73.2497C106.25 75.4046 105.394 77.4712 103.87 78.995C102.347 80.5187 100.28 81.3747 98.1252 81.3747Z"
                  fill="#4A7C29"
                />
              </svg>
              <p className="header-card">The Perfect Synergy</p>
              <p className="tagline-card">
                Expertise of 'People' with efficiency and precision.
              </p>
            </div>
          </Tilt>

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
              <p className="header-card">Our Effort, Your ROI</p>
              <p className="tagline-card">
                Building a strong data-led foundation.
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="114"
                viewBox="0 0 115 114"
                fill="none"
              >
                <path
                  d="M98.1252 56.9997C95.2328 57.0145 92.3979 57.8089 89.9189 59.2991L78.3042 47.6844L87.6195 38.3691C89.1427 36.8454 89.9984 34.7792 89.9984 32.6247C89.9984 30.4703 89.1427 28.404 87.6195 26.8804L63.2445 2.50535C61.7209 0.982153 59.6546 0.126465 57.5002 0.126465C55.3457 0.126465 53.2794 0.982153 51.7558 2.50535L27.3808 26.8804C25.8576 28.404 25.0019 30.4703 25.0019 32.6247C25.0019 34.7792 25.8576 36.8454 27.3808 38.3691L36.6961 47.6844L25.0814 59.2991C21.64 57.2572 17.5715 56.5419 13.64 57.2875C9.70846 58.0331 6.18437 60.1883 3.7295 63.3485C1.27463 66.5086 0.0578628 70.4562 0.307697 74.45C0.55753 78.4438 2.25678 82.209 5.08633 85.0386C7.91589 87.8681 11.6811 89.5674 15.6749 89.8172C19.6687 90.067 23.6163 88.8503 26.7764 86.3954C29.9366 83.9405 32.0918 80.4164 32.8374 76.4849C33.583 72.5534 32.8677 68.4849 30.8258 65.0435L42.4405 53.4288L51.7558 62.7441C52.2595 63.2349 52.8249 63.6583 53.4377 64.0035V81.3747H41.2502V113.875H73.7502V81.3747H61.5627V63.9994C62.1752 63.6554 62.7405 63.2335 63.2445 62.7441L72.5599 53.4288L84.1745 65.0435C82.3754 68.1297 81.6464 71.724 82.1011 75.2673C82.5557 78.8106 84.1684 82.1044 86.6884 84.6365C89.2085 87.1686 92.4945 88.797 96.0356 89.2685C99.5768 89.74 103.174 89.0282 106.269 87.2438C109.364 85.4594 111.782 82.7024 113.148 79.4015C114.514 76.1006 114.751 72.4408 113.823 68.9913C112.894 65.5418 110.851 62.4959 108.012 60.3273C105.173 58.1587 101.698 56.9888 98.1252 56.9997ZM25.0002 73.2497C25.0002 74.8567 24.5236 76.4276 23.6308 77.7637C22.7381 79.0999 21.4691 80.1413 19.9845 80.7562C18.4998 81.3712 16.8661 81.5321 15.29 81.2186C13.714 80.9051 12.2662 80.1313 11.1299 78.995C9.99361 77.8587 9.21978 76.4109 8.90628 74.8348C8.59277 73.2587 8.75367 71.6251 9.36864 70.1404C9.9836 68.6558 11.025 67.3868 12.3612 66.494C13.6973 65.6012 15.2682 65.1247 16.8752 65.1247C19.03 65.1247 21.0967 65.9808 22.6204 67.5045C24.1441 69.0282 25.0002 71.0948 25.0002 73.2497ZM65.6252 89.4997V105.75H49.3752V89.4997H65.6252ZM57.5002 56.9997L33.1252 32.6247L57.5002 8.24973L81.8752 32.6247L57.5002 56.9997ZM98.1252 81.3747C96.5182 81.3747 94.9473 80.8982 93.6111 80.0054C92.275 79.1126 91.2336 77.8437 90.6186 76.359C90.0037 74.8744 89.8428 73.2407 90.1563 71.6646C90.4698 70.0885 91.2436 68.6408 92.3799 67.5045C93.5162 66.3682 94.964 65.5944 96.54 65.2808C98.1161 64.9673 99.7498 65.1282 101.234 65.7432C102.719 66.3582 103.988 67.3996 104.881 68.7357C105.774 70.0719 106.25 71.6428 106.25 73.2497C106.25 75.4046 105.394 77.4712 103.87 78.995C102.347 80.5187 100.28 81.3747 98.1252 81.3747Z"
                  fill="#4A7C29"
                />
              </svg>
              <p className="header-card">The Perfect Synergy</p>
              <p className="tagline-card">
                Expertise of 'People' with efficiency and precision.
              </p>
            </div>
          
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
              <p className="header-card">Our Effort, Your ROI</p>
              <p className="tagline-card">
                Building a strong data-led foundation.
              </p>
            </div>
          
        </div>
      </div>

      <div className="home-sec2 home-sec3">
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
      </div>

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
      </div>
    </div>
  );
};

export default Home;
