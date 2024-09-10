import React from 'react';
import logo from "../assets/img/MeditationLogo.png"
import "../assets/styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navContainer widthController'>
            <div className="logoContainer navItem">
                <img src={logo} alt="Meditation Logo" className="logo" />
            </div>
            <div className="navTitle navItem">
                <h1>Meditation Website</h1>
            </div> 
        </div>
    </nav>
  );
};

export default Navbar;