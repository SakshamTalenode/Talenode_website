import React, { useState } from "react";
import { products, useCases } from "../utils/data";
import landImg from "../assets/landing-img.png";
import otherImg from "../assets/DataDrive-hero.png";

const Solutions = () => {
  let imgSrc = landImg;
  const [currID, setCurrID] = useState("one");
  const [currBtn, setCurrBtn] = useState(products[0]);

  products.map((product) => {
    if (currID === product.id) {
      imgSrc = product.imgShort;
    }
  });

  return (
    <div className="solutionsPage">
      <div className="product-solutions">
        <div className="hero-sec1">
          <ul className="accordion" id="accordion">
            {products.map((product) => (
              <li>
                <label for={product.id} className="cursor-pointer">
                  <svg
                    className={
                      currID === product.id
                        ? "accordion-expand"
                        : "accordion-collapse"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="11"
                    viewBox="0 0 22 13"
                    fill="none"
                  >
                    {" "}
                    <path
                      d="M2.44347 0.759229C1.93077 0.246528 1.09946 0.246723 0.586996 0.759666C0.0749416 1.2722 0.0750656 2.10272 0.587275 2.6151L9.76976 11.8008C9.93176 11.9638 10.1244 12.0932 10.3366 12.1815C10.5488 12.2697 10.7763 12.3152 11.0061 12.3152C11.236 12.3152 11.4635 12.2697 11.6757 12.1815C11.8879 12.0932 12.0805 11.9638 12.2425 11.8008L21.4298 2.61503C21.9422 2.10279 21.9422 1.27222 21.4299 0.75994C20.9177 0.247727 20.0873 0.247689 19.575 0.759854L11.0088 9.32452L2.44347 0.759229Z"
                      fill="#404040"
                    />
                  </svg>
                  {product.name}
                </label>
                <input
                  type="radio"
                  name="accordion"
                  id={product.id}
                  checked={product.id === currID ? true : false}
                  onChange={() => setCurrID(product.id)}
                />
                <div className="contentAcc">
                  <p className="headerShort">{product.headerShort}</p>
                  <p className="tagShort">{product.tagShort}</p>
                  <div className="prod-features">
                    {product.features.map((feature) => (
                      <p>• {feature}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-sec2">
          <img src={imgSrc} />
          <button>Demo</button>
        </div>
      </div>

      <div className="uc-solutions">
        {useCases.map((useCase) => (
          <div className={`flex justify-between ${useCase.left ? "flex-row" : "flex-row-reverse text-right"}`}>
            <div className="uc-left ">
              <p className="headerUC-short">{useCase.name}</p>
              <div className="tagShort flex flex-col gap-5">
                <p>Elaborate on the problem statement</p>
                
                {useCase.left ? (
                  <div className="help-points flex flex-col gap-6 px-3">
                  {useCase.helpPoints.map((helpPoint) => (
                    <p>• {helpPoint}</p>
                  ))}
                </div>
                ) : (
                  <div className="help-points flex flex-col gap-6 px-3">
                    {useCase.helpPoints.map((helpPoint) => (
                      <p>{helpPoint} •</p>
                    ))}
                </div>
                )}
                
              </div>
            </div>
            <div className="uc-right flex flex-col gap-4 items-center">
              <img src={otherImg} />
              <button>Demo</button>
            </div>
          </div>
        ))}
      </div>

      <div className="vs-solutions flex flex-col justify-between items-center gap-12">
        <div className="vs-headings flex flex-col gap-5 justify-center items-center">
          <p className="headerUC-short text-center">Our Product vs Other Vendors</p>
          <p className="tagUC-short text-center">Talenode tackles the complexities of people analytics so that you can focus on what truly matters...</p>
        </div>
        <div className='vs-main flex justify-between items-center'>
          <div className="vs-left flex justify-between items-center">
            <div className="talenodeVS flex flex-col gap-5">
              <p className="headingVS">Talenode</p>
              <div className="features-talenode flex flex-col gap-10">
                {currBtn.featureVS.map((feature) =>(
                  <p>• {feature}</p>
                ))}
              </div>
            </div>
            <div className="vendorVS flex flex-col gap-5">
              <p className="headingVS">Other Vendors</p>
              <div className="features-talenode flex flex-col gap-10">
                {currBtn.vendorVS.map((feature) =>(
                    <p>• {feature}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="vs-right flex justify-between items-center flex-col gap-5">
            {products.map((product) => (
              <button onClick={() => setCurrBtn(product)}>
                {product.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
