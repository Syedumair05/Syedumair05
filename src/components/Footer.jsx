import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      className="py-5 position-relative border-top"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color) !important'
      }}
    >
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h4 className="fw-bold gradient-text code-font mb-1">&lt;{personalDetails.name}/&gt;</h4>
            <p className="text-muted small mb-0">
              Crafting high-impact web applications & intuitive digital user experiences.
            </p>
          </div>

          <div className="col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2 rounded-circle text-primary text-decoration-none d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2 rounded-circle text-primary text-decoration-none d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="glass-card p-2 rounded-circle text-primary text-decoration-none d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'var(--border-color)' }} />

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 small text-muted">
          <div>
            &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </div>
          <div>
            Built with <FaHeart className="text-danger mx-1" /> using React, Vite & Bootstrap 5.
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="btn-primary-custom position-fixed bottom-0 end-0 m-4 rounded-circle p-0 shadow-lg d-flex align-items-center justify-content-center"
          style={{
            width: '48px',
            height: '48px',
            zIndex: 999
          }}
          aria-label="Back to top"
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
