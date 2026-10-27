import { describe, expect, it } from "vitest";
import { contact, nav, projects } from "@/content/portfolio";

const httpsUrl = /^https:\/\//;

describe("portfolio content integrity", () => {
  it("keeps contact links on https (or mailto)", () => {
    expect(contact.email).toContain("@");
    expect(contact.github).toMatch(httpsUrl);
    expect(contact.linkedin).toMatch(httpsUrl);
  });

  it("only uses in-page anchors for navigation", () => {
    for (const item of nav) {
      expect(item.href.startsWith("#")).toBe(true);
      expect(item.href).not.toContain("javascript:");
    }
  });

  it("uses https for project links and never javascript: URLs", () => {
    for (const project of projects) {
      if ("repo" in project && project.repo) {
        expect(project.repo).toMatch(httpsUrl);
      }
      if ("live" in project && project.live) {
        expect(project.live).toMatch(httpsUrl);
      }
    }
  });

  it("marks CanchaDT demo as under development", () => {
    const cancha = projects.find((project) => project.name === "cancha-dt");
    expect(cancha).toBeDefined();
    expect(cancha?.description.toLowerCase()).toContain("under development");
    expect("demo" in (cancha ?? {}) && cancha?.demo).toBe(true);
  });

  it("gives every project a clickable preview image", () => {
    for (const project of projects) {
      expect("image" in project && project.image).toMatch(/^\/projects\//);
      expect("imageAlt" in project && project.imageAlt).toBeTruthy();
    }
  });
});
