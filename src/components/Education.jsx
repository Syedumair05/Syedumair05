import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Academic Journey</span>
          <h2 className="section-title">Education & Qualifications</h2>
          <div className="section-divider"></div>
        </div>

        {/* Timeline Layout */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative ps-4 ps-md-5 border-start border-2 border-info ms-2 ms-md-4">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-5 position-relative"
                >
                  {/* Timeline Dot Icon */}
                  <div
                    className="position-absolute rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{
                      top: '0',
                      left: '-44px',
                      width: '36px',
                      height: '36px',
                      background: 'var(--gradient-primary)',
                      color: '#ffffff',
                      boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)'
                    }}
                  >
                    <FaGraduationCap className="fs-6" />
                  </div>

                  {/* Card Content */}
                  <div className="glass-card p-4 p-md-4">
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                      <div>
                        <h4 className="fw-bold fs-5 mb-1 gradient-text">{item.degree}</h4>
                        <h6 className="fw-semibold text-secondary mb-0">{item.institution}</h6>
                      </div>
                      <span className="tech-badge">
                        <FaCalendarAlt /> {item.period}
                      </span>
                    </div>

                    <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)' }}>
                      <FaAward /> <span className="small fw-semibold">{item.score}</span>
                    </div>

                    <p className="text-muted small mb-0 leading-relaxed">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
