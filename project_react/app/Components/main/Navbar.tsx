export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul>
          <li className="navbaritem">
            <a className="navbar-link" href="#inicio">Inicio</a>
          </li>
          <li className="navbaritem">
            <a className="navbar-link" href="#servicios">Servicios</a>
          </li>
          <li className="navbaritem">
            <a className="navbar-link" href="#contacto">Contacto</a>
          </li>
          <li className="navbaritem">
            <a className="navbar-link" href="#nosotros">Nosotros</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
