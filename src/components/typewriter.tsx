"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type TypewriterProps = {
  phrases: readonly string[];
};

function subscribeToMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Typewriter({ phrases }: TypewriterProps) {
  const reduceMotion = useSyncExternalStore(subscribeToMotion, prefersReducedMotion, () => false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const phrase = phrases[index] ?? "";
  const shown = reduceMotion ? (phrases[0] ?? "") : text;

  useEffect(() => {
    if (reduceMotion) return;

    if (text.length < phrase.length) {
      const timeout = window.setTimeout(() => {
        setText(phrase.slice(0, text.length + 1));
      }, 70);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setText("");
      setIndex((current) => (current + 1) % phrases.length);
    }, 1800);
    return () => window.clearTimeout(timeout);
  }, [index, phrase, phrases.length, reduceMotion, text]);

  return (
    <span className="text-primary">
      {shown}
      <span className="cursor-blink" aria-hidden="true">
        ▋
      </span>
    </span>
  );
}
