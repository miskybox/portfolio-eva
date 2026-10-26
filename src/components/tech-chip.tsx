import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiBurpsuite,
  SiCloudflare,
  SiCss,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiJunit5,
  SiNestjs,
  SiNumpy,
  SiN8N,
  SiOwasp,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRender,
  SiSpringboot,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVitest,
} from "react-icons/si";
import {
  FaBrain,
  FaClipboardCheck,
  FaLock,
  FaShieldAlt,
  FaTheaterMasks,
} from "react-icons/fa";
import { MdOutlineBugReport } from "react-icons/md";
import { TbApi } from "react-icons/tb";

type TechMeta = {
  Icon: IconType;
  color: string;
};

const techMeta: Record<string, TechMeta> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "JavaScript ES6+": { Icon: SiJavascript, color: "#F7DF1E" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  "Java · Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  Python: { Icon: SiPython, color: "#3776AB" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  "Node.js · NestJS": { Icon: SiNestjs, color: "#E0234E" },
  "Prisma ORM": { Icon: SiPrisma, color: "#5A67D8" },
  "REST APIs": { Icon: TbApi, color: "#0EA5E9" },
  "Swagger / OpenAPI": { Icon: SiSwagger, color: "#85EA2D" },
  Pandas: { Icon: SiPandas, color: "#E70488" },
  NumPy: { Icon: SiNumpy, color: "#4DABCF" },
  "Machine Learning": { Icon: FaBrain, color: "#A855F7" },
  "n8n automation": { Icon: SiN8N, color: "#EA4B71" },
  "OWASP Top 10": { Icon: SiOwasp, color: "#66CC33" },
  "Burp Suite": { Icon: SiBurpsuite, color: "#FF6633" },
  "OWASP Juice Shop": { Icon: SiOwasp, color: "#FFB81C" },
  "Secure Coding": { Icon: FaShieldAlt, color: "#16A34A" },
  "Auth & RBAC": { Icon: FaLock, color: "#CA8A04" },
  "Playwright E2E": { Icon: FaTheaterMasks, color: "#2EAD33" },
  Jest: { Icon: SiJest, color: "#C21325" },
  Vitest: { Icon: SiVitest, color: "#729B1B" },
  JUnit: { Icon: SiJunit5, color: "#25A162" },
  "Testing Library": { Icon: SiTestinglibrary, color: "#E33332" },
  Allure: { Icon: MdOutlineBugReport, color: "#FF6A4C" },
  POM: { Icon: FaClipboardCheck, color: "#2563EB" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Render: { Icon: SiRender, color: "#46E3B7" },
  Cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  "Git · Gitflow": { Icon: SiGit, color: "#F05032" },
  "GitHub Projects": { Icon: SiGithub, color: "#8B949E" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  Vercel: { Icon: SiVercel, color: "#A1A1AA" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Jira: { Icon: SiJira, color: "#0052CC" },
};

export function TechChip({ label }: { label: string }) {
  const meta = techMeta[label];
  const Icon = meta?.Icon;
  const color = meta?.color ?? "var(--primary)";

  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-secondary/80 px-2 py-1 text-xs text-secondary-foreground">
      {Icon ? (
        <Icon
          aria-hidden
          className="size-3.5 shrink-0"
          style={{ color }}
          title={label}
        />
      ) : null}
      <span>{label}</span>
    </span>
  );
}
