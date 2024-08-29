import React from 'react'

const DataSight = ({prop}) => {
  return (
    <div>
      <div className="productPage">
      <div className="hero-product">
        <p className="header-heroProduct">{prop.headerLand}</p>
        <p className="tagline-heroProduct">{prop.tagLand}</p>
        <img src={prop.heroImg} />
      </div>

      <div className="sec2-product">
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
              <button>Learn More</button>
            </div>

            <img src={feature.img} />
          </div>
        ))}
      </div>

      <div className="sec3-product">
        <div className="">
        <p className="header-sec3Product">Ready to Clean Your HR Data?</p>
        <p className="tag-sec3Product">Get Started with Data Validator or Request a Demo</p>
        </div>
        <button>Demo</button>
      </div>
    </div>
    </div>
  )
}

export default DataSight;
