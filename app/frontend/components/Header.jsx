import React from 'react';
import './css/header.css'
const Header = () => {
  return (
    <>
      {/* Logo */}
      <div className="logo">
        <img src="../img/Food Cheaper Logo.png" alt="Logo" />
      </div>

      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
        />
      </div>

      {/* Botón de login */}
      <div className="login-button">
        <button>Iniciar Sesión</button>
      </div>
    </>
  );
};

export default Header;
