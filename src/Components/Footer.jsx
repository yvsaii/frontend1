import React from 'react';
import './Footer.css'; // Make sure Footer.css is in the same folder as Footer.js
import GoogleApp from '../Assets/googleplaystore.png';
import AppStore from '../Assets/appstore.png';

export default function Footer() {
  return (
    <footer className="footer1">
      <div className="footer">
        <div className="content">

          {/* MENU SECTION */}
          <div className="row">
            <h3>MENU</h3>
            <p >Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Why GreenKart</p>
          </div>

          {/* CONTACTS SECTION */}
          <div className="row">
            <h3>CONTACTS</h3>
            <p>GreenKart Corporation Office</p>
            <p>KPHB Colony, Road No. 2</p>
            <p>Kukatpally, Hyderabad, Telangana - 500072.</p>
            <p>+91 9876543210</p>
            <p>greenkartcontact@gmail.com</p>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom">
          <h2>DOWNLOAD THE APP</h2>

          <div className="icons-temp">
            <img src={GoogleApp} alt="Google App" />
            <img src={AppStore} alt="App Store" />

            {/* <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i> */}
          </div>

          <p>&copy; 2025, GreenKart | Privacy Policy | Sitemap | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
