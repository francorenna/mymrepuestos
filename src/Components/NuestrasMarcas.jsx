import React, { useEffect, useState } from 'react';
import '../Styles/NuestrasMarcas.css';

const marcas = [
  'marcas-1.png',
  'marcas-2.png',
  'marcas-3.png',
  'marcas-4.png',
  'marcas-5.png',
  'marcas-6.png'
];

const NuestrasMarcas = () => {
  const [animate, setAnimate] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % marcas.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="marcas" className="marcas-section">
      <h2 className={`marcas-title${animate ? ' underline-animate' : ''}`}>Nuestras Marcas</h2>
      <div className="marcas-fade-viewport">
        {marcas.map((img, idx) => (
          <img
            key={idx}
            src={process.env.PUBLIC_URL + '/Images/' + img}
            alt={`Marcas ${idx + 1}`}
            className={`marcas-fade-img${current === idx ? ' visible' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NuestrasMarcas;