export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Sobre Nosotros</h4>
          <p className="footer-text">
            Somos tu mejor opción para compras online. Calidad y confianza desde 2024.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#nosotros">Términos y Condiciones</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Contacto</h4>
          <p className="footer-text">📧 info@miempresa.com</p>
          <p className="footer-text">📱 +1 234 567 890</p>
          <p className="footer-text">📍 Ciudad, País</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Síguenos</h4>
          <div className="footer-social">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
