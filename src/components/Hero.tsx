'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const CHIPS = ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Supabase', 'n8n'];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const curRef = useRef<HTMLDivElement>(null);
  const curRingRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const curPosRef = useRef({ x: 300, y: 300 });
  const curRingPosRef = useRef({ x: 300, y: 300 });
  const animRef = useRef<number>(0);
  const [lettersVisible, setLettersVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setLettersVisible(true), 100);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0;

    type Particle = {
      x: number; y: number; z: number;
      vx: number; vy: number;
      size: number; opacity: number; pulse: number;
    };

    let particles: Particle[] = [];

    function resize() {
      W = canvas!.width = hero!.offsetWidth;
      H = canvas!.height = hero!.offsetHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const count = Math.floor(W * H / 10000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          z: Math.random() * 3 + 0.5,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += 0.018;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const px = p.x + (mx - W / 2) * 0.012 * p.z;
        const py = p.y + (my - H / 2) * 0.012 * p.z;
        const op = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(px, py, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,168,232,${op})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2x = p2.x + (mx - W / 2) * 0.012 * p2.z;
          const p2y = p2.y + (my - H / 2) * 0.012 * p2.z;
          const dx = px - p2x;
          const dy = py - p2y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2x, p2y);
            ctx.strokeStyle = `rgba(126,79,176,${(1 - dist / 90) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      // cursor lerp
      const cur = curRef.current;
      const ring = curRingRef.current;
      if (cur && ring) {
        curRingPosRef.current.x += (curPosRef.current.x - curRingPosRef.current.x) * 0.1;
        curRingPosRef.current.y += (curPosRef.current.y - curRingPosRef.current.y) * 0.1;
        cur.style.left = curPosRef.current.x + 'px';
        cur.style.top = curPosRef.current.y + 'px';
        ring.style.left = curRingPosRef.current.x + 'px';
        ring.style.top = curRingPosRef.current.y + 'px';
      }
      draw();
      animRef.current = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = heroRef.current!.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    mouseRef.current = { x: mx, y: my };
    curPosRef.current = { x: mx, y: my };

    const W = rect.width;
    const H = rect.height;
    const nx = (mx / W - 0.5) * 2;
    const ny = (my / H - 0.5) * 2;

    if (sceneRef.current) {
      sceneRef.current.style.transform =
        `perspective(1200px) rotateY(${nx * 3}deg) rotateX(${-ny * 2}deg)`;
    }

    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cx = cardRect.left - rect.left + cardRect.width / 2;
      const cy = cardRect.top - rect.top + cardRect.height / 2;
      const cnx = (mx - cx) / 100;
      const cny = (my - cy) / 100;
      cardRef.current.style.transform =
        `translateY(-50%) perspective(600px) rotateY(${cnx * 14}deg) rotateX(${-cny * 14}deg)`;
      const pctX = ((mx - (cardRect.left - rect.left)) / cardRect.width) * 100;
      const pctY = ((my - (cardRect.top - rect.top)) / cardRect.height) * 100;
      cardRef.current.style.setProperty('--mx', `${pctX}%`);
      cardRef.current.style.setProperty('--my', `${pctY}%`);
    }
  }

  function handleMouseLeave() {
    if (sceneRef.current)
      sceneRef.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    if (cardRef.current)
      cardRef.current.style.transform = 'translateY(-50%) perspective(600px) rotateY(0deg) rotateX(0deg)';
  }

  const name1 = 'VICTORIA';
  const name2 = 'GARAY';

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#0e0b1a',
        overflow: 'hidden',
        cursor: 'none',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;1,9..40,300&display=swap');

        .hero-letter {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          transform-style: preserve-3d;
        }
        .hero-letter:hover {
          transform: translateY(-8px) rotateX(20deg) scale(1.08) !important;
          color: #c4a8e8 !important;
        }
        .hero-chip {
          transition: all 0.3s ease;
          cursor: default;
        }
        .hero-chip:hover {
          border-color: rgba(196,168,232,0.6) !important;
          color: #e8e0f5 !important;
          background: rgba(126,79,176,0.15) !important;
          transform: translateY(-2px);
        }
        .hero-btn-primary {
          position: relative;
          overflow: hidden;
          transition: color 0.3s;
        }
        .hero-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #0e0b1a;
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.76,0,0.24,1);
          z-index: 0;
        }
        .hero-btn-primary:hover::after { transform: translateX(0); }
        .hero-btn-primary:hover { color: #c4a8e8 !important; }
        .hero-btn-primary span { position: relative; z-index: 1; }

        .hero-btn-ghost {
          transition: all 0.3s;
        }
        .hero-btn-ghost:hover {
          color: #e8e0f5 !important;
          border-color: rgba(196,168,232,0.5) !important;
        }

        .tilt-card-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(126,79,176,0.18), transparent 70%);
          border-radius: inherit;
          pointer-events: none;
        }

        .dot-pulse {
          animation: dotPulse 2s infinite;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(74,222,128,0.7); }
          50% { opacity: 0.4; box-shadow: none; }
        }

        .scroll-line-inner {
          animation: scrollAnim 2s ease-in-out infinite;
        }
        @keyframes scrollAnim {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Custom cursor */}
      <div
        ref={curRef}
        style={{
          position: 'absolute', width: 8, height: 8, background: '#c4a8e8',
          borderRadius: '50%', pointerEvents: 'none', transform: 'translate(-50%,-50%)',
          zIndex: 100, mixBlendMode: 'difference',
        }}
      />
      <div
        ref={curRingRef}
        style={{
          position: 'absolute', width: 36, height: 36,
          border: '1px solid rgba(196,168,232,0.35)', borderRadius: '50%',
          pointerEvents: 'none', transform: 'translate(-50%,-50%)', zIndex: 100,
          transition: 'width 0.2s, height 0.2s',
        }}
      />

      {/* Canvas partículas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Grid lines decorativas */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }}>
        <defs>
          <pattern id="vg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0 L0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vg-grid)" />
      </svg>

      {/* Glow de fondo */}
      <div style={{
        position: 'absolute', top: '40%', left: '25%', width: 500, height: 400,
        background: 'radial-gradient(ellipse, rgba(126,79,176,0.18) 0%, transparent 70%)',
        pointerEvents: 'none', transform: 'translate(-50%,-50%)',
      }} />

      {/* Año decorativo */}
      <div style={{
        position: 'absolute', bottom: 24, right: 48,
        fontFamily: "'Bebas Neue', sans-serif", fontSize: 100,
        color: 'rgba(126,79,176,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        2025
      </div>

      {/* Tilt card stats */}
      <div
        ref={cardRef}
        className="tilt-card-inner"
        style={{
          position: 'absolute', right: 60, top: '50%',
          transform: 'translateY(-50%)',
          width: 150, height: 190,
          background: 'rgba(126,79,176,0.06)',
          border: '1px solid rgba(126,79,176,0.18)',
          borderRadius: 6,
          zIndex: 5,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 16, overflow: 'hidden',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: 'rgba(196,168,232,0.18)', lineHeight: 1 }}>3+</div>
        <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(196,168,232,0.3)' }}>
          años<br />freelance
        </div>
      </div>

      {/* Escena principal */}
      <div
        ref={sceneRef}
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 56px',
          zIndex: 10,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.05s ease-out',
        }}
      >
        {/* Tag */}
        <div style={{
          fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#6b5c80', marginBottom: 20,
        }}>
          Frontend Developer · Freelance
        </div>

        {/* VICTORIA */}
        <div style={{ position: 'relative', lineHeight: 1, marginBottom: 2 }}>
          <div style={{
            position: 'absolute', fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(68px,10vw,112px)', color: 'transparent',
            WebkitTextStroke: '1px rgba(126,79,176,0.08)',
            top: 6, left: 6, pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap',
          }}>
            VICTORIA
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(68px,10vw,112px)',
            color: '#e8e0f5', lineHeight: 1, position: 'relative', whiteSpace: 'nowrap',
          }}>
            {name1.split('').map((l, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(40px) rotateX(-90deg)',
                  transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.05 + 0.2}s`,
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* GARAY */}
        <div style={{ position: 'relative', lineHeight: 1, marginBottom: 0 }}>
          <div style={{
            position: 'absolute', fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(68px,10vw,112px)', color: 'transparent',
            WebkitTextStroke: '1px rgba(126,79,176,0.08)',
            top: 6, left: 6, pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap',
          }}>
            GARAY
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(68px,10vw,112px)',
            color: '#7E4FB0', lineHeight: 1, position: 'relative', whiteSpace: 'nowrap',
          }}>
            {name2.split('').map((l, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(40px) rotateX(-90deg)',
                  transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${(i + name1.length) * 0.05 + 0.2}s`,
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Rol */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '18px 0 28px' }}>
          <div style={{ width: 40, height: 1, background: 'rgba(126,79,176,0.3)' }} />
          <div style={{
            fontSize: 'clamp(14px,1.8vw,17px)', color: 'rgba(196,168,232,0.5)',
            fontWeight: 300, letterSpacing: '0.04em',
          }}>
            Fullstack Developer · Frontend Specialist
          </div>
        </div>

        {/* Chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {CHIPS.map((chip, i) => (
            <div
              key={chip}
              className="hero-chip"
              style={{
                fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '5px 12px',
                border: '1px solid rgba(126,79,176,0.2)',
                color: 'rgba(196,168,232,0.4)',
                borderRadius: 2,
                opacity: lettersVisible ? 1 : 0,
                transform: lettersVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.5s ease ${i * 0.08 + 0.9}s`,
              }}
            >
              {chip}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <a
            href="#proyectos"
            className="hero-btn-primary"
            style={{
              fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '12px 28px', background: '#7E4FB0', color: '#e8e0f5',
              border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'none', display: 'inline-block',
            }}
          >
            <span>Ver proyectos</span>
          </a>
          <a
            href="#contacto"
            className="hero-btn-ghost"
            style={{
              fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '12px 28px', background: 'transparent',
              color: 'rgba(196,168,232,0.45)',
              border: '1px solid rgba(126,79,176,0.2)',
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'none', display: 'inline-block',
            }}
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Foto de perfil — lado derecho */}
      <div style={{
        position: 'absolute', right: 240, top: '50%', transform: 'translateY(-50%)',
        zIndex: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 160, height: 160, borderRadius: '50%', overflow: 'hidden',
          border: '2px solid rgba(126,79,176,0.3)',
          boxShadow: '0 0 40px rgba(126,79,176,0.2)',
          transition: 'box-shadow 0.3s, border-color 0.3s',
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 60px rgba(126,79,176,0.45)';
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(196,168,232,0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(126,79,176,0.2)';
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(126,79,176,0.3)';
          }}
        >
          <Image
            src="/images/foto perfil.jpg"
            alt="Victoria Garay"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Disponibilidad */}
      <div style={{
        position: 'absolute', right: 56, top: 40,
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 11, color: 'rgba(196,168,232,0.35)', letterSpacing: '0.1em',
        zIndex: 10,
      }}>
        <div
          className="dot-pulse"
          style={{
            width: 6, height: 6, borderRadius: '50%', background: '#4ade80',
          }}
        />
        Disponible
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 32, left: 56,
        display: 'flex', alignItems: 'center', gap: 12,
        fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(126,79,176,0.3)', zIndex: 10,
      }}>
        <div style={{ width: 32, height: 1, background: 'rgba(126,79,176,0.15)', position: 'relative', overflow: 'hidden' }}>
          <div
            className="scroll-line-inner"
            style={{ position: 'absolute', inset: 0, background: '#7E4FB0', transform: 'translateX(-100%)' }}
          />
        </div>
        Scroll
      </div>
    </section>
  );
}