import { SiteHeader } from "@/components/site-header";
import { TechChip } from "@/components/tech-chip";
import { Typewriter } from "@/components/typewriter";
import {
  about,
  contact,
  experience,
  hero,
  profile,
  projects,
  stack,
} from "@/content/portfolio";

function chunk<T>(items: readonly T[], size: number) {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push([...items.slice(i, i + size)]);
  }
  return rows;
}

export default function HomePage() {
  const stackRows = chunk(profile.stack, 2);

  return (
    <div id="top" className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-6" tabIndex={-1}>
        <section className="grid min-h-[85vh] items-center gap-12 py-20 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-6 text-sm text-muted-foreground">
              <span className="text-primary">{profile.handle}</span>:
              <span className="text-accent">~</span>$ {hero.command}
            </p>
            <h1 className="font-display text-4xl leading-tight tracking-wide text-glow md:text-6xl">
              EVA SISALLI
              <br />
              GUZMÁN
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              {"> "}
              <Typewriter phrases={hero.phrases} />
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {hero.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <a
                href="#projects"
                className="rounded bg-primary px-5 py-3 font-medium text-primary-foreground glow transition hover:opacity-90"
              >
                $ view_projects
              </a>
              <a
                href="#contact"
                className="rounded border border-border px-5 py-3 transition hover:border-primary hover:text-primary"
              >
                $ contact --me
              </a>
            </div>
          </div>

          <div className="rounded-md border border-border bg-card text-xs shadow-xl glow">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive" />
              <span className="h-3 w-3 rounded-full bg-warn" />
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="ml-3 text-muted-foreground">profile.json</span>
            </div>
            <pre className="overflow-x-auto p-5 leading-6">
              {"{\n"}
              {"  "}
              <span className="text-accent">&quot;role&quot;</span>
              {": "}
              <span className="text-primary">&quot;{profile.role}&quot;</span>
              {",\n  "}
              <span className="text-accent">&quot;focus&quot;</span>
              {": ["}
              {profile.focus.map((item, index) => (
                <span key={item}>
                  {index > 0 ? ", " : null}
                  <span className="text-primary">&quot;{item}&quot;</span>
                </span>
              ))}
              {"],\n  "}
              <span className="text-accent">&quot;stack&quot;</span>
              {": [\n"}
              {stackRows.map((row, rowIndex) => (
                <span key={row.join("-")}>
                  {"    "}
                  {row.map((item, index) => (
                    <span key={item}>
                      {index > 0 ? ", " : null}
                      <span className="text-primary">&quot;{item}&quot;</span>
                    </span>
                  ))}
                  {rowIndex < stackRows.length - 1 ? ",\n" : "\n"}
                </span>
              ))}
              {"  ],\n  "}
              <span className="text-accent">&quot;learning&quot;</span>
              {": "}
              <span className="text-primary">&quot;{profile.learning}&quot;</span>
              {",\n  "}
              <span className="text-accent">&quot;at&quot;</span>
              {": "}
              <span className="text-primary">&quot;{profile.at}&quot;</span>
              {",\n  "}
              <span className="text-accent">&quot;location&quot;</span>
              {": "}
              <span className="text-primary">&quot;{profile.location}&quot;</span>
              {",\n  "}
              <span className="text-accent">&quot;open_to_work&quot;</span>
              {": "}
              <span className="text-warn">{String(profile.openToWork)}</span>
              {"\n}"}
            </pre>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-20">
          <h2 className="mb-10 flex items-center gap-4 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            <span className="text-primary">01</span>
            <span className="font-display text-foreground">About</span>
            <span className="h-px flex-1 bg-border" />
          </h2>
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-border bg-border text-center">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-card p-5">
                  <div className="font-display text-xl text-primary">{stat.value}</div>
                  <div className="mt-2 text-[10px] tracking-widest text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-20">
          <h2 className="mb-10 flex items-center gap-4 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            <span className="text-primary">02</span>
            <span className="font-display text-foreground">Experience</span>
            <span className="h-px flex-1 bg-border" />
          </h2>
          <ol className="relative space-y-8 border-l border-border pl-8">
            {experience.map((item) => (
              <li key={item.title} className="relative">
                <span
                  className={`absolute top-1.5 -left-[37px] h-3 w-3 rounded-full border-2 border-primary ${
                    "current" in item && item.current
                      ? "bg-primary glow"
                      : "bg-background"
                  }`}
                />
                <div className="text-xs text-primary">
                  {item.when}
                  {"current" in item && item.current ? (
                    <span className="ml-3 rounded border border-primary px-2 py-0.5">
                      in progress
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-1 font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="stack" className="scroll-mt-24 py-20">
          <h2 className="mb-10 flex items-center gap-4 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            <span className="text-primary">03</span>
            <span className="font-display text-foreground">Tech Stack</span>
            <span className="h-px flex-1 bg-border" />
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stack.map((group) => (
              <div
                key={group.group}
                className="rounded border border-border bg-card p-5 transition hover:border-primary"
              >
                <p className="mb-4 text-xs text-muted-foreground">
                  <span className="text-primary">$</span> ls ./{group.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechChip key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-20">
          <h2 className="mb-10 flex items-center gap-4 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            <span className="text-primary">04</span>
            <span className="font-display text-foreground">Projects</span>
            <span className="h-px flex-1 bg-border" />
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
              >
                <p className="text-xs text-muted-foreground">~/projects/</p>
                <h3 className="mt-1 text-lg font-bold text-primary">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-accent">
                  {project.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-xs">
                  {"repo" in project && project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      [ code ]
                    </a>
                  ) : null}
                  {"live" in project && project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {"demo" in project && project.demo ? "[ demo ]" : "[ live ]"}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20">
          <h2 className="mb-10 flex items-center gap-4 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            <span className="text-primary">05</span>
            <span className="font-display text-foreground">Contact</span>
            <span className="h-px flex-1 bg-border" />
          </h2>
          <div className="rounded border border-border bg-card p-8 md:p-12">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">$</span> ./connect.sh
            </p>
            <h3 className="mt-4 font-display text-2xl md:text-3xl">{contact.title}</h3>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">{contact.text}</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="rounded bg-primary px-5 py-3 text-primary-foreground glow"
              >
                {contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-border px-5 py-3 hover:border-primary hover:text-primary"
              >
                github
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-border px-5 py-3 hover:border-primary hover:text-primary"
              >
                linkedin
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} ·{" "}
        <span className="text-primary">exit 0</span>
      </footer>
    </div>
  );
}
