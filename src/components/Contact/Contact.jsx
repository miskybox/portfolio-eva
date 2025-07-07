import React, { useState } from 'react';
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

  
  const sanitizeText = (text) => {
    return text
      .replace(/[<>]/g, '') 
      .replace(/javascript:/gi, '') 
      .replace(/on\w+=/gi, '') 
      .replace(/script/gi, '') 
      .trim();
  };

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    } else if (formData.name.length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (formData.name.length > 50) {
      errors.name = 'El nombre no puede exceder 50 caracteres';
    }

    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'El formato del email no es válido';
    } else if (formData.email.length > 100) {
      errors.email = 'El email no puede exceder 100 caracteres';
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    } else if (formData.message.length > 500) {
      errors.message = 'El mensaje no puede exceder 500 caracteres';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
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
        throw new Error('Datos inválidos después de la sanitización');
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
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setValidationErrors({});
        
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Error en el envío');
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
        <h2 className={styles.title}>CONTACTO</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.subtitle}>¡Conectemos!</h3>
            <p className={styles.description}>
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¡Me encantaría escuchar de ti! 
              Estoy siempre abierta a nuevas oportunidades y desafíos.
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
                href="https://linkedin.com/in/eva-sisalli-guzman"
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
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            
            {submitStatus === 'success' && (
              <div className={styles.statusMessage + ' ' + styles.success}>
                <CheckCircle size={20} />
                <span>¡Mensaje enviado correctamente! Te responderé pronto.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={styles.statusMessage + ' ' + styles.error}>
                <XCircle size={20} />
                <span>Error al enviar el mensaje. Por favor, verifica los datos.</span>
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nombre
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
                Mensaje
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
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;