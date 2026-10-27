# Eva Sisalli Guzmán — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/E2E-Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![License](https://img.shields.io/badge/license-Personal-0d110f)](#)

Portfolio personal con estética **terminal / IDE**: dark & light mode, tipografía mono, focos en **Full Stack**, **AppSec** y **QA Automation**.

**Live:** [portfolio-eva-five.vercel.app](https://portfolio-eva-five.vercel.app)  
**Contacto:** [e.sisalli@yahoo.com](mailto:e.sisalli@yahoo.com) · [GitHub](https://github.com/miskybox) · [LinkedIn](https://www.linkedin.com/in/eva-sisalli-guzman/)

---

## Preview

### Dark mode

![Hero dark — terminal aesthetic](docs/screenshots/hero-dark.png)

### Light mode

![Hero light — mint grid](docs/screenshots/hero-light.png)

### Tech Stack

![Tech stack section](docs/screenshots/tech-stack.png)

---

## Sobre el proyecto

Sitio one-page que presenta mi perfil como **Full Stack Developer** (React, Java Spring Boot, Python/FastAPI), con énfasis en:

- Código limpio y testeable
- Estándares **OWASP** desde etapas tempranas
- Automatización **QA** con Playwright
- Formación actual en **AI & Data Science** (Factoría F5)

El contenido (textos, stack, proyectos, enlaces) se edita en un único archivo: [`src/content/portfolio.ts`](src/content/portfolio.ts).

---

## Features

- Estética terminal (`whoami`, `$ view_projects`, navegación `./about`…)
- **Dark / light** con contraste pensado para accesibilidad
- Responsive (móvil, tablet, desktop) sin scroll horizontal
- Cards de proyectos con **preview clicable** (demo / live / repo)
- Iconos de marca en el tech stack
- Cabeceras de seguridad (CSP, HSTS-ready, etc.) en Next.js
- Tests unitarios (Vitest) + E2E a11y (Playwright + axe)

---

## Tech stack del sitio

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI | React 19 · Tailwind CSS v4 |
| Lenguaje | TypeScript |
| Iconos | react-icons |
| Fuentes | JetBrains Mono · Michroma |
| Deploy | Vercel |
| Tests | Vitest · Playwright · axe-core |

---

## Proyectos destacados

| | Proyecto | Qué es | Enlaces |
| :---: | --- | --- | --- |
| <img src="public/projects/cancha-dt.png" alt="CanchaDT" width="120" /> | **cancha-dt** | Pizarra táctica 2D (PWA) para fútbol amateur y base | [Demo](https://dev-futbol-total.miskybox.workers.dev/) |
| <img src="public/projects/forum-viajeros.png" alt="Forum Viajeros" width="120" /> | **forum-viajeros** | SPA de relatos y comunidad viajera | [Web](https://www.forumviajeros.com/) · [Code](https://github.com/miskybox/Forum_frontend) |
| <img src="public/projects/playwright-qa.svg" alt="Playwright QA" width="120" /> | **playwright-qa-tests** | Suite E2E risk-based (Polymer Shop) | [Code](https://github.com/miskybox/project-qa-tests) |

---

## Arranque local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # producción local
```

---

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm start` | Sirve el build |
| `npm run lint` | ESLint (Next.js) |
| `npm test` | Vitest (contenido / integridad) |
| `npm run test:e2e` | Playwright E2E + a11y |

---

## Estructura

```text
src/
  app/           # layout, page, globals.css, icon
  components/    # header, logo, theme toggle, tech chips…
  content/       # portfolio.ts ← edita aquí
public/
  projects/      # logos / previews de proyectos
docs/
  screenshots/   # capturas del README
e2e/             # Playwright
```

---

## Seguridad & accesibilidad

- Skip link, landmarks semánticos, `rel="noopener noreferrer"` en externos
- Contraste revisado en light/dark (textos de cuerpo, cards de proyectos)
- CSP y cabeceras HTTP en `next.config.ts` (`unsafe-eval` solo en desarrollo)
- Checks E2E con axe-core

---

## Licencia

Uso personal / portfolio. El código del sitio puede servir de referencia; el contenido (textos, marca ESG, capturas) es propio.
