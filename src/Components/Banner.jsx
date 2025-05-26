import React, { useState, useEffect, useRef } from 'react';
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
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, paused]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    setPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      setPaused(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setPaused(false), 300); // Retoma el autoplay tras el swipe
  };

  return (
    <div
      className="banner"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ overflow: 'hidden', width: '100%' }}
    >
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