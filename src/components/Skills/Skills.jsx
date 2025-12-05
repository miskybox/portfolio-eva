
import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java (Spring Boot)", level: 85 },
        { name: "Node.js (NestJS)", level: 80 },
        { name: "Prisma ORM", level: 75 }
      ]
    },
    {
      title: "QA & Testing",
      skills: [
        { name: "Playwright (E2E)", level: 85 },
        { name: "Jest", level: 80 },
        { name: "Vitest", level: 80 },
        { name: "JUnit", level: 75 },
        { name: "Testing Library", level: 80 },
        { name: "Allure Reports", level: 75 },
        { name: "POM Pattern", level: 82 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "Supabase", level: 78 },
        { name: "Firebase", level: 75 },
        { name: "Vercel", level: 80 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Gitflow", level: 85 },
        { name: "Docker (Basic)", level: 65 },
        { name: "Postman", level: 88 },
        { name: "Jira", level: 80 }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Burp Suite", level: 70 },
        { name: "OWASP Juice Shop", level: 72 },
        { name: "Secure Coding", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>TECHNICAL SKILLS</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
