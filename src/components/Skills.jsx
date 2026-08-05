import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import {
  SiC, SiJavascript, SiPython,
  SiHtml5, SiReact,
  SiGit, SiGithub, SiPostman
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaCode, FaProjectDiagram, FaDatabase, FaBrain, FaRobot } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const iconMap = {
  SiC: <SiC />,
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiPython: <SiPython />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <FaCss3Alt />,
  SiGit: <SiGit />,
  SiGithub: <SiGithub />,
  SiVisualstudiocode: <VscCode />,
  FaCode: <FaCode />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaDatabase: <FaDatabase />,
  FaBrain: <FaBrain />,
  FaRobot: <FaRobot />
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'WebTech', 'Tools', 'Concepts'];

  const categoryNames = {
    All: 'All Skills',
    Languages: 'Languages',
    WebTech: 'Web Technologies',
    Tools: 'Tools & Platforms',
    Concepts: 'Core Concepts'
  };

  const getAllSkills = () => {
    if (activeCategory === 'All') {
      return Object.entries(skillsData).flatMap(([categoryKey, skills]) =>
        skills.map((s) => ({ ...s, category: categoryNames[categoryKey] || categoryKey }))
      );
    }
    return (skillsData[activeCategory] || []).map((s) => ({ ...s, category: categoryNames[activeCategory] || activeCategory }));
  };

  const currentSkills = getAllSkills();

  return (
    <section id="skills" className="position-relative py-5">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Technical Skills</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </div>

        {/* Category Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn rounded-pill px-4 py-2 fw-medium transition-all ${
                activeCategory === cat ? 'btn-primary-custom' : 'btn-outline-custom'
              }`}
              style={{ fontSize: '0.9rem' }}
            >
              {categoryNames[cat]}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="row g-4 justify-content-center">
          <AnimatePresence>
            {currentSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="col-6 col-sm-4 col-md-3 col-lg-3"
                key={`${skill.category}-${skill.name}`}
              >
                <div className="glass-card p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="p-3 rounded-circle mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      fontSize: '2rem',
                      color: skill.color,
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: `1px solid ${skill.color}44`,
                      width: '64px',
                      height: '64px'
                    }}
                  >
                    {iconMap[skill.icon] || <span className="fs-5 fw-bold">{skill.name[0]}</span>}
                  </div>
                  <h5 className="fw-bold fs-6 mb-2">{skill.name}</h5>
                  <span className="skill-category-badge">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
