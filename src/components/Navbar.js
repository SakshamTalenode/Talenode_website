import React from 'react'
import { Link } from 'react-router-dom';
import navLogo from '../assets/nav-logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link>
        <img className='nav-logo' src={navLogo}/>
      </Link>

      <div className='nav-headers'>
        <Link to=""><p>Solutions</p></Link>
        <Link to=""><p>Solutions</p></Link>
        <Link to=""><p>Solutions</p></Link>
      </div>
    </div>
  )
}

export default Navbar
