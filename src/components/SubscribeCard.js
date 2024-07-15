import React from 'react'

const SubscribeCard = () => {
  return (
    <div className='sub-card'>
      <div className='header-subCard'>
        <p>Sign up for our newsletter and receive regular blog updates!</p>
      </div>
      <div className='email-subCard'>
        <input className='input-subCard' type='text' placeholder='Type Your Email...'/>
        <button className='btn-subCard'>
            Subscribe!
        </button>
      </div>
    </div>
  )
}

export default SubscribeCard;
