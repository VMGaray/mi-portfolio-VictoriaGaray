'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const IMAGES: (string | { src: string; alt: string })[] = [
  '/images/heroes landing.jpg', '/images/heroes login.jpg',
  '/images/heroes chatBot.jpg', '/images/heroes cuartel.jpg',
  '/images/heroes metrivas.jpg', '/images/heroes reportes.jpg',
  '/images/vgb-store-1.jpg', '/images/vgb-store-2.jpg',
  '/images/vgb-store-3.jpg', '/images/vgb-store-4.jpg',
  '/images/nota-prensa.jpeg', '/images/nota-prensa1.jpeg',
  '/images/nota-prensa2.jpeg', '/images/n8n.jpeg',
  '/images/ecommers.jpeg', '/images/ecommers1.jpeg',
  '/images/ecommers2.jpeg', '/images/sistema de turnos.jpg',
  '/images/app martins.jpeg', '/images/app martins login.jpeg',
  { src: '/images/timbre-1.png', alt: 'Timbre QR: formulario del visitante' },
  { src: '/images/timbre-2.png', alt: 'Timbre QR: esperando respuesta' },
  { src: '/images/timbre-3.png', alt: 'Timbre QR: respuesta recibida' },
];

export default function ImageGalleryCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const doubled = [...IMAGES, ...IMAGES];

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
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
      }}
    >
      <style>{`
        .vg-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vg-reveal.vg-visible { opacity: 1; transform: translateY(0); }
        @keyframes gallery-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .gallery-track { animation: gallery-scroll 70s linear infinite; display: flex; width: fit-content; }
        .gallery-track:hover { animation-play-state: paused; }
        .gallery-item {
          position: relative; flex-shrink: 0; width: 280px; height: 180px;
          border-radius: 6px; overflow: hidden; margin: 0 8px;
          border: 1px solid rgba(126,79,176,0.12);
          transition: border-color 0.3s, transform 0.3s;
        }
        .gallery-item:hover { border-color: rgba(196,168,232,0.25); transform: scale(1.02); }
        .gallery-item::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(14,11,26,0.4), transparent);
          pointer-events: none;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px', marginBottom: 48 }}>
        <div className="vg-reveal">
          <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b5c80', marginBottom: 12 }}>
            06 / Galería
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(44px,6vw,72px)', color: '#e8e0f5', lineHeight: 1 }}>
            Capturas<span style={{ color: '#7E4FB0' }}>.</span>
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: 'linear-gradient(to right, #0a0814, transparent)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: 'linear-gradient(to left, #0a0814, transparent)', pointerEvents: 'none',
        }} />
        <div style={{ overflow: 'hidden' }}>
          <div className="gallery-track">
            {doubled.map((img, i) => {
              const src = typeof img === 'string' ? img : img.src;
              const alt = typeof img === 'string' ? `Proyecto ${i + 1}` : img.alt;
              return (
                <div key={i} className="gallery-item">
                  <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} sizes="280px" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}