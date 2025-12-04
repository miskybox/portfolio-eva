
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>SOBRE MÍ</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Desarrolladora Full Stack Junior especializada en el ecosistema Java y JavaScript/TypeScript. 
              Mi enfoque va más allá de la escritura de código: integro estrategias de QA Automation 
              (Playwright) y estándares de Ciberseguridad (OWASP) desde las fases tempranas del desarrollo.
            </p>
            <p className={styles.description}>
              Experiencia práctica en la creación de SPA escalables, consumo de APIs RESTful y gestión 
              de bases de datos relacionales. Busco aportar mi capacidad analítica y proactividad en un 
              equipo técnico que valore el código limpio, seguro y testeable.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>2+</span>
                <span className={styles.highlightText}>Años en Tech</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>3</span>
                <span className={styles.highlightText}>Bootcamps</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>E2E</span>
                <span className={styles.highlightText}>QA Automation</span>
              </div>
            </div>
          </div>
          <div className={styles.experience}>
            <h3 className={styles.sectionTitle}>EXPERIENCIA</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2025</div>
                <div className={styles.timelineContent}>
                  <h4>Basetis – QA Automation Engineer</h4>
                  <p>Testing E2E con Playwright y TypeScript. Implementación de POM y Allure Reports.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2024 - 2025</div>
                <div className={styles.timelineContent}>
                  <h4>Factoría F5 – FemCoders</h4>
                  <p>Desarrollo Full Stack con Java Spring Boot, NestJS y Ciberseguridad. Participación en HackBarna AI Summit 25.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2023 - 2024</div>
                <div className={styles.timelineContent}>
                  <h4>IT Academy – Barcelona Activa</h4>
                  <p>Desarrollo Frontend con React. Liderazgo del proyecto "Forum Viajeros" (SPA interactiva).</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2006 - 2022</div>
                <div className={styles.timelineContent}>
                  <h4>Sector Hotelería y Restauración</h4>
                  <p>+15 años de gestión de equipos, liderazgo y resolución de crisis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
