import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

import './BottomFooter.css';

function BottomFooter() {

  return (
    <div className="footer-container">
      <div className="footer-links">
        
        <a href="#aboutus">About Us</a>
        <a href="#blog">Blog</a>
        <a href="#support">Support</a>
        <a href="#faq">FAQ</a>
        <a href="#tokendetails">Token Details</a>
        <a href="#whitebox">WhiteBook</a>
        
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <BsFacebook />  </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <SiInstagram />  </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FiTwitter />  </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <SlSocialLinkedin />  </a>
      </div>
    </div>
  );
}

export default BottomFooter;
