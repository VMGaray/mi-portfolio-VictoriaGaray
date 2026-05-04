'use client';

import { useEffect, useRef } from 'react';

const VIDEOS = [
  {
    id: 1,
    title: 'Impacto Notas de Prensa',
    subtitle: 'ICC Group',
    description: 'Sistema automatizado de análisis de medios con IA',
    videoUrl: '/images/20251203-impacto-notas-prensa.vercel.app-iphone8.webm',
    projectLink: 'https://impacto-notas-prensa.vercel.app/',
  },
  {
    id: 2,
    title: 'Magnolia Joyas',
    subtitle: 'E-commerce',
    description: 'Plataforma full-stack para joyería online',
    videoUrl: '/images/20251203-ecommers1.webm',
    projectLink: 'https://github.com/VMGaray/magnolia_joyas.git',
  },
  {
    id: 3,
    title: 'Martins Perforaciones',
    subtitle: 'Web & PWA',
    description: 'Landing Page y PWA para empresa de perforaciones de agua en Calamuchita',
    videoUrl: '/images/martins perforaciones.webm',
    projectLink: 'https://martins-perforaciones-app.vercel.app/',
  },
];

export default function ProjectVideos() {
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
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .vg-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vg-reveal.vg-visible { opacity: 1; transform: translateY(0); }
        .vid-card {
          background: rgba(126,79,176,0.04);
          border: 1px solid rgba(126,79,176,0.12);
          border-radius: 8px; overflow: hidden;
          transition: border-color 0.4s, transform 0.3s;
        }
        .vid-card:hover { border-color: rgba(196,168,232,0.2); transform: translateY(-4px); }
        .vid-btn {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 9px 20px; border: 1px solid rgba(126,79,176,0.3);
          color: rgba(196,168,232,0.6); text-decoration: none; border-radius: 2px;
          transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px;
        }
        .vid-btn:hover { background: rgba(126,79,176,0.15); border-color: rgba(196,168,232,0.5); color: #e8e0f5; }
      `}</style>

      <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400,
        background: 'radial-gradient(ellipse, rgba(126,79,176,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div className="vg-reveal" style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b5c80', marginBottom: 12 }}>
            05 / En acción
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(44px,6vw,72px)', color: '#e8e0f5', lineHeight: 1 }}>
            Demo en vivo<span style={{ color: '#7E4FB0' }}>.</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {VIDEOS.map((video, i) => (
            <div
              key={video.id}
              className="vid-card vg-reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Video */}
              <div style={{ position: 'relative', aspectRatio: '16/9', background: '#050508', overflow: 'hidden' }}>
                <video
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  controls
                  preload="metadata"
                >
                  <source src={video.videoUrl} type="video/webm" />
                </video>
              </div>

              {/* Info */}
              <div style={{ padding: '24px 28px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7E4FB0', marginBottom: 6 }}>
                  {video.subtitle}
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif", fontSize: 22,
                  color: '#e8e0f5', marginBottom: 8, lineHeight: 1.1,
                }}>
                  {video.title}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(196,168,232,0.45)', lineHeight: 1.6, marginBottom: 20, fontWeight: 300 }}>
                  {video.description}
                </p>
                <a href={video.projectLink} target="_blank" rel="noopener noreferrer" className="vid-btn">
                  Ver proyecto
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}