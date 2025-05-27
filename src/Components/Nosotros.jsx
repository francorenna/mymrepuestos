import React, { useEffect, useState } from 'react';
import '../Styles/Nosotros.css';

const Nosotros = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="nosotros" className="nosotros-section">
      <h2 className={`nosotros-title${animate ? ' underline-animate' : ''}`}>Nosotros</h2>
      <div className="nosotros-logo-container">
        <img
          src={process.env.PUBLIC_URL + '/logointro.svg'}
          alt="Logo MyM"
          className="nosotros-logo"
        />
      </div>
      <blockquote className="nosotros-text">
        MyM Repuestos está presente en el mercado desde hace más de 70 años, líderes en ventas de repuestos en Guaymallén. Su fundador Marcelo Martín, apostó a sobresalir en la provincia de Mendoza a través de su impronta, con un local inigualable y un servicio que nos distingue. Hoy en día poseemos una fuerte presencia en la comercialización de una amplia variedad de marcas dentro y fuera de la provincia. Los invitamos a conocer nuestras instalaciones o comunicarse a través de WhatsApp, Instagram, Facebook, telefónicamente o utilizando nuestro formulario de contacto.
      </blockquote>
    </section>
  );
};

export default Nosotros;