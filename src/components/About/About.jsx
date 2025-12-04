
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>ABOUT ME</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Junior Full Stack Developer specialized in the Java and JavaScript/TypeScript ecosystem. 
              My approach goes beyond writing code: I integrate QA Automation strategies 
              (Playwright) and Cybersecurity standards (OWASP) from the early stages of development.
            </p>
            <p className={styles.description}>
              Practical experience in creating scalable SPAs, consuming RESTful APIs, and managing 
              relational databases. I aim to contribute my analytical skills and proactivity to a 
              technical team that values clean, secure, and testable code.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>2+</span>
                <span className={styles.highlightText}>Years in Tech</span>
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
            <h3 className={styles.sectionTitle}>EXPERIENCE</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2025</div>
                <div className={styles.timelineContent}>
                  <h4>Basetis – QA Automation Engineer</h4>
                  <p>E2E Testing with Playwright and TypeScript. POM implementation and Allure Reports.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2024 - 2025</div>
                <div className={styles.timelineContent}>
                  <h4>Factoría F5 – FemCoders</h4>
                  <p>Full Stack Development with Java Spring Boot, NestJS and Cybersecurity. Participation in HackBarna AI Summit 25.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2023 - 2024</div>
                <div className={styles.timelineContent}>
                  <h4>IT Academy – Barcelona Activa</h4>
                  <p>Frontend Development with React. Leadership of "Forum Viajeros" project (interactive SPA).</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2006 - 2022</div>
                <div className={styles.timelineContent}>
                  <h4>Hospitality & Restaurant Industry</h4>
                  <p>+15 years of team management, leadership and crisis resolution.</p>
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
