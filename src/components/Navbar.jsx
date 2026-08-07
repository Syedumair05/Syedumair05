import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled ? 'py-2 shadow-lg' : 'py-3'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-decoration-none" href="#home">
          <span className="gradient-text code-font">&lt;SUA/&gt;</span>
        </a>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            className="btn btn-sm rounded-circle p-2"
            onClick={toggleTheme}
            style={{
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)'
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="text-warning" /> : <FaMoon className="text-primary" />}
          </button>
          <button
            className="btn btn-sm p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            style={{ fontSize: '1.25rem' }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end align-items-center gap-3">
          <ul className="navbar-nav me-3 gap-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link px-3 py-2 rounded-pill fw-medium transition-all ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                  href={link.href}
                  style={{
                    color: activeSection === link.id ? 'var(--nav-link-active)' : 'var(--nav-link-color)',
                    backgroundColor: activeSection === link.id ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                    fontSize: '0.92rem'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="btn rounded-circle p-2 me-2"
            onClick={toggleTheme}
            style={{
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <FaSun className="text-warning fs-5" /> : <FaMoon className="text-primary fs-5" />}
          </button>

          <a
            href={personalDetails.resumeUrl}
            download="Syed_Umair_Ahmed_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom text-decoration-none"
          >
            <FaDownload /> Resume
          </a>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div
            className="d-lg-none position-fixed top-0 start-0 w-100 h-100 mobile-nav-drawer"
            style={{
              paddingTop: '90px',
              paddingLeft: '24px',
              paddingRight: '24px'
            }}
          >
            <ul className="navbar-nav gap-3 text-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className="nav-link fs-4 fw-semibold py-2"
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="nav-item mt-4">
                <a
                  href={personalDetails.resumeUrl}
                  download="Syed_Umair_Ahmed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom w-100 justify-content-center py-3 fs-5"
                  onClick={() => setIsOpen(false)}
                >
                  <FaDownload /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
