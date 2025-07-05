
import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'FULL STACK DEVELOPER';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>
            EVA SISALLI GUZMÁN
          </h1>
          <h2 className={styles.title}>
            {displayText}
            <span className={styles.cursor}>|</span>
          </h2>
          <p className={styles.description}>
            Desarrolladora Web con pasión por crear interfaces intuitivas y accesibles.
            Especializada en React, Java Spring Boot y tecnologías modernas.
          </p>
          <div className={styles.cta}>
            <button 
              className={styles.primaryBtn}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VER PROYECTOS
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              CONTACTO
            </button>
          </div>
        </div>
        <div className={styles.visualContainer}>
          <div className={styles.neonGrid}></div>
          <div className={styles.avatar}>
            <div className={styles.avatarGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
