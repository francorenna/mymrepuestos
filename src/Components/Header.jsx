import React, { useState } from 'react';
import '../Styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(open => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-bar">
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          onClick={handleMenuToggle}
          aria-label="Abrir menú"
        >
          <span className="menu-icon"></span>
        </button>
        <div className="logo-container">
          <img src={process.env.PUBLIC_URL + '/logointro.svg'} alt="Logo MyM" className="header-logo" />
        </div>
        <div className="header-icons">
          <a href="tel:2616809896" className="header-icon-link" title="Llamar">
            <i className="fas fa-phone-alt"></i>
          </a>
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
      </div>
      <nav className={`main-nav${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><a href="#" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#" onClick={handleLinkClick}>Empresa</a></li>
          <li><a href="#" onClick={handleLinkClick}>Servicios</a></li>
          <li><a href="#" onClick={handleLinkClick}>Marcas</a></li>
          <li><a href="#" onClick={handleLinkClick}>Contacto</a></li>
        </ul>
      </nav>
      {menuOpen && <div className="nav-backdrop" onClick={handleMenuToggle}></div>}
    </header>
  );
};

export default Header;