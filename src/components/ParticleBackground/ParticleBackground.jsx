
import React, { useEffect, useRef } from 'react';
import styles from './ParticleBackground.module.css';

// Factory function to create particle objects (avoids class 'this' in functional component)
const createParticle = (canvasWidth, canvasHeight) => ({
  x: Math.random() * canvasWidth,
  y: Math.random() * canvasHeight,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5,
  size: Math.random() * 2 + 0.5,
  opacity: Math.random() * 0.5 + 0.2,
  hueOffset: Math.random() * 60
});

const updateParticle = (particle, canvasWidth, canvasHeight) => {
  particle.x += particle.vx;
  particle.y += particle.vy;

  if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1;
  if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1;

  particle.opacity += (Math.random() - 0.5) * 0.02;
  particle.opacity = Math.max(0.1, Math.min(0.7, particle.opacity));
};

const drawParticle = (ctx, particle, themeColors) => {
  const hue = themeColors.hueBase + particle.hueOffset;
  ctx.globalAlpha = particle.opacity;
  ctx.fillStyle = `hsl(${hue}, 100%, ${themeColors.particleLightness}%)`;
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fill();
};

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Get theme-based colors
    const getThemeColors = () => {
      const isLight = document.documentElement.classList.contains('light');
      return {
        hueBase: isLight ? 220 : 300,
        hueRange: 60,
        lineColor: isLight ? '#2563eb' : '#ff0080',
        particleLightness: isLight ? 40 : 60
      };
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particles = [];
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas.width, canvas.height));
    }

    // Animation loop
    const animate = () => {
      const themeColors = getThemeColors();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        updateParticle(particle, canvas.width, canvas.height);
        drawParticle(ctx, particle, themeColors);
      }

      // Draw connections between nearby particles
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = themeColors.lineColor;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.particleCanvas}
    />
  );
};

export default ParticleBackground;
