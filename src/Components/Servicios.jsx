import React from 'react';
import '../Styles/Servicios.css';

const servicios = [
  {
    icon: 'fas fa-truck', // Entregas
    title: 'Entregas',
    desc: 'Servicio y comodidad en Ciudad y Gran Mendoza. Enviamos tu repuesto a domicilio, pago contrareembolso.'
  },
  {
    icon: 'fas fa-shipping-fast', // Envíos
    title: 'Envíos',
    desc: 'Servicio exclusivo para el interior del país. Se despachan en el día los artículos solicitados.'
  },
  {
    icon: 'fas fa-store', // Ventas en Mostrador
    title: 'Ventas en Mostrador',
    desc: 'Atención exclusiva en nuestro Show Room. Acercate a nuestro local y llévate lo que necesites, contamos con stock permanente.'
  }
];

const Servicios = () => (
  <section className="servicios-section">
    <div className="servicios-grid">
      {servicios.map((serv, idx) => (
        <div className="servicio-card" key={idx}>
          <div className="servicio-icon">
            <i className={serv.icon}></i>
          </div>
          <h3 className="servicio-title">{serv.title}</h3>
          <p className="servicio-desc">{serv.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Servicios;