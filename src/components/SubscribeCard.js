import React, { useState } from 'react'

const SubscribeCard = () => {

  return (
    <div className='sub-card'>
      <div className='header-subCard'>
        <p>Sign up for our newsletter and receive regular blog updates!</p>
      </div>
      <form className='email-subCard'>
        <input className='input-subCard' type='email' placeholder='Enter your email...'/>
        <button type='submit' className='btn-subCard'>
            Subscribe
        </button>
      </form>
    </div>
  )
}

export default SubscribeCard;
