import React from 'react';
import './css/footer.css'
const Footer = () => {
  return (
    <>
    <section>
      <ul>
        <li><strong>Información de la Empresa</strong></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Misión y Visión</a></li>
        <li><a href="#">Historia</a></li>
        <li><a href="#">Carreras</a></li>
      </ul>
    </section>
    <section>
      <ul>
        <li><strong>Enlaces Útiles</strong></li>
        <li><a href="#">Términos y Condiciones</a></li>
        <li><a href="#">Política de Privacidad</a></li>
        <li><a href="#">Ayuda y Soporte</a></li>
        <li><a href="#">Preguntas Frecuentes</a></li>
      </ul>
    </section>
    <section>
      <ul>
        <li><strong>Conéctate con Nosotros</strong></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </section>
    </>
  );
};

export default Footer;
