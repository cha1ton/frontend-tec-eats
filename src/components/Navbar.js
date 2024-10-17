import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Tus estilos personalizados si es necesario

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/restaurants">Tec Eats</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/restaurants">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Menú</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datos-usuario">Usuario</Link> {/* Enlace a usuario */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
