'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  title: string;
  autoplay?: boolean; // Nuevo prop para activar el auto-avance
  interval?: number;  // Nuevo prop para definir el intervalo en milisegundos
}

export default function ImageCarousel({ images, title, autoplay = true, interval = 3000 }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lógica para el auto-avance
  useEffect(() => {
    if (autoplay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      // Función de limpieza para detener el temporizador cuando el componente se desmonte
      return () => clearInterval(timer);
    }
  }, [autoplay, images.length, interval]); // Dependencias del efecto

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={images[currentImageIndex]}
        alt={`Imagen de ${title} - ${currentImageIndex + 1}`}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-opacity duration-500 ease-in-out"
      />
      {images.length > 1 && (
        <>
          {/* Botón Anterior */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 text-blue-950 hover:bg-opacity-100 transition-colors"
          >
            &lt;
          </button>
          {/* Botón Siguiente */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 text-blue-950 hover:bg-opacity-100 transition-colors"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
}