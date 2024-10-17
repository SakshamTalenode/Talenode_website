import React from 'react'
import { MutatingDots } from "react-loader-spinner";
import logo from "../assets/nav-logo.png";

const Error = () => {
  return (
    <div className="ErrorPage">
      <div className='main'>
        <h2>404 Page Not Found</h2>
        <MutatingDots className="loader" width={100} height={100} color='#4A7C29' secondaryColor='#4A7C29' />
        <p className='tag1'>We're excited to announce the upcoming launch of our comprehensive people analytics tools, designed to revolutionize HR strategies with advanced analytical insights.</p>
        <p className='tag2'>In the meantime, for any people analytics needs or inquiries, please reach out to one of our founders, Ankit at <a href='mailto:ankit@talenode.com'>ankit@talenode.com</a>.</p>
        <p className='end'>Stay tuned for more updates!</p>
      </div>
    </div>
  )
}

export default Error
