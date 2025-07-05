
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            </div>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
