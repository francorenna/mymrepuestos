import React, { useState, useEffect } from 'react';
import '../Styles/Banner.css';

const slides = [
  { src: process.env.PUBLIC_URL + '/banner1.jpeg', title: 'Venta de Repuestos Originales' },
  { src: process.env.PUBLIC_URL + '/banner2.jpeg', title: 'Servicio de Asesoramiento Técnico' },
  { src: process.env.PUBLIC_URL + '/banner3.jpeg', title: 'Amplia Variedad de Marcas' },
  { src: process.env.PUBLIC_URL + '/banner4.jpeg', title: 'Calidad y Confianza en Cada Producto' },
  { src: process.env.PUBLIC_URL + '/banner5.jpeg', title: 'Promociones y Formas de pago' }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="banner">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div className="banner-slide" key={idx}>
            <img src={slide.src} alt={slide.title} className="banner-img" />
            <div className={`banner-title${idx === current ? ' animate' : ''}`}>
              {slide.title}
            </div>
          </div>
        ))}
      </div>
      <div className="banner-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;