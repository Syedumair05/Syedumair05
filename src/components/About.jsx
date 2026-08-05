import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBullseye, FaBook, FaTrophy, FaLanguage, FaCheckCircle } from 'react-icons/fa';
import { personalDetails, courseworkData, achievementsData, extraCurricularData, spokenLanguages } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="row gy-4 align-items-stretch mb-5">
          {/* Left Bio Card */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
            >
              <div>
                <h3 className="fw-bold mb-3 gradient-text">{personalDetails.role}</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  {personalDetails.bio}
                </p>
                <div className="p-3 rounded-4 mb-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <span className="text-info fw-semibold fst-italic">"{personalDetails.tagline}"</span>
                </div>
              </div>

              <div className="border-top border-secondary pt-4" style={{ borderColor: 'var(--border-color) !important' }}>
                <div className="d-flex align-items-start gap-3">
                  <div className="p-3 rounded-circle" style={{ background: 'rgba(56, 189, 248, 0.12)' }}>
                    <FaBullseye className="text-info fs-4" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Career Objective</h5>
                    <p className="text-muted small mb-0">
                      {personalDetails.careerObjective}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Highlights & Coursework Card */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-4 p-md-5 h-100 d-flex flex-column gap-4"
            >
              {/* Relevant Coursework */}
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaBook className="text-info fs-5" />
                  <h4 className="fw-bold fs-5 mb-0">Relevant Coursework</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {courseworkData.map((course, idx) => (
                    <span key={idx} className="tech-badge py-2 px-3">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaTrophy className="text-warning fs-5" />
                  <h4 className="fw-bold fs-5 mb-0">Key Achievements</h4>
                </div>
                <ul className="list-unstyled text-muted small mb-0">
                  {achievementsData.map((ach, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spoken Languages & Extra Curricular */}
              <div className="pt-3 border-top border-secondary" style={{ borderColor: 'var(--border-color) !important' }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <FaLanguage className="text-purple fs-5" style={{ color: '#818cf8' }} />
                      <h5 className="fw-bold fs-6 mb-0">Languages</h5>
                    </div>
                    <div className="d-flex gap-2">
                      {spokenLanguages.map((lang, idx) => (
                        <span key={idx} className="skill-category-badge">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h5 className="fw-bold fs-6 mb-2 text-primary">Activities</h5>
                    <p className="text-muted small mb-0">
                      Active hackathon participant, team collaborator, & continuous technology learner.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
