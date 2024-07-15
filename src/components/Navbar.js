import React from "react";
import { Link, redirect, redirectDocument } from "react-router-dom";
import navLogo from "../assets/nav-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link>
        <img className="nav-logo" src={navLogo} />
      </Link>

      <div className="nav-headers">
        <div class="dropdown">
          <Link class="dropbtn flex items-center gap-1.5">
            Solutions
            <svg className="down-button-hover" xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 22 13" fill="none"> <path d="M2.44347 0.759229C1.93077 0.246528 1.09946 0.246723 0.586996 0.759666C0.0749416 1.2722 0.0750656 2.10272 0.587275 2.6151L9.76976 11.8008C9.93176 11.9638 10.1244 12.0932 10.3366 12.1815C10.5488 12.2697 10.7763 12.3152 11.0061 12.3152C11.236 12.3152 11.4635 12.2697 11.6757 12.1815C11.8879 12.0932 12.0805 11.9638 12.2425 11.8008L21.4298 2.61503C21.9422 2.10279 21.9422 1.27222 21.4299 0.75994C20.9177 0.247727 20.0873 0.247689 19.575 0.759854L11.0088 9.32452L2.44347 0.759229Z" fill="#404040"/></svg>
          </Link>
          <div class="dropdown-content">
            <div className="dropdown-content-container">
              <p>By product</p>
              <Link className="drop-link">• DataDrive</Link>
              <Link className="drop-link">• DataSight</Link>
              <Link className="drop-link">• DataNurture</Link>
              <Link className="drop-link">• DataCulture</Link>
              <Link className="drop-link">• Product Comparison</Link>
            </div>
            <div className="dropdown-content-container">
              <p>By use Case</p>
              <Link className="drop-link">• Action on Data</Link>
              <Link className="drop-link">• Visualisation</Link>
              <Link className="drop-link">• Data Cleaning</Link>
              <Link className="drop-link">• Data Unification</Link>
              <Link className="drop-link">• Learning Courses</Link>
              <Link className="drop-link">• Change Management</Link>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <Link class="dropbtn flex items-center justify-evenly gap-1.5">
            Resources
            <svg className="down-button-hover" xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 22 13" fill="none"> <path d="M2.44347 0.759229C1.93077 0.246528 1.09946 0.246723 0.586996 0.759666C0.0749416 1.2722 0.0750656 2.10272 0.587275 2.6151L9.76976 11.8008C9.93176 11.9638 10.1244 12.0932 10.3366 12.1815C10.5488 12.2697 10.7763 12.3152 11.0061 12.3152C11.236 12.3152 11.4635 12.2697 11.6757 12.1815C11.8879 12.0932 12.0805 11.9638 12.2425 11.8008L21.4298 2.61503C21.9422 2.10279 21.9422 1.27222 21.4299 0.75994C20.9177 0.247727 20.0873 0.247689 19.575 0.759854L11.0088 9.32452L2.44347 0.759229Z" fill="#404040"/></svg>
          </Link>
          <div class="dropdown-content">
            <div className="dropdown-content-container">
              <Link className="drop-link">• Case Studies</Link>
              <Link className="drop-link">• Blogs</Link>
              <Link className="drop-link">• Whitepapers</Link>
              <Link className="drop-link">• Webinars</Link>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <Link class="dropbtn flex items-center justify-evenly gap-1.5">
            About Us
            <svg className="down-button-hover" xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 22 13" fill="none"> <path d="M2.44347 0.759229C1.93077 0.246528 1.09946 0.246723 0.586996 0.759666C0.0749416 1.2722 0.0750656 2.10272 0.587275 2.6151L9.76976 11.8008C9.93176 11.9638 10.1244 12.0932 10.3366 12.1815C10.5488 12.2697 10.7763 12.3152 11.0061 12.3152C11.236 12.3152 11.4635 12.2697 11.6757 12.1815C11.8879 12.0932 12.0805 11.9638 12.2425 11.8008L21.4298 2.61503C21.9422 2.10279 21.9422 1.27222 21.4299 0.75994C20.9177 0.247727 20.0873 0.247689 19.575 0.759854L11.0088 9.32452L2.44347 0.759229Z" fill="#404040"/></svg>
          </Link>
          <div class="dropdown-content drop-exception">
            <div className="dropdown-content-container px-0">
              <Link className="drop-link">• Mission</Link>
              <Link className="drop-link">• Vision</Link>
              <Link className="drop-link">• Leadership Team</Link>
              <Link className="drop-link">• Contact Us</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
