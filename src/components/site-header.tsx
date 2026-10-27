"use client";

import { useState } from "react";
import { nav } from "@/content/portfolio";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6">
        <Logo />
        <div className="hidden gap-5 text-sm font-bold text-muted-foreground lg:flex xl:gap-6">
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
            className="rounded border border-border px-3 py-1 text-sm text-muted-foreground transition hover:border-primary hover:text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "[ close ]" : "[ menu ]"}
          </button>
          <ThemeToggle />
        </div>
      </nav>
      {open ? (
        <div id="mobile-nav" className="border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm font-bold text-muted-foreground sm:px-6">
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
