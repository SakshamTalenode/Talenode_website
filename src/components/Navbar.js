import React, { useState, useEffect } from "react";
import { Link, redirect, redirectDocument } from "react-router-dom";
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
    <div className="navbar">
      <Link
        className="nav-logo-container"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        to="/"
      >
        <img className="nav-logo" src={navLogo} />
      </Link>

      <div className="nav-headers">
        <div className="dropdown">
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/Solutions"
            className="dropbtn flex items-center gap-1.5"
          >
            <p>
              Solutions
            </p>
          </Link>
          <div className="dropdown-content">
            <div className="dropdown-content-container">
              <p>By product</p>
              {products.map((product) => (
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to={`/products/${product.name}`}
                  className="drop-link drop-link-sol"
                >
                  {product.name}<HiArrowSmallRight className="nav-link-highlight" />
                </Link>
              ))}
            </div>
            <div className="dropdown-content-container">
              <p>By use Case</p>
              {useCases.map((useCase) => (
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to={`/useCases/${useCase.name}`}
                  className="drop-link drop-link-sol"
                >
                  {useCase.name}<HiArrowSmallRight className="nav-link-highlight" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div class="dropdown">
          <Link
            to="/Resources/#"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="dropbtn flex items-center justify-evenly gap-1.5"
          >
            <p>Resources</p>
          </Link>
          <div class="dropdown-content">
            <div className="dropdown-content-container">
              <a href="/Resources/#case-studies" className="drop-link">
                Case Studies<HiArrowSmallRight className="nav-link-highlight" />
              </a>
              <a href="/Resources/#blogs" className="drop-link">
                Blogs<HiArrowSmallRight className="nav-link-highlight" />
              </a>
              <a href="/Resources/#whitepapers" className="drop-link">
                Whitepapers<HiArrowSmallRight className="nav-link-highlight" />
              </a>
              <a href="/Resources/#whitepapers" className="drop-link">
                Webinars<HiArrowSmallRight className="nav-link-highlight" />
              </a>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <Link
            to="/About"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="dropbtn flex items-center justify-evenly gap-1.5"
          >
            <p>About Us</p>
          </Link>
          <div class="dropdown-content drop-exception">
            <div className="dropdown-content-container px-0">
              <Link className="drop-link">Mission<HiArrowSmallRight className="nav-link-highlight" /></Link>
              <Link className="drop-link">Vision<HiArrowSmallRight className="nav-link-highlight" /></Link>
              <Link className="drop-link">Team<HiArrowSmallRight className="nav-link-highlight" /></Link>
              <Link className="drop-link">Contact Us<HiArrowSmallRight className="nav-link-highlight" /></Link>
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
                className="dropbtn flex items-center gap-2"
              >
                Solutions
                <SlArrowDown className="down-button-hover" />
              </div>
              <div class={toggle ? "dropdown-content-mob" : "hidden"}>
                <div className="dropdown-content-container-mob">
                  <p>By product</p>
                  {products.map((product) => (
                    <Link
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      to={`/products/${product.name}`}
                      className="drop-link"
                    >
                      • {product.name}
                    </Link>
                  ))}
                </div>
                <div className="dropdown-content-container-mob">
                  <p>By use Case</p>
                  {useCases.map((useCase) => (
                    <Link
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      to={`/useCases/${useCase.name}`}
                      className="drop-link"
                    >
                      • {useCase.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/Resources"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="dropbtn dropdown gap-1.5"
            >
              Resources
            </Link>

            <Link
              to="/About"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="dropbtn dropdown gap-1.5"
            >
              About Us
            </Link>
          </div>
        ) : (
          <div className="empty-navmob"></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
