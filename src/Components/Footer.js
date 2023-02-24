import React from 'react'
import YoutubeLogo from "../assets/YoutubeLogo.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import NetflixLogo from "../assets/NetflixLogo.png";
import MicrosoftLogo from "../assets/MicrosoftLogo.png";
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeLogo} alt="YouTube logo" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={GoogleLogo} alt="Google logo" />
        </a>
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
            <img src={NetflixLogo} alt="Netflix logo" />
        </a>
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
            <img src={MicrosoftLogo} alt="Microsoft logo" />
        </a>
        </div>
    </>
  )
}

export default Footer
