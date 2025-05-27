import React from 'react';
import '../Styles/Horarios.css';

const Horarios = () => (
  <section className="horarios-section">
    <div className="horarios-card animate-fadein">
      <div className="horarios-info">
        <h3>
          <i className="fas fa-clock"></i> Horarios de Atención
        </h3>
        <ul>
          <li>Lunes a viernes de 9:00 a 14:00 hs.</li>
          <li>Lunes a viernes de 14:30 a 18:30 hs.</li>
          <li>Sábados 09:00 a 13:30 hs.</li>
        </ul>
        <div className="horarios-direccion">
          <h4>
            <i className="fas fa-map-marker-alt"></i> Dirección
          </h4>
          <address>
            Godoy Cruz 4360<br />
            Villa Nueva - Guaymallén<br />
            Ciudad de Mendoza<br />
            CP 5521
          </address>
        </div>
      </div>
      <div className="horarios-redes">
        <h3>
          <i className="fas fa-share-alt"></i> Redes Sociales
        </h3>
        <p>
          Encuéntranos en nuestras redes sociales, donde nos podrás consultar por Facebook, WhatsApp y realizar pedidos en menor tiempo.
        </p>
        <div className="redes-icons">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook" className="red-icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://wa.me/5492613027573" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="red-icon whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:info@mymrepuestos.com.ar" target="_blank" rel="noopener noreferrer" title="Correo electrónico" className="red-icon mail">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="redes-mail">
          <span>
            <i className="fas fa-envelope"></i> info@mymrepuestos.com.ar
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Horarios;