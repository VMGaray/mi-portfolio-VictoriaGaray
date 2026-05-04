'use client';

import { useEffect, useRef } from 'react';
import {
  FaReact, FaBootstrap, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiRedux, SiPostgresql,
  SiExpress, SiTypescript, SiN8N,
} from 'react-icons/si';

const SKILLS = [
  { name: 'JavaScript',   Icon: FaJs,          accent: '#f7df1e' },
  { name: 'TypeScript',   Icon: SiTypescript,  accent: '#3178c6' },
  { name: 'React',        Icon: FaReact,       accent: '#61dafb' },
  { name: 'Next.js',      Icon: SiNextdotjs,   accent: '#e8e0f5' },
  { name: 'Redux',        Icon: SiRedux,       accent: '#764abc' },
  { name: 'Node.js',      Icon: FaNodeJs,      accent: '#339933' },
  { name: 'Express',      Icon: SiExpress,     accent: '#c4a8e8' },
  { name: 'n8n',          Icon: SiN8N,         accent: '#ea4b71' },
  { name: 'PostgreSQL',   Icon: SiPostgresql,  accent: '#336791' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, accent: '#38bdf8' },
  { name: 'Bootstrap',    Icon: FaBootstrap,   accent: '#7952b3' },
  { name: 'HTML5',        Icon: FaHtml5,       accent: '#e34f26' },
  { name: 'CSS3',         Icon: FaCss3Alt,     accent: '#1572b6' },
  { name: 'Git',          Icon: FaGitAlt,      accent: '#f05032' },
];

function SkillCard({ name, Icon, accent, delay }: {
  name: string; Icon: React.ElementType; accent: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.transform = `perspective(600px) rotateY(${nx * 12}deg) rotateX(${-ny * 12}deg) translateZ(10px)`;
    el.style.setProperty('--ax', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--ay', `${((e.clientY - r.top) / r.height) * 100}%`);
    el.style.setProperty('--accent', accent + '22');
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = 'perspective(600px) rotateY(0) rotateX(0) translateZ(0)';
  }

  return (
    <div
      ref={ref}
      className="skill-card vg-reveal"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transitionDelay: `${delay}s`,
        position: 'relative',
        background: 'rgba(126,79,176,0.05)',
        border: '1px solid rgba(126,79,176,0.12)',
        borderRadius: 6,
        padding: '28px 16px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        cursor: 'default',
        transition: 'transform 0.1s ease-out, border-color 0.3s, background 0.3s',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        background: `radial-gradient(circle at var(--ax,50%) var(--ay,50%), var(--accent, transparent), transparent 70%)`,
        pointerEvents: 'none',
      }} />
      <Icon style={{ fontSize: 40, color: accent, flexShrink: 0 }} />
      <span style={{
        fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'rgba(196,168,232,0.45)', textAlign: 'center',
      }}>
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vg-visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.vg-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#0a0814',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        .vg-reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16,1,0.3,1); }
        .vg-reveal.vg-visible { opacity: 1; transform: translateY(0); }
        .skill-card:hover { border-color: rgba(196,168,232,0.25) !important; background: rgba(126,79,176,0.1) !important; }
      `}</style>

      <div style={{
        position: 'absolute', top: '30%', left: '-5%', width: 400, height: 400,
        background: 'radial-gradient(ellipse, rgba(126,79,176,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px' }}>
        <div className="vg-reveal" style={{ marginBottom: 60 }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#6b5c80', marginBottom: 12,
          }}>
            03 / Tecnologías
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(44px,6vw,72px)',
            color: '#e8e0f5', lineHeight: 1,
          }}>
            Mi stack<span style={{ color: '#7E4FB0' }}>.</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 12,
        }}>
          {SKILLS.map((s, i) => (
            <SkillCard key={s.name} {...s} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}