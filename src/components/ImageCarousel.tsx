'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageCarouselProps {
  images: string[];
  title: string;
  autoplay?: boolean;
  interval?: number;
}

export default function ImageCarousel({ images, title, autoplay = true, interval = 4000 }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (autoplay && images.length > 1) {
      const timer = setInterval(() => {
        goToNext();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoplay, images.length, interval, currentImageIndex]);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToImage = (index: number) => {
    if (!isTransitioning && index !== currentImageIndex) {
      setIsTransitioning(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="w-full space-y-3">
      {/* Contenedor principal del slider */}
      <div className="relative w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 group">
        {/* Todas las imágenes en stack */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentImageIndex
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-95 z-0'
              }`}
            >
              <Image
                src={image}
                alt={`${title} - Screenshot ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            {/* Overlay gradient en los bordes */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Botones de navegación */}
            <button
              onClick={goToPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100 z-20"
              style={{color: '#7E4FB0'}}
              aria-label="Imagen anterior"
            >
              <FaChevronLeft className="text-base md:text-xl" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100 z-20"
              style={{color: '#7E4FB0'}}
              aria-label="Siguiente imagen"
            >
              <FaChevronRight className="text-base md:text-xl" />
            </button>

            {/* Contador de imágenes */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 text-white text-sm font-medium backdrop-blur-sm z-20">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Indicadores de puntos mejorados */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className="transition-all duration-300 rounded-full hover:scale-125"
                  style={{
                    width: currentImageIndex === index ? '28px' : '8px',
                    height: '8px',
                    backgroundColor: currentImageIndex === index ? '#7E4FB0' : 'rgba(255, 255, 255, 0.7)',
                    boxShadow: currentImageIndex === index ? '0 2px 8px rgba(126, 79, 176, 0.4)' : 'none',
                  }}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails compactos */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                currentImageIndex === index
                  ? 'ring-3 ring-offset-2 scale-105 shadow-lg'
                  : 'opacity-50 hover:opacity-100 hover:scale-105'
              }`}
              style={{
                ringColor: currentImageIndex === index ? '#7E4FB0' : 'transparent',
              }}
            >
              <Image
                src={image}
                alt={`Miniatura ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="bg-gray-100"
              />
              {currentImageIndex === index && (
                <div className="absolute inset-0 border-2 border-white/50 rounded-lg" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}