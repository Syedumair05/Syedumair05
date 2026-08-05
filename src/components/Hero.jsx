import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPaperPlane, FaCode, FaGraduationCap, FaFolderOpen } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalDetails.typingRoles;
    const currentFullText = roles[currentRoleIndex];

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullText) {
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== currentFullText) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      } else if (displayedText === currentFullText) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5 position-relative overflow-hidden">
      {/* Dynamic Ambient Background Glow Spheres */}
      <div
        className="glow-background"
        style={{
          top: '10%',
          left: '-5%',
          width: '350px',
          height: '350px',
          background: 'rgba(56, 189, 248, 0.15)'
        }}
      />
      <div
        className="glow-background"
        style={{
          bottom: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'rgba(129, 140, 248, 0.15)'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center gy-5">
          {/* Text Content Column */}
          <div className="col-lg-7 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-badge mb-3">
                <FaCode className="text-info" /> Welcome to my Portfolio
              </div>

              <h1 className="display-4 fw-extrabold mb-3">
                Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
              </h1>

              <div className="fs-4 fw-semibold text-secondary mb-4 code-font" style={{ minHeight: '40px' }}>
                I am a <span style={{ color: 'var(--accent-cyan)' }}>{displayedText}</span>
                <span className="border-end border-2 border-info ms-1 animation-blink">|</span>
              </div>

              <p className="lead mb-4 pe-lg-4 fw-medium" style={{ maxWidth: '640px', color: 'var(--text-secondary)' }}>
                {personalDetails.bio}
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
                <a href="#contact" className="btn-primary-custom">
                  <FaPaperPlane /> Contact Me
                </a>
                <a href="#projects" className="btn-outline-custom">
                  <FaFolderOpen /> View Projects
                </a>
              </div>

              {/* Social Media Links */}
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start">
                <span className="text-muted fw-medium small">Connect with me:</span>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-2 rounded-circle text-primary text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ width: '42px', height: '42px', fontSize: '1.25rem' }}
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-2 rounded-circle text-primary text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ width: '42px', height: '42px', fontSize: '1.25rem' }}
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="glass-card p-2 rounded-circle text-primary text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ width: '42px', height: '42px', fontSize: '1.25rem' }}
                  aria-label="Email Me"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Visual & Floating Stats Column */}
          <div className="col-lg-5 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="position-relative d-inline-block"
            >
              {/* Animated Glowing Ring Backdrop */}
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle floating-elem"
                style={{
                  width: '320px',
                  height: '320px',
                  background: 'var(--gradient-primary)',
                  filter: 'blur(30px)',
                  opacity: 0.4,
                  zIndex: -1
                }}
              />

              {/* Profile Image Container */}
              <div
                className="glass-card p-2 rounded-circle d-inline-block shadow-lg"
                style={{
                  border: '2px solid rgba(56, 189, 248, 0.4)',
                  boxShadow: 'var(--shadow-glow)'
                }}
              >
                <img
                  src={personalDetails.profileImg || import.meta.url ? new URL('../assets/images/profile.png', import.meta.url).href : ''}
                  alt={personalDetails.name}
                  className="rounded-circle img-fluid"
                  style={{
                    width: '280px',
                    height: '280px',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Floating Stat Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="glass-card position-absolute p-3 rounded-4 shadow-sm text-start d-none d-sm-block"
                style={{ top: '10%', left: '-30px', minWidth: '160px' }}
              >
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded-3 text-info" style={{ background: 'rgba(56, 189, 248, 0.15)' }}>
                    <FaFolderOpen />
                  </div>
                  <div>
                    <div className="fw-bold fs-6">6+ Major</div>
                    <div className="small text-muted">Projects Built</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="glass-card position-absolute p-3 rounded-4 shadow-sm text-start d-none d-sm-block"
                style={{ bottom: '10%', right: '-20px', minWidth: '170px' }}
              >
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded-3 text-warning" style={{ background: 'rgba(251, 191, 36, 0.15)' }}>
                    <FaGraduationCap />
                  </div>
                  <div>
                    <div className="fw-bold fs-6">CS Engineer</div>
                    <div className="small text-muted">Student Specialist</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
