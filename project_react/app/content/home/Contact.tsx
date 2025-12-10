export function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <h2 className="section-titulo">Encuéntranos</h2>
      <p className="section-intro">Visítanos o contáctanos. Estamos aquí para ayudarte.</p>
      
      <div className="contact-container">
        {/* Mapa */}
        <div className="map-container">
          <h3 className="contact-subtitle">📍 Nuestra Ubicación</h3>
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3857470163907!2d-89.21842368515316!3d13.692940190366897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633041f27c5c15%3A0x9e0c4b63e8f7f4b1!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1ses!2s!4v1234567890123!5m2!1ses!2s"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-info">
            <p>📍 Avenida Principal #123, Ciudad</p>
            <p>🕒 Lun - Vie: 9:00 AM - 6:00 PM</p>
            <p>🕒 Sábados: 10:00 AM - 2:00 PM</p>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="form-container">
          <h3 className="contact-subtitle">✉️ Contáctanos</h3>
          <p className="form-intro">
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte y ofrecerte la mejor experiencia de compra posible.
          </p>
          
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" id="lastName" name="lastName" placeholder="Tu apellido" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="tu@email.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Teléfono (Opcional)</label>
              <input type="tel" id="phone" name="phone" placeholder="+503 1234-5678" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={5} placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
