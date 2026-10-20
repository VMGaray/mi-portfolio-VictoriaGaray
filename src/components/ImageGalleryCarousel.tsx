'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '../data/galleryData';
import GalleryLightbox from './GalleryLightbox';

export default function ImageGalleryCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [touchPaused, setTouchPaused] = useState(false);
  // El array se duplica para el loop infinito; la segunda copia es solo visual
  const copies = [0, 1];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vg-visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.vg-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  function openLightbox(index: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setOpenIndex(index);
  }

  function closeLightbox() {
    setOpenIndex(null);
    triggerRef.current?.focus({ preventScroll: true });
  }

  // Pausa al tocar en pantallas táctiles (en desktop lo hace el :hover)
  function onPointerDown(e: React.PointerEvent) {
    if (e.pointerType === 'mouse') return;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setTouchPaused(true);
  }

  function onPointerUp(e: React.PointerEvent) {
    if (e.pointerType === 'mouse') return;
    resumeTimer.current = setTimeout(() => setTouchPaused(false), 2000);
  }

  const paused = touchPaused || openIndex !== null;

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
        .gallery-viewport { overflow: hidden; }
        .gallery-track { animation: gallery-scroll 70s linear infinite; display: flex; width: fit-content; }
        .gallery-track:hover, .gallery-track.is-paused, .gallery-track:has(:focus-visible) { animation-play-state: paused; }
        .gallery-item {
          position: relative; flex-shrink: 0; width: 280px; height: 180px;
          border-radius: 6px; overflow: hidden; margin: 0 8px; padding: 0;
          border: 1px solid rgba(126,79,176,0.12); background: #0e0b1a;
          cursor: zoom-in; display: block;
          transition: border-color 0.3s, transform 0.3s;
        }
        .gallery-item:hover { border-color: rgba(196,168,232,0.25); transform: scale(1.02); }
        .gallery-item:focus-visible { outline: 2px solid #c4a8e8; outline-offset: 2px; }
        .gallery-item::after {
          content: ''; position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(to top, rgba(14,11,26,0.4), transparent);
          pointer-events: none;
        }
        .gallery-blur {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          filter: blur(14px) brightness(0.45); transform: scale(1.2);
        }
        .gallery-blur::after { content: ''; position: absolute; inset: 0; background: rgba(10,8,20,0.35); }
        .gallery-label {
          position: absolute; left: 8px; bottom: 8px; z-index: 2;
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 4px 8px; border-radius: 2px;
          background: rgba(14,11,26,0.72); color: #e8e0f5;
          border: 1px solid rgba(126,79,176,0.25);
          backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
          max-width: calc(100% - 16px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .gallery-fade { position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none; }
        @media (max-width: 640px) {
          .gallery-fade { width: 40px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gallery-track { animation: none; }
          .gallery-viewport { overflow-x: auto; scroll-snap-type: x mandatory; padding: 0 32px; }
          .gallery-item { scroll-snap-align: center; transition: none; }
          .gallery-item:hover { transform: none; }
          .gallery-copy-1 { display: none !important; }
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
        <div className="gallery-fade" style={{ left: 0, background: 'linear-gradient(to right, #0a0814, transparent)' }} />
        <div className="gallery-fade" style={{ right: 0, background: 'linear-gradient(to left, #0a0814, transparent)' }} />
        <div className="gallery-viewport">
          <div
            className={`gallery-track${paused ? ' is-paused' : ''}`}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {copies.map(copy => galleryImages.map((img, i) => {
              const isCopy = copy === 1;
              return (
                <button
                  key={`${copy}-${i}`}
                  type="button"
                  className={`gallery-item gallery-copy-${copy}`}
                  onClick={e => openLightbox(i, e.currentTarget)}
                  aria-label={isCopy ? undefined : `Ver en grande: ${img.alt}`}
                  aria-hidden={isCopy || undefined}
                  tabIndex={isCopy ? -1 : undefined}
                >
                  {img.orientation === 'portrait' && (
                    <div className="gallery-blur" style={{ backgroundImage: `url("${img.src.blurDataURL}")` }} />
                  )}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="280px"
                    placeholder="blur"
                    style={{ objectFit: img.orientation === 'portrait' ? 'contain' : 'cover' }}
                  />
                  <span className="gallery-label" aria-hidden="true">{img.project}</span>
                </button>
              );
            }))}
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          index={openIndex}
          onClose={closeLightbox}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
