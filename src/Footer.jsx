import React from 'react';
import './Footer.css';
import { FaFacebookF, FaGoogle, FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer_wrapper container">
      <div className="footer_columns">
        <div className="footer_column">
          <p>Home</p>
          <p>AI Games</p>
          <p>AI Insights</p>
          <p>AI Tools</p>
          <p>Support</p>
          <p>Pricing</p>
        </div>
        <div className="footer_column">
          <p>Host Game</p>
          <p>Gallery</p>
          <p>News</p>
          <p>Contacts</p>
        </div>
        <div className="footer_column">
          <h4>Contact us</h4>
          <p>+1 (406) 555-0120</p>
          <p>+1 (480) 555-0103</p>
          <p className="footer_email">hellp@maccattheygame.com</p>
        </div>
        <div className="footer_column">
          <h4>Follow us</h4>
          <div className="footer_icons">
            <FaFacebookF />
            <FaGoogle />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className="footer_column">
          <h4>Let’s chat</h4>
          <div className="footer_icons">
            <FaWhatsapp />
            <FaTelegramPlane />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
