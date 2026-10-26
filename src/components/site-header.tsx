"use client";

import { useState } from "react";
import { nav } from "@/content/portfolio";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Logo />
        <div className="hidden gap-6 text-xs font-bold text-muted-foreground md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-primary hover:text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "[ close ]" : "[ menu ]"}
          </button>
          <ThemeToggle />
        </div>
      </nav>
      {open ? (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-xs font-bold text-muted-foreground">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
