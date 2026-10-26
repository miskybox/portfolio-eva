export function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2 text-primary"
      aria-label="Eva Sisalli home"
    >
      <svg
        viewBox="0 0 64 64"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={5}
        aria-hidden="true"
      >
        <rect x="2.5" y="2.5" width="59" height="59" rx="6" strokeWidth={3} />
        <path d="M14 20l10 12-10 12" strokeLinecap="square" />
        <path d="M30 44h20" />
      </svg>
      <span className="font-display text-sm tracking-widest text-foreground">
        ES<span className="text-primary">.</span>
      </span>
    </a>
  );
}
