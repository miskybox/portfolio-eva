
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for saved theme preference - default to dark mode
  useEffect(() => {
    // Always start with dark mode, ignore saved preference
    setIsDark(true);
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('light', !newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>ESG</span>
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
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
