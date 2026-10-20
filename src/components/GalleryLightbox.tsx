'use client';

import { useEffect, useRef } from 'react';
import { createPortal, preload } from 'react-dom';
import Image, { getImageProps } from 'next/image';
import type { GalleryImage } from '../data/galleryData';

const LIGHTBOX_SIZES = '(max-width: 1240px) 100vw, 1200px';

type Props = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function GalleryLightbox({ images, index, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const total = images.length;
  const current = images[index];
  const prev = () => onNavigate((index - 1 + total) % total);
  const next = () => onNavigate((index + 1) % total);

  // Bloquea el scroll del body y pone el foco en el botón de cerrar
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  // Precarga las imágenes vecinas en la resolución del visor
  useEffect(() => {
    [images[(index + 1) % total], images[(index - 1 + total) % total]].forEach(({ src, alt }) => {
      const { props } = getImageProps({ src, alt, sizes: LIGHTBOX_SIZES });
      preload(props.src, { as: 'image', imageSrcSet: props.srcSet, imageSizes: LIGHTBOX_SIZES });
    });
  }, [images, index, total]);

  // Teclado a nivel documento para que Esc y las flechas funcionen aunque el foco se pierda
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); onNavigate((index - 1 + total) % total); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); onNavigate((index + 1) % total); }
      else if (e.key === 'Tab') {
        // Foco atrapado dentro del visor (solo botones visibles: en mobile las flechas se ocultan)
        const focusables = [...(dialogRef.current?.querySelectorAll<HTMLElement>('button') ?? [])]
          .filter(el => el.getClientRects().length > 0);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const inside = dialogRef.current?.contains(document.activeElement);
        if (!inside) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [index, total, onClose, onNavigate]);

  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
  }

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Visor de capturas: ${current.alt}`}
      className="lb-root"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`
        .lb-root {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(7,5,16,0.96);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 64px 16px 24px; font-family: 'DM Sans', sans-serif;
          animation: lb-fade 0.25s ease;
        }
        @keyframes lb-fade { from { opacity: 0; } to { opacity: 1; } }
        .lb-stage {
          position: relative; width: 100%; max-width: 1200px;
          height: calc(100dvh - 160px); touch-action: pan-y;
        }
        .lb-img { animation: lb-fade 0.3s ease; }
        .lb-btn {
          position: absolute; display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 2px; cursor: pointer;
          background: rgba(14,11,26,0.7); border: 1px solid rgba(126,79,176,0.3);
          color: rgba(196,168,232,0.8); transition: all 0.3s;
        }
        .lb-btn:hover, .lb-btn:focus-visible { background: rgba(126,79,176,0.25); border-color: rgba(196,168,232,0.5); color: #e8e0f5; }
        .lb-btn:focus-visible { outline: 2px solid #c4a8e8; outline-offset: 2px; }
        .lb-close { top: 16px; right: 16px; }
        .lb-prev { left: 16px; top: 50%; transform: translateY(-50%); }
        .lb-next { right: 16px; top: 50%; transform: translateY(-50%); }
        .lb-caption {
          margin-top: 16px; display: flex; gap: 16px; align-items: baseline;
          flex-wrap: wrap; justify-content: center; text-align: center;
        }
        @media (max-width: 640px) {
          .lb-prev, .lb-next { display: none; }
          .lb-root { padding: 64px 8px 20px; }
        }
      `}</style>

      <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={onClose} aria-label="Cerrar visor">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="lb-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Image
          key={index}
          className="lb-img"
          src={current.src}
          alt={current.alt}
          fill
          sizes={LIGHTBOX_SIZES}
          placeholder="blur"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <button type="button" className="lb-btn lb-prev" onClick={prev} aria-label="Imagen anterior">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button type="button" className="lb-btn lb-next" onClick={next} aria-label="Imagen siguiente">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="lb-caption" aria-live="polite">
        <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4a8e8' }}>
          {current.project}
        </span>
        <span style={{ fontSize: 13, color: 'rgba(196,168,232,0.5)', fontWeight: 300 }}>
          {current.detail}
        </span>
        <span style={{ fontSize: 11, letterSpacing: '0.15em', color: '#6b5c80' }}>
          {index + 1} / {total}
        </span>
      </div>
    </div>,
    document.body,
  );
}
