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
          <li>
            <a href="#inicio" onClick={handleLinkClick}>
              <i className="fas fa-home menu-item-icon"></i> Home
            </a>
          </li>
          <li>
            <a href="#nosotros" onClick={handleLinkClick}>
              <i className="fas fa-users menu-item-icon"></i> Empresa
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={handleLinkClick}>
              <i className="fas fa-cogs menu-item-icon"></i> Servicios
            </a>
          </li>
          <li>
            <a href="#marcas" onClick={handleLinkClick}>
              <i className="fas fa-tags menu-item-icon"></i> Marcas
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={handleLinkClick}>
              <i className="fas fa-envelope menu-item-icon"></i> Contacto
            </a>
          </li>
        </ul>
      </nav>
      {menuOpen && <div className="nav-backdrop" onClick={handleMenuToggle}></div>}
    </header>
  );
};

export default Header;