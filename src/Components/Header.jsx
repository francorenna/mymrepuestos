import React from 'react';
import '../Styles/Header.css';

const Header = () => (
  <header className="main-header">
    <div className="header-bar">
      <a href="tel:2616809896" className="header-icon-link" title="Llamar">
        <i className="fas fa-phone-alt"></i>
      </a>
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/logointro.svg'} alt="Logo MyM" className="header-logo" />
      </div>
      <a
        href="https://wa.me/5492613027573"
        target="_blank"
        rel="noopener noreferrer"
        className="header-icon-link"
        title="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
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