import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="footer mt-5 pt-5 border-top">
      <div className="container">
        {/* Top Links */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          <a href="#" className="btn btn-outline-secondary btn-sm">Contacta</a>
          <a href="#" className="btn btn-outline-secondary btn-sm">Club La NUEVA ESPAÑA</a>
          <a href="#" className="btn btn-outline-secondary btn-sm">Punto de venta</a>
          <a href="#" className="btn btn-outline-secondary btn-sm">Publicidad</a>
          <a href="#" className="btn btn-outline-secondary btn-sm">Agencia</a>
          <a href="#" className="btn btn-outline-secondary btn-sm">Política Ambiental y RSE</a>
          <a href="#" className="btn btn-outline-secondary btn-sm">Desempeño Ambiental</a>
          <a href="#" className="btn btn-outline-secondary btn-sm">Canal de denuncia</a>
        </div>

        {/* Brand */}
        <div className="text-center mb-4">
          <h4 className="footer-brand">La Nueva España</h4>
        </div>

        {/* Media Links */}
        <div className="text-center mb-3">
          <p className="small">Editorial Prensa Asturiana, S.A.</p>
          <p className="small">Otra media del Prensa Ibérica Media:</p>
        </div>

        {/* Multi Column Links */}
        <div className="row">
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Prensa</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Diari de Girona</a></li>
              <li><a href="#">Regió7</a></li>
              <li><a href="#">Levante-EMV</a></li>
              <li><a href="#">La Provincia</a></li>
              <li><a href="#">El Periódico de Aragón</a></li>
              <li><a href="#">El Periódico de Catalunya</a></li>
              <li><a href="#">Información</a></li>
              <li><a href="#">Diario de Ibiza</a></li>
              <li><a href="#">Faro de Vigo</a></li>
              <li><a href="#">La Opinión de Murcia</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled small mt-md-4">
              <li><a href="#">La Opinión A Coruña</a></li>
              <li><a href="#">La Opinión de Málaga</a></li>
              <li><a href="#">La Opinión de Zamora</a></li>
              <li><a href="#">La Opinión de Tenerife</a></li>
              <li><a href="#">La Opinión de La Palma</a></li>
              <li><a href="#">Mediterráneo</a></li>
              <li><a href="#">Mallorca Zeitung</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Empordà</a></li>
              <li><a href="#">Menorca</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Radio y televisión</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Levante TV</a></li>
              <li><a href="#">Información TV</a></li>
              <li><a href="#">Mallorca TV</a></li>
            </ul>
            <h6 className="fw-bold mt-3">Revistas</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Cuore</a></li>
              <li><a href="#">Stilo</a></li>
              <li><a href="#">Viajar</a></li>
              <li><a href="#">Neomotor</a></li>
              <li><a href="#">Guía Repsol</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Canales temáticos</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Casas</a></li>
              <li><a href="#">Gourmet</a></li>
              <li><a href="#">Empleo</a></li>
              <li><a href="#">Economía</a></li>
              <li><a href="#">Formación</a></li>
              <li><a href="#">Tecnología</a></li>
              <li><a href="#">Salud</a></li>
              <li><a href="#">Lotería de Navidad</a></li>
              <li><a href="#">Lotería del Niño</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Newsroom 21</a></li>
              <li><a href="#">Innovación</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3 small">
          <p className="mb-0">© Editorial Prensa Asturiana, S.A.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
            <a href="#">Aviso legal</a>
            <a href="#">Política de privacidad y cookies</a>
            <a href="#">Canal de denuncia</a>
            <a href="#">Preferencias de privacidad</a>
            <a href="#">Código Ético</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
