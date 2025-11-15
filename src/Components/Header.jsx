import './Header.css';
import Mainlogo from '../Assets/mainLogo.png';
// import { useRef } from 'react';

export default function Header() {
    
    return (
        <header className='header'>
            <div className="header1">
                <div className='sub-header1'>
                    <p>Why Green Kart</p>
                    <p>Download App</p>
                    <div className="icons">
                        <i className="fa-brands fa-apple"></i>
                        <i className="fa-brands fa-google-play"></i>
                    </div>
                </div>
                <div className="sub-header2">
                    <p>About Us</p>
                    <p>GreenKartContact@gmail.com</p>
                    <p>Contact Us</p>
                </div>
            </div>

            <div className="header2">
                <div className="left">
                    <img src={Mainlogo} alt="Logo" className='mainLogo' />
                </div>
            </div>
        </header>
    )
}
