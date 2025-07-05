
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>EVA.DEV</span>
        </div>
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>
            ABOUT
          </button>
          <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
            SKILLS
          </button>
          <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
            PROJECTS
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
