import React from 'react'
import './Footer.css'
import GoogleApp from '../Assets/googleplaystore.png';
import AppStore from '../Assets/appstore.png';

export default function Footer() {
  return (
    <div className='footer1'>

      <div className='footer'>
        <div className="content">
          <div className="row">
            <h3>MENU</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Why GreenKart</p>
          </div>
          <div className="row">
            <h3>CONTACTS</h3>
            <p>GreenKart Corporation Office</p>
            <p>KPHB Colony, Road No. 2</p>
            <p>Kukatpally, Hyderabad, Telangana - 500072. </p>

            <p>+91 9876543210</p>
            <p>greenkartcontact@gmail.com</p>
          </div>
        </div>
        <div className="bottom">
          <h2>DOWNLOAD THE APP</h2>
          <div className="icons-temp" ><img src={GoogleApp} alt="GoogleApp" />
            <img src={AppStore} alt="AppStore" />
            <i class="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <p>&copy; 2025, GreenKart | Privacy Policy | Sitemap | Terms & Conditions</p>
        </div>
      </div>

    </div>
  )
}
