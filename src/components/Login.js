// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importa tus estilos

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Evita el envío del formulario por defecto
    // Aquí podrías agregar lógica de autenticación real
    setIsAuthenticated(true);
    navigate("/restaurants"); // Redirige a la página de restaurantes
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <img
          src="/images/fondo-tecsup-campus.jpeg"
          alt="Tecsup"
          className="login-banner-image"
        />
        <h2 className="welcome-text">Bienvenido a</h2>
        <img
          src="/images/logo-Tec-Eats.png"
          alt="Tec Eat"
          className="login-logo"
        />
        <p className="description-text text-center">
          Inicia sesión en Tec Eat y disfruta de todas nuestras funcionalidades.
        </p>

        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <button type="submit" className="login-button">
              <i className="fab fa-google"></i> Iniciar Sesión con Google
            </button>
          </form>
        </div>

        <div className="register-link">
          <p>¿No tienes cuenta?</p>
          <a href="/register" className="register-link-text">
            Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
