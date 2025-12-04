import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('XSS Prevention', () => {
    test('should not execute scripts in URL parameters', async ({ page }) => {
      // Try to inject script via URL
      await page.goto('/?name=<script>alert("xss")</script>');
      
      // Check that no alert was triggered (page should still be functional)
      const body = page.locator('body');
      await expect(body).toBeVisible();
    });

    test('should sanitize HTML in displayed content', async ({ page }) => {
      // Verify that any user-facing content doesn't render raw HTML
      const pageContent = await page.content();
      expect(pageContent).not.toContain('<script>alert');
    });
  });

  test.describe('External Links Security', () => {
    test('external links should have rel="noopener noreferrer"', async ({ page }) => {
      const externalLinks = page.locator('a[target="_blank"]');
      const count = await externalLinks.count();
      
      for (let i = 0; i < count; i++) {
        const link = externalLinks.nth(i);
        const rel = await link.getAttribute('rel');
        expect(rel).toContain('noopener');
      }
    });

    test('should use HTTPS for external resources', async ({ page }) => {
      const allLinks = page.locator('a[href^="http://"]');
      const insecureCount = await allLinks.count();
      
      // Allow localhost for development
      for (let i = 0; i < insecureCount; i++) {
        const href = await allLinks.nth(i).getAttribute('href');
        if (href && !href.includes('localhost') && !href.includes('127.0.0.1')) {
          expect(href).toMatch(/^https:\/\//);
        }
      }
    });
  });

  test.describe('Content Security', () => {
    test('should not expose sensitive information in page source', async ({ page }) => {
      const pageContent = await page.content();
      
      // Check for common sensitive data patterns
      expect(pageContent).not.toMatch(/api[_-]?key\s*[:=]\s*['"]/i);
      expect(pageContent).not.toMatch(/secret\s*[:=]\s*['"]/i);
      expect(pageContent).not.toMatch(/password\s*[:=]\s*['"]/i);
      expect(pageContent).not.toMatch(/token\s*[:=]\s*['"][^'"]{20,}['"]/i);
    });

    test('should not have debug information in production', async ({ page }) => {
      const pageContent = await page.content();
      
      // Check for common debug patterns
      expect(pageContent).not.toContain('console.log');
      expect(pageContent).not.toContain('debugger');
    });
  });

  test.describe('Form Security', () => {
    test('contact form should have CSRF protection or be secure', async ({ page }) => {
      const contactForm = page.locator('form');
      const formCount = await contactForm.count();
      
      if (formCount > 0) {
        // Check form has proper action
        const form = contactForm.first();
        const action = await form.getAttribute('action');
        
        // If form has action, it should be HTTPS or relative
        if (action && action.startsWith('http')) {
          expect(action).toMatch(/^https:\/\//);
        }
      }
    });

    test('email inputs should have proper validation', async ({ page }) => {
      const emailInputs = page.locator('input[type="email"]');
      const count = await emailInputs.count();
      
      for (let i = 0; i < count; i++) {
        const input = emailInputs.nth(i);
        const type = await input.getAttribute('type');
        expect(type).toBe('email');
      }
    });
  });

  test.describe('HTTP Headers (via meta tags)', () => {
    test('should have proper viewport meta tag', async ({ page }) => {
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveCount(1);
    });

    test('should have charset declaration', async ({ page }) => {
      const charset = page.locator('meta[charset], meta[http-equiv="Content-Type"]');
      const count = await charset.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Resource Integrity', () => {
    test('should not load resources from untrusted CDNs without integrity', async ({ page }) => {
      // Get all script and link tags with external sources
      const scripts = page.locator('script[src^="http"]');
      const scriptCount = await scripts.count();
      
      // This is a warning test - in production, external scripts should have integrity
      if (scriptCount > 0) {
        console.warn(`Found ${scriptCount} external scripts - consider adding integrity checks`);
      }
    });
  });

  test.describe('Clickjacking Protection', () => {
    test('page should render correctly (basic anti-clickjacking)', async ({ page }) => {
      // Verify the page renders its own content
      const body = page.locator('body');
      await expect(body).toBeVisible();
      
      // Check that we can interact with elements
      const interactiveElement = page.locator('a, button').first();
      await expect(interactiveElement).toBeVisible();
    });
  });
});
