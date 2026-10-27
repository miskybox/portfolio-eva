import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("portfolio security & accessibility", () => {
  test("serves security headers", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();

    const headers = response?.headers() ?? {};
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["x-powered-by"]).toBeUndefined();
  });

  test("keeps external links safe and present", async ({ page }) => {
    await page.goto("/");

    const external = page.locator('a[target="_blank"]');
    const count = await external.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i += 1) {
      const link = external.nth(i);
      const rel = (await link.getAttribute("rel")) ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
      const href = (await link.getAttribute("href")) ?? "";
      expect(href.startsWith("https://")).toBeTruthy();
    }
  });

  test("exposes landmarks, skip link and brand", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("EVA SISALLI");
    await expect(page.getByRole("link", { name: /ESG/i })).toContainText("ESG");

    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await skip.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("has no serious axe accessibility violations on the homepage", async ({
    page,
  }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const serious = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious",
    );

    expect(
      serious,
      serious.map((item) => `${item.id}: ${item.help}`).join("\n"),
    ).toEqual([]);
  });

  test("shows expected project cards and demo link", async ({ page }) => {
    await page.goto("/#projects");
    await expect(page.getByRole("heading", { name: "cancha-dt" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "forum-viajeros" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "playwright-qa-tests" })).toBeVisible();
    await expect(page.getByRole("link", { name: "[ demo ]" })).toHaveAttribute(
      "href",
      "https://dev-futbol-total.miskybox.workers.dev/",
    );
    await expect(page.getByText("urdimbre")).toHaveCount(0);
  });
});
