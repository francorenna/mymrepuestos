import React from 'react';
import '../Styles/ScrollTopButton.css';

const ScrollTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button className="scroll-top-btn" onClick={handleClick} aria-label="Volver arriba">
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollTopButton;