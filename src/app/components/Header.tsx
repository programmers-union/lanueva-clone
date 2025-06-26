'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>


      <header className="newsHeader-container">
        {/* Top Bar */}
        <div className="newsHeader-top-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex justify-content-end align-items-center">
                <span>Contenidos Web 2 €/mes + regalo 🎁</span>
                <button className="newsHeader-subscribe-btn">SUSCRÍBETE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="newsHeader-main-nav border-top border-bottom">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3 col-6">
                <div className="d-flex align-items-center">
                  <button 
                    className="newsHeader-mobile-toggle d-lg-none me-3"
                    onClick={toggleMenu}
                  >
                    ☰
                  </button>
                  <a href="#" className="newsHeader-logo">
                    Asturias <small>LNE</small>
                  </a>
                </div>
              </div>
              
              <div className="col-lg-8 col-md-6 d-none d-lg-block">
                <nav className="position-relative">
                  <ul className={`newsHeader-nav-list ${isMenuOpen ? 'show' : ''}`}>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Asturias</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Oviedo</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Gijón</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Avilés</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Cuencas</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Oriente</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Occidente</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Opinión</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Sucesos</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Economía</a>
                    </li>
                    <li className="newsHeader-nav-item">
                      <a href="#" className="newsHeader-nav-link">Deportes</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="d-flex justify-content-end align-items-center">
                  <button className="newsHeader-search-btn me-2">
                    🔍
                  </button>
                  <button className="newsHeader-user-btn">
                    👤
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="d-lg-none">
          <nav className="position-relative">
            <ul className={`newsHeader-nav-list ${isMenuOpen ? 'show' : ''}`}>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Asturias</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Oviedo</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Gijón</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Avilés</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Cuencas</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Oriente</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Occidente</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Opinión</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Sucesos</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Economía</a>
              </li>
              <li className="newsHeader-nav-item">
                <a href="#" className="newsHeader-nav-link">Deportes</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Title */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="newsHeader-title">La Nueva España</h1>
            </div>
          </div>
        </div>

        {/* Local Editions */}
        <div className="newsHeader-local-editions border-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <nav>
                  <ul className="newsHeader-local-nav d-none d-sm-flex ">
                    <li className="newsHeader-local-title">Ediciones locales</li>
                    <li><a href="#" className="newsHeader-local-link">Siero</a></li>
                    <li><a href="#" className="newsHeader-local-link">Llanera</a></li>
                    <li><a href="#" className="newsHeader-local-link">Villaviciosa</a></li>
                    <li><a href="#" className="newsHeader-local-link">Corvera</a></li>
                    <li><a href="#" className="newsHeader-local-link">Cangas del Narcea</a></li>
                    <li><a href="#" className="newsHeader-local-link">Grado</a></li>
                    <li><a href="#" className="newsHeader-local-link">Salas</a></li>
                    <li><a href="#" className="newsHeader-local-link">Ribera de Arriba</a></li>
                    <li><a href="#" className="newsHeader-local-link">La Corredoría</a></li>
                    <li><a href="#" className="newsHeader-local-link">Gijón Oeste</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;