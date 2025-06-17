import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets.js';



const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        
        <div className="footer-content-left">
          <img src={assets.logo} alt="The Foodies Logo" className="footer-logo" />
          <p>Delicious food delivered to your doorstep with love and care.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

       
        <div className="footer-content-center">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        
        <div className="footer-content-right">
          <h3>Contact Us:</h3>
          <p>Email: support@fooddelivery.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <hr />
      <div className="footer-copyright">
        © 2025 The Foodie.com - All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
