/**
 * Contenido del portfolio. Cambia textos, enlaces y proyectos aquí;
 * la página los lee y no hace falta tocar el diseño.
 */

export const profile = {
  name: "Eva Sisalli Guzmán",
  handle: "eva@sisalli",
  role: "Full Stack Dev",
  focus: ["AppSec", "QA"],
  stack: ["React", "Spring Boot", "FastAPI", "Docker"],
  learning: "AI & Data Science",
  at: "Factoría F5",
  location: "Barcelona",
  openToWork: true,
} as const;

export const hero = {
  command: "whoami",
  phrases: [
    "full_stack_developer",
    "security_minded",
    "qa_automation",
    "ai_&_data_science",
  ],
  summary:
    "Full Stack Developer building secure, testable software with React, Java Spring Boot and Python/FastAPI. I bring OWASP security standards and QA automation into every stage of development — now expanding into AI & Data Science.",
} as const;

export const about = {
  paragraphs: [
    "Junior Full Stack Developer specialized in the Java and JavaScript/TypeScript ecosystem, now adding Python, FastAPI and data tooling to my stack. My approach goes beyond writing code: I integrate QA Automation (Playwright) and Cybersecurity standards (OWASP) from the early stages of development.",
    "Practical experience building scalable SPAs, designing and documenting RESTful APIs with Swagger, containerizing services with Docker, automating workflows with n8n and managing relational databases.",
    "I want to bring my analytical skills and proactivity to a team that values clean, secure and testable code.",
  ],
  stats: [
    { value: "2+", label: "years in tech" },
    { value: "4", label: "bootcamps" },
    { value: "E2E", label: "qa automation" },
    { value: "OWASP", label: "secure coding" },
  ],
} as const;

export const experience = [
  {
    when: "2026 — now",
    title: "Factoría F5 — AI & Data Science Bootcamp",
    description:
      "Python, data analysis, machine learning, FastAPI services and automation workflows with n8n.",
    current: true,
  },
  {
    when: "2025",
    title: "Basetis — QA Automation Engineer",
    description:
      "E2E testing with Playwright and TypeScript. POM implementation and Allure Reports.",
  },
  {
    when: "2024 — 2025",
    title: "Factoría F5 — FemCoders",
    description:
      "Full Stack Development with Java Spring Boot, NestJS and Cybersecurity. HackBarna AI Summit 25.",
  },
  {
    when: "2023 — 2024",
    title: "IT Academy — Barcelona Activa",
    description:
      "Frontend Development with React. Led the “Forum Viajeros” project (interactive SPA).",
  },
  {
    when: "2006 — 2022",
    title: "Hospitality & Restaurant Industry",
    description: "15+ years of team management, leadership and crisis resolution.",
  },
] as const;

export const stack = [
  {
    group: "frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    group: "backend",
    items: [
      "Java · Spring Boot",
      "Python",
      "FastAPI",
      "Node.js · NestJS",
      "Prisma ORM",
      "REST APIs",
      "Swagger / OpenAPI",
    ],
  },
  {
    group: "ai_&_data",
    items: ["Python", "Pandas", "NumPy", "Machine Learning", "n8n automation"],
  },
  {
    group: "security",
    items: [
      "OWASP Top 10",
      "Burp Suite",
      "OWASP Juice Shop",
      "Secure Coding",
      "Auth & RBAC",
    ],
  },
  {
    group: "qa_testing",
    items: [
      "Playwright E2E",
      "Jest",
      "Vitest",
      "JUnit",
      "Testing Library",
      "Allure",
      "POM",
    ],
  },
  {
    group: "devops_&_data",
    items: [
      "Docker",
      "Git · Gitflow",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Vercel",
      "Postman",
      "Jira",
    ],
  },
] as const;

export const projects = [
  {
    name: "urdimbre",
    description:
      "Activity management system with role-based dashboards (Admin / Organizer). Full stack with authentication and authorization.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    repo: "https://github.com/miskybox/Urdimbre_Frontend",
  },
  {
    name: "forum-viajeros",
    description:
      "SPA for sharing travel experiences. Modern, responsive interface with community features.",
    tags: ["React", "Tailwind", "REST API"],
    repo: "https://github.com/miskybox/Forum_frontend",
    live: "https://www.forumviajeros.com/",
  },
  {
    name: "playwright-qa-tests",
    description:
      "Automated tests on the Polymer Shop sample store with a risk-based strategy covering critical user flows.",
    tags: ["Playwright", "TypeScript", "Testing"],
    repo: "https://github.com/miskybox/project-qa-tests",
  },
] as const;

export const contact = {
  title: "Let's build something secure.",
  text: "Have a project in mind or an open position? I'm always open to new opportunities and challenges.",
  email: "e.sisalli@yahoo.com",
  github: "https://github.com/miskybox",
  linkedin: "https://www.linkedin.com/in/eva-sisalli-guzman/",
} as const;

export const nav = [
  { href: "#about", label: "./about" },
  { href: "#experience", label: "./experience" },
  { href: "#stack", label: "./stack" },
  { href: "#projects", label: "./projects" },
  { href: "#contact", label: "./contact" },
] as const;

export const meta = {
  title: "Eva Sisalli Guzmán — Full Stack Developer & Security",
  description:
    "Full Stack Developer (React, Java Spring Boot, Python/FastAPI) with Cybersecurity and QA Automation. Currently studying AI & Data Science at Factoría F5.",
  socialDescription:
    "Secure, testable full stack software. React · Spring Boot · FastAPI · Docker · OWASP.",
} as const;
