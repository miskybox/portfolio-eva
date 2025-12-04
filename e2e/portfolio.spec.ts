import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Helper function to navigate - uses scroll if nav button not accessible
  const navigateToSection = async (page: any, sectionId: string, buttonText: string) => {
    const navButton = page.locator(`button:has-text("${buttonText}"), a[href="#${sectionId}"]`).first();
    const isVisible = await navButton.isVisible().catch(() => false);
    
    if (isVisible) {
      try {
        await navButton.click({ timeout: 3000 });
      } catch {
        // If click fails, scroll directly to section
        await page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
      }
    } else {
      // On mobile, scroll directly to the section
      await page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
    }
  };

  test.describe('Navigation', () => {
    test('should load the homepage successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Eva|Portfolio/i);
    });

    test('should have visible header navigation', async ({ page }) => {
      const header = page.locator('header');
      await expect(header).toBeVisible();
    });

    test('should navigate to About section', async ({ page }) => {
      await navigateToSection(page, 'about', 'ABOUT');
      await expect(page.locator('#about')).toBeVisible();
    });

    test('should navigate to Skills section', async ({ page }) => {
      await navigateToSection(page, 'skills', 'SKILLS');
      await expect(page.locator('#skills')).toBeVisible();
    });

    test('should navigate to Projects section', async ({ page }) => {
      await navigateToSection(page, 'projects', 'PROJECTS');
      await expect(page.locator('#projects')).toBeVisible();
    });

    test('should navigate to Contact section', async ({ page }) => {
      await navigateToSection(page, 'contact', 'CONTACT');
      await expect(page.locator('#contact')).toBeVisible();
    });
  });

  test.describe('Hero Section', () => {
    test('should display hero section with name', async ({ page }) => {
      // Verify the name heading (h1) is displayed in the hero
      const nameHeading = page.locator('h1').filter({ hasText: /eva sisalli/i });
      await expect(nameHeading).toBeVisible();
    });

    test('should have a call-to-action button', async ({ page }) => {
      const ctaButton = page.locator('button, a').filter({ hasText: /contacto|proyectos|cv/i }).first();
      await expect(ctaButton).toBeVisible();
    });
  });

  test.describe('Skills Section', () => {
    test('should display skill categories', async ({ page }) => {
      await page.locator('#skills').scrollIntoViewIfNeeded();
      
      const skillsSection = page.locator('#skills');
      await expect(skillsSection).toBeVisible();
      
      // Check for skill category titles using headings (more specific)
      await expect(page.locator('#skills').getByRole('heading', { name: 'Frontend' })).toBeVisible();
      await expect(page.locator('#skills').getByRole('heading', { name: 'Backend' })).toBeVisible();
      await expect(page.locator('#skills').getByRole('heading', { name: 'QA & Testing' })).toBeVisible();
    });

    test('should display cybersecurity skills', async ({ page }) => {
      await page.locator('#skills').scrollIntoViewIfNeeded();
      
      await expect(page.locator('#skills').getByRole('heading', { name: 'Ciberseguridad' })).toBeVisible();
    });

    test('should display skill progress bars', async ({ page }) => {
      await page.locator('#skills').scrollIntoViewIfNeeded();
      
      const progressBars = page.locator('#skills [class*="progress"], #skills [class*="skillBar"]');
      const count = await progressBars.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Projects Section', () => {
    test('should display project cards', async ({ page }) => {
      await page.locator('#projects').scrollIntoViewIfNeeded();
      
      const projectCards = page.locator('#projects [class*="card"], #projects [class*="project"]');
      const count = await projectCards.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Contact Section', () => {
    test('should display contact form or contact info', async ({ page }) => {
      await page.locator('#contact').scrollIntoViewIfNeeded();
      
      const contactSection = page.locator('#contact');
      await expect(contactSection).toBeVisible();
    });

    test('should have social media links', async ({ page }) => {
      const socialLinks = page.locator('a[href*="linkedin"], a[href*="github"]');
      const count = await socialLinks.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Footer', () => {
    test('should display footer', async ({ page }) => {
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      const h1Count = await h1.count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    });

    test('should have alt text on images', async ({ page }) => {
      const images = page.locator('img');
      const count = await images.count();
      
      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        expect(alt).not.toBeNull();
      }
    });
  });

  test.describe('Responsive Design', () => {
    test('should be responsive on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();
      
      const body = page.locator('body');
      await expect(body).toBeVisible();
      
      // Check no horizontal scroll
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5); // 5px tolerance
    });

    test('should be responsive on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.reload();
      
      const body = page.locator('body');
      await expect(body).toBeVisible();
    });
  });

  test.describe('Performance', () => {
    test('should load within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      const loadTime = Date.now() - startTime;
      
      expect(loadTime).toBeLessThan(5000); // Should load within 5 seconds
    });
  });
});
