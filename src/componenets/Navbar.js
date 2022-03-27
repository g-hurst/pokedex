import React from 'react';
import '../style/Navbar.css'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} />
        <h1>Gotta Catch Em All</h1>
    </nav>
  );
}

export default Navbar;