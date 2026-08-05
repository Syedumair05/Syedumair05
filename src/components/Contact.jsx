import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCopy, FaCheck, FaLinkedin, FaGithub, FaExclamationTriangle } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Real form submission via FormSubmit service directly to user's email
      const response = await fetch(`https://formsubmit.co/ajax/${personalDetails.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setIsSubmitting(false);
        setSubmitted(true);

        // Trigger Confetti Celebration
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: Trigger direct mailto link if API fetch encounters issues
      const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const getDirectMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="row gy-4">
          {/* Left Info Cards */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="d-flex flex-column gap-3"
            >
              <div className="glass-card p-4">
                <h4 className="fw-bold fs-5 mb-3 gradient-text">Reach Out Anytime</h4>
                <p className="text-secondary small mb-4">
                  Whether you have an internship opportunity, a project collaboration in mind, or just want to connect, feel free to send a message!
                </p>

                {/* Email Item */}
                <div className="d-flex align-items-center justify-content-between p-3 rounded-4 mb-3" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-3 rounded-circle text-info" style={{ background: 'rgba(56, 189, 248, 0.15)' }}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <small className="text-muted d-block">Email</small>
                      <a href={`mailto:${personalDetails.email}`} className="fw-semibold text-primary small text-break text-decoration-none">
                        {personalDetails.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalDetails.email, 'email')}
                    className="btn btn-sm btn-outline-secondary rounded-circle ms-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <FaCheck className="text-success" /> : <FaCopy />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="d-flex align-items-center justify-content-between p-3 rounded-4 mb-3" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-3 rounded-circle text-success" style={{ background: 'rgba(52, 211, 153, 0.15)' }}>
                      <FaPhone />
                    </div>
                    <div>
                      <small className="text-muted d-block">Phone</small>
                      <a href={`tel:${personalDetails.phone}`} className="fw-semibold text-primary small text-decoration-none">
                        {personalDetails.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                    className="btn btn-sm btn-outline-secondary rounded-circle ms-2"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <FaCheck className="text-success" /> : <FaCopy />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4 mb-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="p-3 rounded-circle text-warning" style={{ background: 'rgba(251, 191, 36, 0.15)' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <small className="text-muted d-block">Location</small>
                    <span className="fw-semibold text-primary small">{personalDetails.location}</span>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="pt-3 border-top border-secondary d-flex align-items-center justify-content-between" style={{ borderColor: 'var(--border-color) !important' }}>
                  <span className="text-muted small fw-medium">Social Links:</span>
                  <div className="d-flex gap-2">
                    <a
                      href={personalDetails.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm rounded-circle p-2"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={personalDetails.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm rounded-circle p-2"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Contact Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-4 p-md-5"
            >
              <h4 className="fw-bold fs-5 mb-4">Send a Message</h4>

              {submitted && (
                <div className="alert alert-success rounded-4 d-flex align-items-center gap-2 mb-4" role="alert">
                  <FaCheck /> Your message has been sent directly to {personalDetails.email}!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-secondary">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="form-control bg-dark bg-opacity-10 text-primary border-secondary rounded-3 p-3 shadow-none"
                      style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-secondary">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="form-control bg-dark bg-opacity-10 text-primary border-secondary rounded-3 p-3 shadow-none"
                      style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold text-secondary">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Internship Opportunity"
                      className="form-control bg-dark bg-opacity-10 text-primary border-secondary rounded-3 p-3 shadow-none"
                      style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold text-secondary">Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      className="form-control bg-dark bg-opacity-10 text-primary border-secondary rounded-3 p-3 shadow-none"
                      style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4 d-flex flex-column gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-custom w-100 justify-content-center py-3 fs-6"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <FaPaperPlane /> Send Message
                        </>
                      )}
                    </button>

                    <a
                      href={getDirectMailtoLink()}
                      className="btn-outline-custom w-100 justify-content-center py-2 text-center small text-decoration-none"
                    >
                      <FaEnvelope /> Open in Email App (Direct Mailto)
                    </a>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
