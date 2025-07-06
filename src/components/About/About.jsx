
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
              Soy una desarrolladora Full Stack Junior con formación sólida en Java y React. 
              Mi pasión radica en crear interfaces intuitivas, accesibles y escalables que 
              ofrezcan experiencias de usuario excepcionales.
            </p>
            <p className={styles.description}>
              Con experiencia en desarrollo de Single Page Applications (SPA) y consumo de 
              APIs RESTful, me caracterizo por mi mentalidad analítica, orientación a la 
              mejora continua y capacidad de adaptación rápida a nuevas tecnologías.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>2+</span>
                <span className={styles.highlightText}>Años de Experiencia</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>15+</span>
                <span className={styles.highlightText}>Proyectos Completados</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>100%</span>
                <span className={styles.highlightText}>Dedicación</span>
              </div>
            </div>
          </div>
          <div className={styles.experience}>
            <h3 className={styles.sectionTitle}>EXPERIENCIA</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2024 - 2025</div>
                <div className={styles.timelineContent}>
                  <h4>Factoría F5 – FemCoders</h4>
                  <p>Bootcamp intensivo de desarrollo Full Stack con Java y React</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2023 - 2024</div>
                <div className={styles.timelineContent}>
                  <h4>IT Academy – Barcelona Activa</h4>
                  <p>Bootcamp intensivo de desarrollo con JavaSript, HTML, CSS , React</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2006 - 2022</div>
                <div className={styles.timelineContent}>
                  <h4>Sector Hotelería y Restauración</h4>
                  <p>Experiencia en atención al cliente y trabajo en equipo</p>
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
