import React from "react";

const UseCase = ({ prop }) => {
  return (
    <div className="ucPage">
      <div className="heroUC">
        <div className="heroUC-sec1 flex flex-col gap-4">
          <p className="header-hero">{prop.headerLand}</p>
          <p className="tagline-hero">{prop.tagLand}</p>
        </div>
        <div className="hero-sec2">
          <img src={prop.landImg} />
        </div>
      </div>

      <div className="uc-sec2 w-full gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="header-heroProduct uc-header-mob">{prop.header2}</p>
          <p className="tagline-heroProduct tag-ucSec2 uc-tag-mob">{prop.tag2}</p>
        </div>
        <div className="problem-cards w-full flex justify-between flex-wrap">
          {prop.problems.map((problem) => (
            <div className="problem-card">
              <p>{problem}</p>
            </div>
          ))}
        </div>
        <div className="solutionUC-card pt-5">
          {prop.solution}
        </div>
        <button>
          View a Case Study
        </button>
        
      </div>

      <div className='sec3-product'>
        <p>Sample Content multi-line</p>
        <button>
          Demo
        </button>
      </div>

    </div>
  );
};

export default UseCase;
