import React, { useState } from 'react';
import iclogo from '../assets/images/ic-logo.svg';
import iccampus from '../assets/images/ic-on-campus.svg';
import iconline from '../assets/images/ic-online.svg';
import iccompany from '../assets/images/ic-login.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white px-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={iclogo} alt="logo" width="40" className="me-2" />
          <span className="fw-bold">CEVAYS<span className="text-secondary">ACADEMY</span></span>
        </a>
        
        <div className="d-md-none ms-auto d-flex align-items-center">
          {/* <img src={iccampus} className="mx-2" width="24" alt="On Campus" />
          <img src={iconline} className="mx-2" width="24" alt="Online" />
          <img src={iccompany} className="mx-2" width="24" alt="Login" /> */}
          
          <button 
            className="navbar-toggler ms-2" 
            type="button" 
            onClick={toggleMenu}
            style={{ border: 'none', padding: '0' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show d-block mt-3' : 'd-none d-md-block'}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">On Campus</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Online</a></li>
            <li className="nav-item"><a className="nav-link" href="#">For Companies</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Sign in</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;