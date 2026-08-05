import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Featured Work</span>
          <h2 className="section-title">Software Projects</h2>
          <div className="section-divider"></div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 justify-content-center">
          {projectsData.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card h-100 d-flex flex-column"
              >
                {/* Image Container with Zoom effect */}
                <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100 img-fluid transition-all"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <span
                    className="position-absolute top-0 end-0 m-3 badge rounded-pill bg-dark bg-opacity-75 text-info border border-info"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h4 className="fw-bold fs-5 mb-2">{project.title}</h4>
                  <p className="text-muted small mb-3 flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-badge" style={{ fontSize: '0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary" style={{ borderColor: 'var(--border-color) !important' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-sm btn-link text-info p-0 text-decoration-none fw-medium d-flex align-items-center gap-1"
                    >
                      <FaInfoCircle /> Details
                    </button>

                    <div className="d-flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm rounded-circle p-2"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border-color)',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="GitHub Repository"
                        title="View Source Code"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm rounded-circle p-2"
                        style={{
                          backgroundColor: 'rgba(56, 189, 248, 0.15)',
                          color: 'var(--accent-cyan)',
                          border: '1px solid rgba(56, 189, 248, 0.3)',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
