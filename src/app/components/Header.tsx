'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const navItems = [
  { label: 'Business',   slug: 'business'   },
  { label: 'Technology', slug: 'technology' },
  { label: 'Sports',     slug: 'sports'     },
  { label: 'Health',     slug: 'health'     },
  { label: 'Science',    slug: 'science'    },
  { label: 'Politics',   slug: 'politics'   },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /** Creates one <li> for any nav zone (desktop, mobile, local‑editions) */
  const renderNavLinks = (extraClass = '') =>
    navItems.map(({ label, slug }) => {
      const href = `/${slug}`;
      const isActive = pathname === href;
      return (
        <li key={slug} className={`newsHeader-nav-item ${extraClass}`}>
          <Link
            href={href}
            className={`newsHeader-nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}  // close drawer on mobile tap
          >
            {label}
          </Link>
        </li>
      );
    });

  return (
    <header className={`newsHeader-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* ---------- Top Bar ---------- */}
      <div className={`newsHeader-top-bar ${isScrolled ? 'hidden' : ''}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-end align-items-center">
              <span>Contenidos Web 2 €/mes + regalo 🎁</span>
              <button className="newsHeader-subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Main Navigation ---------- */}
      <div className={`newsHeader-main-nav border-top border-bottom ${isScrolled ? 'hidden' : ''}`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo + mobile burger */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="d-flex align-items-center">
                <button
                  className="newsHeader-mobile-toggle d-lg-none me-3"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  ☰
                </button>
                <Link href="/" className="newsHeader-logo">
                  Asturias <small>LNE</small>
                </Link>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="col-lg-8 col-md-6 d-none d-lg-block">
              <nav className="position-relative">
                <ul className="newsHeader-nav-list d-flex justify-content-center">
                  {renderNavLinks()}
                </ul>
              </nav>
            </div>

            {/* Icons */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="d-flex justify-content-end align-items-center">
                <button className="newsHeader-search-btn me-2">🔍</button>
                <button className="newsHeader-user-btn">👤</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      <div className="d-lg-none">
        <nav className={`position-relative ${isMenuOpen ? 'show' : ''}`}>
          <ul className="newsHeader-nav-list">{renderNavLinks()}</ul>
        </nav>
      </div>

      {/* ---------- Title Section (Always Visible) ---------- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="newsHeader-title-section">
              <Link href='/' className='newsHeader-title'>
              <h1 className="newsHeader-title ">La Nueva España</h1>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Local Editions ---------- */}
      <div className="newsHeader-local-editions border-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav>
                <ul className="newsHeader-local-nav d-none d-sm-flex">
                  <li className="newsHeader-local-title py-2">Local Editions</li>
                  {renderNavLinks('newsHeader-local-link')}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;