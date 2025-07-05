
import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "Firebase", level: 70 }
      ]
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Testing", level: 80 },
        { name: "Scrum/Agile", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>HABILIDADES TÉCNICAS</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
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
