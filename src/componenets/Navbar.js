import React from 'react';
import '../style/Navbar.css'
import logo from '../images/logo.png'
import loading from '../images/loading.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/"><img src={logo} alt={loading} /></a>
      <h1>Gotta Catch Em All</h1>
    </nav>
  );
}

export default Navbar;