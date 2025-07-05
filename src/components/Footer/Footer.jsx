
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>EVA SISALLI GUZMÁN</h3>
            <p className={styles.brandSubtitle}>Full Stack Developer</p>
          </div>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Eva Sisalli Guzmán. Todos los derechos reservados.</p>
            <p className={styles.tech}>Desarrollado con React + Vite</p>
          </div>
        </div>
        <div className={styles.footerGlow}></div>
      </div>
    </footer>
  );
};

export default Footer;
