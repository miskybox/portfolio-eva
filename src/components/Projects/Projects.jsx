
import React from 'react';
import styles from './Projects.module.css';
import { ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "🧵 Urdimbre",
      description: "Activity management system with role-based dashboards (Admin / Organizer). Full-stack development with authentication and authorization.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      link: "https://github.com/miskybox/Urdimbre_Frontend.git",
      featured: true
    },
    {
      title: "🌍 Forum Viajeros",
      description: "SPA for sharing travel experiences. Modern and responsive interface with community features.",
      tech: ["React", "Tailwind CSS", "API REST"],
      link: "https://github.com/miskybox/Forum_frontend.git",
      featured: true
    },
    {
      title: "🧪 Playwright QA Tests",
      description: "This project automates tests on the Polymer Shop sample store using Playwright, with a clear risk-based strategy and critical user flows.",
      tech: ["Playwright", "TypeScript", "Testing"],
      link: "https://github.com/miskybox/project-qa-tests.git",
      featured: false
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>FEATURED PROJECTS</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div 
              key={project.title} 
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.featured && <span className={styles.featuredBadge}>FEATURED</span>}
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Project
                  <ArrowUp className={styles.linkIcon} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
