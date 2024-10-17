import React from 'react';
import './Footer.css'; // Crea un archivo CSS si es necesario

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Tec Eats. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/privacy">Política de Privacidad</a></li>
          <li><a href="/terms">Términos y Condiciones</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
