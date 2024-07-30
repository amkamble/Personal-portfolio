import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">
            Amol Kamble
          </h2>
          <p>
          Thank you for visiting my portfolio! Feel free to get in touch with me if you have any questions or opportunities.
          </p>
          <div className="social-links">
          <a href="https://codepen.io/amkamble" className="social-link"><ion-icon name="logo-codepen"></ion-icon></a>
            <a href="https://in.linkedin.com/in/amkamble" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://www.instagram.com/spydevcode" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="https://github.com/amkamble" className="social-link"><ion-icon name="logo-github"></ion-icon></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Connect Us</h2>
          <ul className='contact-link'>
            <li><ion-icon name="call"></ion-icon> Phone : +917410749200</li>
            <li><ion-icon name="mail"></ion-icon> E-mail : amkamble22@gmail.com</li>
            <li><ion-icon name="location"></ion-icon> Address : Hingoli Maharastra, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Amol Kamble. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
