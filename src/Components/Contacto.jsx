import React from 'react';
import '../Styles/Contacto.css';

const Contacto = () => (
  <section className="contacto-section">
    <h2 className="contacto-title">Contacto</h2>
    <div className="contacto-content">
      <form className="contacto-form">
        <label>
          Nombre y Apellido
          <input type="text" name="nombre" required />
        </label>
        <label>
          Correo Electrónico
          <input type="email" name="email" required />
        </label>
        <label>
          Teléfono
          <input type="tel" name="telefono" />
        </label>
        <label>
          Consulta
          <textarea name="consulta" rows="4" required />
        </label>
        <button type="submit">Enviar consulta</button>
      </form>
      <div className="contacto-mapa">
        <iframe
          title="Ubicación MyM Repuestos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.132364057019!2d-68.78594052267067!3d-32.89466846926828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0e94e25a4aad%3A0xd53d387a82423069!2sM%26M%20Repuestos!5e0!3m2!1ses!2sar!4v1748291579357!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contacto;