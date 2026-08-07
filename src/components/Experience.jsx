import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { internshipsData } from '../data/portfolioData';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaExpand, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const [selectedProof, setSelectedProof] = useState(null);

  return (
    <section id="experience" className="position-relative py-5">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Professional Journey</span>
          <h2 className="section-title">Work & Internships</h2>
          <div className="section-divider"></div>
        </div>

        {/* Experience Grid */}
        <div className="row g-4 justify-content-center">
          {internshipsData.map((item, index) => (
            <div className="col-lg-6" key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
              >
                <div>
                  {/* Top Badge & Role */}
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                    <span className="skill-category-badge px-3 py-1 fw-bold fs-7">
                      <FaBriefcase className="me-1" /> {item.type}
                    </span>
                    <span className="text-muted small fw-medium d-flex align-items-center gap-1">
                      <FaCalendarAlt className="text-info" /> {item.duration}
                    </span>
                  </div>

                  <h3 className="fw-bold fs-4 mb-1 gradient-text">{item.role}</h3>
                  <div className="d-flex align-items-center gap-2 text-primary fw-semibold mb-3 fs-6">
                    <FaBuilding className="text-cyan" /> {item.company}
                  </div>

                  <div className="text-muted small mb-3 d-flex align-items-center gap-2">
                    <FaMapMarkerAlt className="text-danger" /> {item.location}
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="tech-badge py-1 px-3">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Proof / Document Preview Button */}
                <div className="pt-3 border-top border-secondary" style={{ borderColor: 'var(--border-color) !important' }}>
                  <button
                    onClick={() => setSelectedProof(item)}
                    className="btn btn-outline-custom w-100 justify-content-center py-2"
                  >
                    <FaExpand className="me-2" /> View {item.company === 'Alfido Tech' ? 'Offer Letter' : 'LinkedIn Proof'}
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Proof Modal */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{
              backgroundColor: 'rgba(10, 13, 20, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 99999
            }}
            onClick={() => setSelectedProof(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="glass-card p-3 p-md-4 position-relative"
              style={{ maxWidth: '750px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-secondary">
                <h4 className="fw-bold fs-5 mb-0 text-primary">{selectedProof.proofTitle}</h4>
                <button
                  className="btn btn-sm text-secondary p-1 fs-4"
                  onClick={() => setSelectedProof(null)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="text-center rounded-3 overflow-hidden bg-dark p-2 mb-3">
                <img
                  src={selectedProof.image}
                  alt={selectedProof.proofTitle}
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ maxHeight: '70vh', objectFit: 'contain' }}
                />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary rounded-pill px-4"
                  onClick={() => setSelectedProof(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
