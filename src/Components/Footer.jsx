import React from 'react';
import '../Styles/Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <img
        src={process.env.PUBLIC_URL + '/datafiscal.png'}
        alt="Data Fiscal"
        className="footer-datafiscal"
      />
      <span>© Copyright 2025. Todos los derechos reservados. MyM Repuestos</span>
    </div>
  </footer>
);

export default Footer;