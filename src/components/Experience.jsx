import React from 'react';
import { motion } from 'framer-motion';
import { internshipsData } from '../data/portfolioData';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
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
                  <div className="d-flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="tech-badge py-1 px-3">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
