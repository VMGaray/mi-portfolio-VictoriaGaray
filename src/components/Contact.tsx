'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const LINKS = [
  {
    label: 'LinkedIn',
    sublabel: 'victoria-mercedes-garay',
    href: 'https://www.linkedin.com/in/victoria-mercedes-garay/',
    Icon: FaLinkedin,
    accent: '#0a66c2',
  },
  {
    label: 'GitHub',
    sublabel: 'VMGaray',
    href: 'https://github.com/VMGaray',
    Icon: FaGithub,
    accent: '#c4a8e8',
  },
  {
    label: 'Email',
    sublabel: 'victoriamegaray@gmail.com',
    href: 'mailto:victoriamegaray@gmail.com',
    Icon: FaEnvelope,
    accent: '#7E4FB0',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vg-visible'); }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.vg-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      style={{
        background: '#0e0b1a',
        padding: '120px 0',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .vg-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vg-reveal.vg-visible { opacity: 1; transform: translateY(0); }
        .contact-link {
          display: flex; align-items: center; gap: 20;
          padding: 24px 32px;
          background: rgba(126,79,176,0.04);
          border: 1px solid rgba(126,79,176,0.12);
          border-radius: 6px; text-decoration: none;
          transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .contact-link::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: var(--accent, #7E4FB0);
          transform: scaleY(0); transition: transform 0.3s ease; transform-origin: bottom;
        }
        .contact-link:hover { border-color: rgba(196,168,232,0.2); transform: translateX(4px); background: rgba(126,79,176,0.08); }
        .contact-link:hover::before { transform: scaleY(1); }
      `}</style>

      {/* Glow central */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%', width: 600, height: 500,
        background: 'radial-gradient(ellipse, rgba(126,79,176,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', transform: 'translate(-50%,-50%)',
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 40px' }}>
        {/* Título */}
        <div className="vg-reveal" style={{ marginBottom: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b5c80', marginBottom: 16 }}>
            07 / Contacto
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px,8vw,96px)',
            color: '#e8e0f5', lineHeight: 1,
          }}>
            ¿Hablamos<span style={{ color: '#7E4FB0' }}>?</span>
          </div>
        </div>

        <p className="vg-reveal" style={{
          fontSize: 16, color: 'rgba(196,168,232,0.45)', lineHeight: 1.8,
          textAlign: 'center', marginBottom: 56, fontWeight: 300,
          transitionDelay: '0.1s',
        }}>
          Estoy buscando nuevas oportunidades. Si mi perfil te interesa o querés
          hablar de un proyecto, escribime.
        </p>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {LINKS.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-link vg-reveal"
              style={{
                '--accent': l.accent,
                transitionDelay: `${0.15 + i * 0.1}s`,
                gap: 20,
              } as React.CSSProperties}
            >
              <l.Icon style={{ fontSize: 22, color: l.accent, flexShrink: 0 }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e8e0f5', marginBottom: 2 }}>
                  {l.label}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(196,168,232,0.35)', fontWeight: 300, overflowWrap: 'anywhere' }}>
                  {l.sublabel.split('@').map((part, j) => (
                    <span key={j}>{j > 0 && <>@<wbr /></>}{part}</span>
                  ))}
                </div>
              </div>
              <svg style={{ marginLeft: 'auto', color: 'rgba(196,168,232,0.2)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}