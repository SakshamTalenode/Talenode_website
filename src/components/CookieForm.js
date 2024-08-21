import React from 'react'
import { useCookies } from 'react-cookie'

const CookieForm = () => {

    const [cookies, setCookie] = useCookies(["cookieconsent"]);
    const giveConsent = () => {
        setCookie("cookieConsent", true, { path: "/" });
    }

  return (
    <div className='cookieForm'>
      <div>
        <p className='head-cookie'>Hi there! We are cookies</p>
        <p className='tag-cookie'>We use cookies to ensure that we give you the best experience and enable easier navigation on our website.</p>
      </div>

      <div className='flex justify-between items-center'>
        <a href='/privacy-policy'><button>Show Details</button></a>
        <button onClick={giveConsent}>Accept</button>
      </div>
    </div>
  )
}

export default CookieForm
