import React, { useEffect, useRef } from 'react';
import './Hero.css';

// ── Replace this URL with your own photo ──
const PHOTO_URL =
  'Images/Deepak_PortImg.jpg';

const Hero = () => {
  const canvasRef = useRef(null);

  /* Particle canvas effect */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 55 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      a:  Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${p.a})`;
        ctx.fill();
      });

      /* Connection lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Grid lines */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__container">
        {/* Photo side */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-ring">
            <img
              src={PHOTO_URL}
              alt="Developer portrait"
              className="hero__photo"
            />
          </div>
          <div className="hero__photo-glow" />
        </div>

        {/* Text side */}
        <div className="hero__text">
          <span className="section-subtitle">Hello World, I'm</span>

          <h1 className="hero__name">
            <span className="hero__name-accent">Deepak Gupta</span>
          </h1>

          <div className="hero__designation">
            <span className="hero__designation-prefix"> </span>
            Software Developer
          </div>

          <p className="hero__tagline">
            Crafting scalable digital experiences with clean code &amp; bold ideas.
          </p>

          <div className="hero__cta-row">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Projects
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Contact Me
            </a>
          </div>

          {/* Tech stack chips */}
          <div className="hero__stack">
            {['React JS', 'Angular', 'C#', 'ASP.NET', 'JavaScript', 'TypeScript', 'JQuery','SQL', 'MySQL'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
