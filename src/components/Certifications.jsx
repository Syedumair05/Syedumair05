import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaCheckDouble } from 'react-icons/fa';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Continuous Learning</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="section-divider"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="row g-4 justify-content-center">
          {certificationsData.map((cert, index) => (
            <div className="col-12 col-md-6" key={cert.id}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-card p-4 h-100 d-flex flex-column"
              >
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div
                    className="p-3 rounded-4 d-flex align-items-center justify-content-center text-info"
                    style={{ background: 'rgba(56, 189, 248, 0.12)', fontSize: '1.5rem' }}
                  >
                    <FaCertificate />
                  </div>
                  <div className="flex-grow-1">
                    {cert.date && (
                      <span className="badge bg-primary bg-opacity-20 text-info border border-info mb-1" style={{ fontSize: '0.7rem' }}>
                        {cert.date}
                      </span>
                    )}
                    <h4 className="fw-bold fs-5 mb-1">{cert.title}</h4>
                    <p className="text-secondary small mb-0">{cert.issuer}</p>
                  </div>
                </div>

                {cert.credentialId && (
                  <div className="mb-3 code-font small text-muted">
                    ID: <span className="text-info">{cert.credentialId}</span>
                  </div>
                )}

                {/* Skills tags */}
                <div className="d-flex flex-wrap gap-2 mt-auto pt-3 border-top border-secondary" style={{ borderColor: 'var(--border-color) !important' }}>
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.75rem' }}>
                      <FaCheckDouble className="text-emerald" style={{ color: '#34d399' }} /> {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
