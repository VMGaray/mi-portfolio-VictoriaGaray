'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#070510',
      borderTop: '1px solid rgba(126,79,176,0.12)',
      padding: '48px 0 32px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        .footer-link { color: rgba(196,168,232,0.35); text-decoration: none; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.3s; }
        .footer-link:hover { color: #c4a8e8; }
        .footer-icon { color: rgba(196,168,232,0.3); transition: color 0.3s, transform 0.3s; display: inline-flex; }
        .footer-icon:hover { color: #c4a8e8; transform: translateY(-2px); }
        .footer-container { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
        .footer-grid { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 24px; margin-bottom: 32px; }
        .footer-nav { display: flex; gap: 32px; }
        .footer-social { display: flex; gap: 20px; justify-content: flex-end; align-items: center; }
        @media (max-width: 640px) {
          .footer-container { padding: 0 24px; }
          .footer-grid { grid-template-columns: minmax(0, 1fr); justify-items: center; text-align: center; }
          .footer-nav { flex-wrap: wrap; justify-content: center; gap: 12px 24px; }
          .footer-social { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-grid">

          {/* Logo */}
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 24,
              color: '#e8e0f5', letterSpacing: '0.08em',
            }}>
              VG<span style={{ color: '#7E4FB0' }}>.</span>
            </div>
            <div style={{ fontSize: 11, color: 'rgba(196,168,232,0.25)', letterSpacing: '0.1em', marginTop: 4 }}>
              Frontend Developer
            </div>
          </div>

          {/* Nav central */}
          <div className="footer-nav">
            {[
              { href: '#proyectos', label: 'Proyectos' },
              { href: '#sobre-mi', label: 'Sobre mí' },
              { href: '#contacto', label: 'Contacto' },
            ].map(n => (
              <a key={n.href} href={n.href} className="footer-link">{n.label}</a>
            ))}
          </div>

          {/* Social icons */}
          <div className="footer-social">
            <Link href="https://www.linkedin.com/in/victoria-mercedes-garay/" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </Link>
            <Link href="https://github.com/VMGaray" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
              <FaGithub size={18} />
            </Link>
            <Link href="mailto:victoriamegaray@gmail.com" className="footer-icon" aria-label="Email">
              <FaEnvelope size={18} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(126,79,176,0.08)', marginBottom: 24 }} />

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 11, color: 'rgba(196,168,232,0.2)', letterSpacing: '0.08em' }}>
            © {year} Victoria Garay. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 11, color: 'rgba(196,168,232,0.15)', letterSpacing: '0.08em' }}>
            Hecho con Next.js + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}