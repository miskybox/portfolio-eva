
import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['FULL STACK DEVELOPER', 'QA AUTOMATION ENGINEER', 'CYBERSECURITY'];

  useEffect(() => {
    const fullText = roles[currentRole];
    
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      // Wait and then switch to next role
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRole, roles]);

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
            Full Stack Developer specialized in React, Java Spring Boot, and E2E Testing with Playwright.
            I integrate Cybersecurity standards (OWASP) from the early stages of development.
          </p>
          <div className={styles.cta}>
            <button 
              className={styles.primaryBtn}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW PROJECTS
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              CONTACT
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
