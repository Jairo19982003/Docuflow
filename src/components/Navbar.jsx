import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">📄</span>
          DocuFlow Systems
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/equipo" className="nav-link">Equipo</Link>
          </li>
          <li className="nav-item">
            <Link to="/productos" className="nav-link">Productos</Link>
          </li>
          <li className="nav-item">
            <Link to="/arquitectura" className="nav-link">Arquitectura</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-link">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
