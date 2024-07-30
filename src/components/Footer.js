import React from "react";
import logo from "../assets/footer-logo.png";
import fb from "../assets/fb-footer.png";
import x from "../assets/x-footer.png";
import li from "../assets/li-footer.png";
import { products, useCases } from "../utils/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="sec1-footer">
          <a href="/">
            <img src={logo} />
          </a>
          <p>
            Talenode tackles the complexities of people analytics so that you
            can focus on what truly matters...
          </p>
        </div>
        <div className="sec2-footer">
          <h3>Website Links</h3>
          <a href="/">
            <p>Home</p>
          </a>
          <a href="/Resources">
            <p>Resources</p>
          </a>
          <a href="/About">
            <p>About Us</p>
          </a>
          <a href="/About/#contact-us">
            <p>Contact Us</p>
          </a>
        </div>
        <div className="sec2-footer footer-hide-mobile">
          <a href="/Solutions">
            <h3 className="text-center">Solutions</h3>
          </a>
          <div className="flex flex-row gap-8 ">
            <div>
              {products.map((product) => (
                <a href={`/products/${product.name}`}>
                  <p>{product.name}</p>
                </a>
              ))}
            </div>
            <div>
              {useCases.map((useCase) => (
                <a href={`/useCases/${useCase.name}`}>
                    <p>{useCase.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="sec3-footer">
          <p>Get in Touch</p>
          <div className="footer-icons">
            <img src={fb} />
            <img src={x} />
            <img src={li} />
          </div>
          <div className="sub-footer">
            <input type="email" placeholder="Enter your email..." />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="divider-footer"></div>

      <div className="footer-end">(C) 2022 Glossy, All Rights Reserved</div>
    </div>
  );
};

export default Footer;
