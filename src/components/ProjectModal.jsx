import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        zIndex: 10000
      }}
      onClick={onClose}
    >
      <div
        className="glass-card p-4 p-md-5 position-relative overflow-auto"
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-glow)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn position-absolute top-0 end-0 m-3 text-muted fs-4 p-2 rounded-circle"
          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          aria-label="Close Modal"
        >
          <FaTimes />
        </button>

        {/* Project Header */}
        <span className="tech-badge mb-2">{project.category}</span>
        <h2 className="fw-bold fs-3 mb-3 gradient-text">{project.title}</h2>

        {/* Project Image */}
        <div className="rounded-4 overflow-hidden mb-4 shadow">
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid w-100"
            style={{ maxHeight: '320px', objectFit: 'cover' }}
          />
        </div>

        {/* Description */}
        <h5 className="fw-bold mb-2">Project Overview</h5>
        <p className="text-secondary mb-4 leading-relaxed">{project.description}</p>

        {/* Key Highlights / Resume Bullets */}
        {project.bullets && project.bullets.length > 0 && (
          <>
            <h5 className="fw-bold mb-2">Key Highlights</h5>
            <ul className="list-unstyled text-muted small mb-4">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                  <FaCheckCircle className="text-info mt-1 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Tech Stack */}
        <h5 className="fw-bold mb-2">Tech Stack</h5>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="d-flex flex-wrap gap-3 pt-3 border-top border-secondary" style={{ borderColor: 'var(--border-color) !important' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-custom"
          >
            <FaGithub /> View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              <FaExternalLinkAlt /> Launch Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
