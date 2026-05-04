'use client';

import { useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';

type Tech = { name: string; icon?: React.ElementType };
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: Tech[];
  githubUrl?: string;
  deployUrl?: string;
};

export default function Projects() {
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
      id="proyectos"
      ref={sectionRef}
      style={{
        background: '#0e0b1a',
        padding: '100px 0',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .vg-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vg-reveal.vg-visible { opacity: 1; transform: translateY(0); }
        .proj-card {
          position: relative;
          background: rgba(126,79,176,0.04);
          border: 1px solid rgba(126,79,176,0.12);
          border-radius: 8px; overflow: hidden;
          transition: border-color 0.4s;
        }
        .proj-card:hover { border-color: rgba(196,168,232,0.2); }
        .proj-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at var(--px,50%) var(--py,50%), rgba(126,79,176,0.08), transparent 60%);
          pointer-events: none; opacity: 0; transition: opacity 0.3s;
        }
        .proj-card:hover::before { opacity: 1; }
        .proj-tag {
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 4px 10px; border: 1px solid rgba(126,79,176,0.2);
          color: rgba(196,168,232,0.4); border-radius: 2px; display: inline-flex;
          align-items: center; gap: 5px; transition: all 0.3s;
        }
        .proj-tag:hover { border-color: rgba(196,168,232,0.45); color: #c4a8e8; }
        .proj-link {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 10px 20px; border: 1px solid rgba(126,79,176,0.3);
          color: rgba(196,168,232,0.6); text-decoration: none; border-radius: 2px;
          transition: all 0.3s; display: inline-block;
        }
        .proj-link:hover { background: rgba(126,79,176,0.15); border-color: rgba(196,168,232,0.5); color: #e8e0f5; }
        .proj-link-primary {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 10px 20px; background: #7E4FB0; color: #e8e0f5;
          text-decoration: none; border-radius: 2px; border: 1px solid #7E4FB0;
          position: relative; overflow: hidden; display: inline-block; transition: color 0.3s;
        }
        .proj-link-primary::after {
          content: ''; position: absolute; inset: 0; background: #0e0b1a;
          transform: translateX(-101%); transition: transform 0.3s cubic-bezier(0.76,0,0.24,1); z-index: 0;
        }
        .proj-link-primary:hover::after { transform: translateX(0); }
        .proj-link-primary:hover { color: #c4a8e8; }
        .proj-link-primary span { position: relative; z-index: 1; }
      `}</style>

      <div style={{
        position: 'absolute', top: '20%', right: '-5%', width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(126,79,176,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div className="vg-reveal" style={{ marginBottom: 72 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b5c80', marginBottom: 12 }}>
            04 / Proyectos
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(44px,6vw,72px)', color: '#e8e0f5', lineHeight: 1 }}>
            Mi trabajo<span style={{ color: '#7E4FB0' }}>.</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {(projectsData as Project[]).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current!;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--px', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--py', `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  const hasLive = project.deployUrl && project.deployUrl !== '';
  const hasRepo = project.githubUrl && project.githubUrl !== '#';

  return (
    <div
      ref={cardRef}
      className="proj-card vg-reveal"
      onMouseMove={onMove}
      style={{ transitionDelay: `${index * 0.08}s`, padding: '36px 40px' }}
    >
      <div style={{
        position: 'absolute', top: 24, right: 32,
        fontFamily: "'Bebas Neue', sans-serif", fontSize: 64,
        color: 'rgba(126,79,176,0.06)', lineHeight: 1, pointerEvents: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(20px,2.5vw,30px)',
        color: '#e8e0f5', marginBottom: 10, lineHeight: 1.1,
      }}>
        {project.title}
      </h3>

      <p style={{
        fontSize: 14, color: 'rgba(196,168,232,0.5)',
        lineHeight: 1.7, marginBottom: 20, fontWeight: 300, maxWidth: 680,
      }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {project.technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <span key={tech.name} className="proj-tag">
              {Icon && <Icon style={{ fontSize: 11 }} />}
              {tech.name}
            </span>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {hasLive && (
          <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="proj-link-primary">
            <span>Ver proyecto</span>
          </a>
        )}
        {hasRepo && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}