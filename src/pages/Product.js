import React, {useState} from 'react';

const Product = ({prop}) => {

  const [toggle, setToggle] = useState(true);

  return (
    <div className='productPage'>
      <div className='hero-product'>
        <p className='header-heroProduct'>{prop.headerLand}</p>
        <p className='tagline-heroProduct'>{prop.tagLand}</p>
        <img src={prop.heroImg}/>
      </div>

      <div className='sec2-product'>
        <p className='header-heroProduct'>{prop.header2}</p>

        {prop.productFeatures.map((feature) => (
            <div className={feature.toggle ? "product-feature" : "reverse-product"}>
              <div className='feature-sec1'>
                <div>
                  <p className='head-feature'>{feature.name}</p>
                  <p className='desc-feature'>{feature.desc}</p>
                </div>
                <button>
                  Demo
                </button>
              </div>
            
              <img src={feature.img}/>
            </div>
        )
        )
        }
      </div>

      <div className='sec3-product'>
        <p>Sample Content multi-line</p>
        <button>
          Demo
        </button>
      </div>

    </div>
  )
}

export default Product;
