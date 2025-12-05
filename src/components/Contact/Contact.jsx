import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { Github, Linkedin, Mail, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [validationErrors, setValidationErrors] = useState({});
  
  // Security: Rate limiting
  const lastSubmitTime = useRef(0);
  const submitCount = useRef(0);
  const RATE_LIMIT_MS = 30000; // 30 seconds between submissions
  const MAX_SUBMISSIONS = 3; // Max 3 submissions per session

  // Security: Honeypot field (trap for bots)
  const [honeypot, setHoneypot] = useState('');

  // Security: Enhanced XSS sanitization
  const sanitizeText = (text) => {
    if (typeof text !== 'string') return '';
    
    return text
      .replaceAll(/[<>"'`]/g, '') // Remove dangerous characters
      .replaceAll(/javascript:/gi, '') 
      .replaceAll(/on\w+\s*=/gi, '') // Event handlers
      .replaceAll(/data:/gi, '') // Data URLs
      .replaceAll(/vbscript:/gi, '')
      .replaceAll(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replaceAll(/expression\s*\(/gi, '') // CSS expressions
      .replaceAll(/url\s*\(/gi, '') // CSS url()
      .trim()
      .slice(0, 1000); // Max length protection
  };

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 50) {
      errors.name = 'Name cannot exceed 50 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    } else if (formData.email.length > 100) {
      errors.email = 'Email cannot exceed 100 characters';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 500) {
      errors.message = 'Message cannot exceed 500 characters';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Security: Check honeypot (bot trap)
    if (honeypot) {
      console.warn('Bot detected');
      return;
    }

    // Security: Rate limiting
    const now = Date.now();
    if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
      setValidationErrors({ form: 'Please wait before submitting again' });
      setSubmitStatus('error');
      return;
    }

    if (submitCount.current >= MAX_SUBMISSIONS) {
      setValidationErrors({ form: 'Maximum submission limit reached' });
      setSubmitStatus('error');
      return;
    }
    
    const errors = validateForm();
    setValidationErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const sanitizedData = {
        name: sanitizeText(formData.name),
        email: sanitizeText(formData.email),
        message: sanitizeText(formData.message)
      };

      
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
        throw new Error('Invalid data after sanitization');
      }

      
      const response = await fetch('https://formspree.io/f/myzjarol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: sanitizedData.name,
          email: sanitizedData.email,
          message: sanitizedData.message,
          _replyto: sanitizedData.email,
          _subject: `[PORTFOLIO] Nuevo mensaje - ${sanitizedData.name}`
        })
      });

      if (response.ok) {
        // Update rate limiting
        lastSubmitTime.current = now;
        submitCount.current += 1;
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setValidationErrors({});
        
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Submission error');
      }

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
      
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    
    const maxLengths = {
      name: 50,
      email: 100,
      message: 500
    };

    if (value.length <= maxLengths[name]) {
      setFormData({
        ...formData,
        [name]: value
      });
      
      
      if (validationErrors[name]) {
        setValidationErrors({
          ...validationErrors,
          [name]: ''
        });
      }
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>CONTACT</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.subtitle}>Let's Connect!</h3>
            <p className={styles.description}>
              Have a project in mind? Want to collaborate? I'd love to hear from you! 
              I'm always open to new opportunities and challenges.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/miskybox"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eva-sisalli-guzman/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:e.sisalli@yahoo.com"
                className={styles.socialLink}
              >
                <Mail size={24} />
                <span>e.sisalli@yahoo.com</span>
              </a>
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            {/* Security: Honeypot field - hidden from users, visible to bots */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            
            {submitStatus === 'success' && (
              <div className={styles.statusMessage + ' ' + styles.success}>
                <CheckCircle size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={styles.statusMessage + ' ' + styles.error}>
                <XCircle size={20} />
                <span>{validationErrors.form || 'Error sending message. Please check your data.'}</span>
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${styles.input} ${validationErrors.name ? styles.inputError : ''}`}
                maxLength="50"
              />
              {validationErrors.name && (
                <span className={styles.errorText}>{validationErrors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${styles.input} ${validationErrors.email ? styles.inputError : ''}`}
                maxLength="100"
              />
              {validationErrors.email && (
                <span className={styles.errorText}>{validationErrors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`${styles.textarea} ${validationErrors.message ? styles.inputError : ''}`}
                maxLength="500"
              />
              {validationErrors.message && (
                <span className={styles.errorText}>{validationErrors.message}</span>
              )}
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;