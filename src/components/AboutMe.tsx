'use client';

import { useEffect, useRef } from 'react';

const SOFT_SKILLS = [
  'Trabajo en Equipo', 'Proactividad', 'Curiosidad',
  'Resolución de Problemas', 'Aprendizaje Continuo',
  'Comunicación Efectiva', 'Adaptabilidad', 'Gestión del Tiempo',
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('vg-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.vg-reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.transform = `perspective(1000px) rotateY(${nx * 4}deg) rotateX(${-ny * 4}deg)`;
    card.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  function handleMouseLeave() {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  }

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      style={{
        background: '#0e0b1a',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');
        .vg-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vg-reveal.vg-visible { opacity: 1; transform: translateY(0); }
        .vg-reveal-left { opacity: 0; transform: translateX(-40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vg-reveal-left.vg-visible { opacity: 1; transform: translateX(0); }
        .soft-chip {
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 6px 14px; border: 1px solid rgba(126,79,176,0.2);
          color: rgba(196,168,232,0.5); border-radius: 2px;
          transition: all 0.3s; cursor: default; display: inline-block;
        }
        .soft-chip:hover {
          border-color: rgba(196,168,232,0.5); color: #e8e0f5;
          background: rgba(126,79,176,0.12); transform: translateY(-2px);
        }
        .about-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at var(--glow-x,50%) var(--glow-y,50%), rgba(126,79,176,0.1), transparent 60%);
          border-radius: inherit; pointer-events: none;
        }
      `}</style>

      {/* Glow de fondo */}
      <div style={{
        position: 'absolute', top: '50%', right: '-10%', width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(126,79,176,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', transform: 'translateY(-50%)',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 40px' }}>

        {/* Título */}
        <div className="vg-reveal" style={{ marginBottom: 60, transitionDelay: '0s' }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#6b5c80', marginBottom: 12,
          }}>
            02 / Sobre mí
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(44px,6vw,72px)',
            color: '#e8e0f5', lineHeight: 1,
          }}>
            Quién soy<span style={{ color: '#7E4FB0' }}>.</span>
          </div>
        </div>

        {/* Card principal */}
        <div
          ref={cardRef}
          className="about-card vg-reveal"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            background: 'rgba(126,79,176,0.05)',
            border: '1px solid rgba(126,79,176,0.15)',
            borderRadius: 8,
            padding: '48px',
            transition: 'transform 0.1s ease-out',
            transitionDelay: '0.1s',
          }}
        >
          {/* Número decorativo */}
          <div style={{
            position: 'absolute', top: 24, right: 32,
            fontFamily: "'Bebas Neue', sans-serif", fontSize: 80,
            color: 'rgba(126,79,176,0.06)', lineHeight: 1, pointerEvents: 'none',
          }}>VG</div>

          <p style={{
            fontSize: 'clamp(15px,1.6vw,17px)', color: 'rgba(196,168,232,0.65)',
            lineHeight: 1.8, marginBottom: 20, fontWeight: 300,
          }}>
            Soy una persona{' '}
            <span style={{ color: '#c4a8e8', fontWeight: 400 }}>
              curiosa, proactiva y con muchas ganas de seguir creciendo
            </span>{' '}
            en el mundo IT. Disfruto trabajar en equipo, aprender nuevas tecnologías
            y transformar ideas en productos reales.
          </p>
          <p style={{
            fontSize: 'clamp(15px,1.6vw,17px)', color: 'rgba(196,168,232,0.65)',
            lineHeight: 1.8, marginBottom: 36, fontWeight: 300,
          }}>
            Fullstack Developer con{' '}
            <span style={{ color: '#c4a8e8', fontWeight: 400 }}>foco en el Frontend</span>.
            Mi pasión es crear soluciones accesibles, funcionales y con buen diseño.
            Actualmente{' '}
            <span style={{
              color: '#7E4FB0', fontWeight: 400,
              borderBottom: '1px solid rgba(126,79,176,0.4)',
            }}>
              #OpenToWork
            </span>{' '}
            — buscando aplicar mis conocimientos y seguir creciendo junto a un equipo.
          </p>

          {/* Divider */}
          <div style={{ width: '100%', height: 1, background: 'rgba(126,79,176,0.12)', marginBottom: 32 }} />

          {/* Habilidades blandas */}
          <div style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#6b5c80', marginBottom: 16,
          }}>
            Habilidades blandas
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {SOFT_SKILLS.map((s, i) => (
              <span
                key={s}
                className="soft-chip"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}