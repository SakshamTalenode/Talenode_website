import React from 'react'
import logo from "../assets/footer-logo.png";
import fb from "../assets/fb-footer.png";
import x from "../assets/x-footer.png";
import li from "../assets/li-footer.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-main'>
            <div className='sec1-footer'>
                <img src={logo}/>
                <p>Talenode tackles the complexities of people analytics so that you can focus on what truly matters...</p>
            </div>
            <div className='sec2-footer'>
                <h3>Website Links</h3>
                <p>Home</p>
                <p>Solutions</p>
                <p>Resources</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className='sec2-footer'>
                <h3>Website Links</h3>
                <p>Home</p>
                <p>Solutions</p>
                <p>Resources</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className='sec3-footer'>
                <p >Get in Touch</p>
                <div className='footer-icons'>
                    <img src={fb} />
                    <img src={x} />
                    <img src={li} />
                </div>
                <div className='sub-footer'>
                    <input type='email' placeholder='Enter your email'/>
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

        <div className='divider-footer'>
        </div>

        <div className='footer-end'>
            (C) 2022 Glossy, All Rights Reserved
        </div>
    </div>
  )
}

export default Footer
