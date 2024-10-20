import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import navLogo from "../assets/nav-logo.png";
import { products, useCases } from "../utils/data";
import dropbtn from "../assets/dropbtn.png";
import dropbtn2 from "../assets/dropbtn2.png";
import { SlArrowDown } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [dropbutton, setDropbutton] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => setDropbutton(false))

  return (
    <div
      className={scrolled ? "navbar shadownav" : "navbar"}
      onMouseLeave={() => setDropbutton(false)}
    >
      <a
        className="nav-logo-container"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        href="/"
      >
        <img className="nav-logo" src={navLogo} />
      </a>

      <div className="nav-headers">
        <div className="dropdown">
          <a
            // onClick={() => {
            //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            // }}
            // href="/Solutions"
            className="dropbtn flex items-center gap-1.5"
          >
            <p>Solutions</p>
          </a>
          <div className="dropdown-content">
            <div className="dropdown-content-container">
              {/* <p>By product</p> */}
              {products.map((product) => (
                <a
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  href={`/products/${product.name}`}
                  className="drop-a drop-a-sol"
                >
                  {product.name}
                  <HiArrowSmallRight className="nav-link-highlight" />
                </a>
              ))}
            </div>
            {/* <div className="dropdown-content-container">
              <p>By use Case</p>
              {useCases.map((useCase) => (
                <a
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  href={`/useCases/${useCase.name}`}
                  className="drop-a drop-a-sol"
                >
                  {useCase.name}<HiArrowSmallRight className="nav-link-highlight" />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        <div class="dropdown">
          <a
            // href="/Resources/#"
            // onClick={() => {
            //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            // }}
            className="dropbtn flex items-center justify-evenly gap-1.5"
          >
            <p>Resources</p>
          </a>
          <div class="dropdown-content">
            <div className="dropdown-content-container">
              <a href="/Resources/CaseStudies" className="drop-a">
                Case Studies
                <HiArrowSmallRight className="nav-link-highlight" />
              </a>
              <a href="/Resources/Blogs" className="drop-a">
                Blogs
                <HiArrowSmallRight className="nav-link-highlight" />
              </a>
              {/* <a href="/Resources/#whitepapers" className="drop-a">
                Whitepapers<HiArrowSmallRight className="nav-link-highlight" />
              </a>
              <a href="/Resources/#whitepapers" className="drop-a">
                Webinars<HiArrowSmallRight className="nav-link-highlight" />
              </a> */}
            </div>
          </div>
        </div>

        <div class="dropdown">
          <a
            // href="/About"
            // onClick={() => {
            //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            // }}
            className="dropbtn flex items-center justify-evenly gap-1.5"
          >
            <p>Meet Talenode</p>
          </a>
          <div class="dropdown-content drop-exception">
            <div className="dropdown-content-container px-0">
              <a href="/about" className="drop-a">
                About Us
                <HiArrowSmallRight className="nav-link-highlight" />
              </a>
              <a href="/about#contact" className="drop-a">
                Contact Us
                <HiArrowSmallRight className="nav-link-highlight" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-mobile flex flex-col">
        <a
          onClick={() => {
            setDropbutton(!dropbutton);
          }}
          href="javascript:void(0)"
        >
          <img src={dropbutton ? dropbtn2 : dropbtn} />
        </a>
        {dropbutton ? (
          <div className="drop-content flex flex-col gap-4">
            <div
              onClick={() => setToggle(!toggle)}
              className={toggle ? "dropdown" : "dropdown2"}
            >
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                to="/Solutions"
                className="dropbtn dropbtn-solns flex items-center gap-2 "
              >
                Solutions
                <SlArrowDown className="down-button-hover p-0" />
              </div>
              <div class={toggle ? "dropdown-content-mob" : "hidden"}>
                <div className="dropdown-content-container-mob">
                  {/* <p>By product</p> */}
                  {products.map((product) => (
                    <a
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      href={`/products/${product.name}`}
                      className="drop-a"
                    >
                      • {product.name}
                    </a>
                  ))}
                </div>
                {/* <div className="dropdown-content-container-mob">
                  <p>By use Case</p>
                  {useCases.map((useCase) => (
                    <a
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      href={`/useCases/${useCase.name}`}
                      className="drop-a"
                    >
                      • {useCase.name}
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
            <div
              onClick={() => setToggle(!toggle)}
              className={toggle ? "dropdown" : "dropdown2"}
            >
              <div
                // onClick={() => {
                //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                // }}
                // to="/Resources"
                className="dropbtn dropbtn-solns flex items-center gap-2 res-nav-mob"
              >
                Resources
                <SlArrowDown className="down-button-hover p-0" />
              </div>
              <div class={toggle ? "dropdown-content-mob" : "hidden"}>
                <div className="dropdown-content-container-mob">
                  <a
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    href="/Resources/CaseStudies"
                    className="drop-a"
                  >
                    • Case Studies
                  </a>
                  <a
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    href="Resources/Blogs"
                    className="drop-a"
                  >
                    • Blogs
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/About"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="dropbtn dropdown gap-1.5"
            >
              Meet Talenode
            </a>
          </div>
        ) : (
          <div className="empty-navmob"></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
