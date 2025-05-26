import React from 'react';
import '../Styles/Header.css';

const Header = () => (
  <header className="main-header">
    <div className="logo-container">
      <img src={process.env.PUBLIC_URL + '/logointro.svg'} alt="Logo MyM" className="header-logo" />
    </div>
    <nav className="main-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Empresa</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Marcas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;