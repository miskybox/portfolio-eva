
import React from 'react';
import styles from './Projects.module.css';
import { ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "🧵 Urdimbre",
      description: "Sistema de gestión de actividades con dashboards por roles (Admin / Organizador). Desarrollo full-stack con autenticación y autorización.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      link: "https://github.com/miskybox/Urdimbre_Frontend.git",
      featured: true
    },
    {
      title: "🌍 Forum Viajeros",
      description: "SPA para compartir experiencias viajeras. Interfaz moderna y responsive con funcionalidades de comunidad.",
      tech: ["React", "Tailwind CSS", "API REST"],
      link: "https://github.com/miskybox/Forum_frontend.git",
      featured: true
    },
    {
      title: "🧪 Playwright QA Tests",
      description: "Suite completa de tests automáticos E2E para flujos críticos utilizando Playwright y TypeScript.",
      tech: ["Playwright", "TypeScript", "Testing"],
      link: "https://github.com/miskybox/playwright-tests",
      featured: false
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>PROYECTOS DESTACADOS</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div 
              key={project.title} 
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.featured && <span className={styles.featuredBadge}>DESTACADO</span>}
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
                  Ver Proyecto
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
