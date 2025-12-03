'use client';

import Image from "next/image";

const images = [
  "/images/heroes landing.jpg",
  "/images/heroes login.jpg",
  "/images/heroes chatBot.jpg",
  "/images/heroes cuartel.jpg",
  "/images/heroes metrivas.jpg",
  "/images/heroes reportes.jpg",
  "/images/vgb-store-1.jpg",
  "/images/vgb-store-2.jpg",
  "/images/vgb-store-3.jpg",
  "/images/vgb-store-4.jpg",
  "/images/vgb-store-5.jpg",
  "/images/vgb-store-6.jpg",
  "/images/nota-prensa.jpeg",
  "/images/nota-prensa1.jpeg",
  "/images/nota-prensa2.jpeg",
  "/images/nota-prensa3.jpeg",
  "/images/n8n.jpeg",
  "/images/ecommers.jpeg",
  "/images/ecommers1.jpeg",
  "/images/ecommers2.jpeg",
  "/images/ecommers3.jpeg",
  "/images/ecommers4.jpeg",
  "/images/ecommers5.jpeg",
  "/images/sistema de turnos.jpg",
  "/images/sistema de turnos1.jpg",
  "/images/sistema de turnos2.jpg",
  "/images/sistema de turnos3.jpg",
  "/images/sistema de turnos4.jpg",
];

export default function ImageGalleryCarousel() {
  // Duplicamos el array de imágenes para crear el efecto infinito
  const doubledImages = [...images, ...images];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-4">
          Galería de Proyectos
        </h2>
        <p className="text-center text-gray-600 text-lg">
          Explora las capturas de mis proyectos en acción
        </p>
      </div>

      <div className="relative">
        <div className="carousel-container">
          <div className="carousel-track">
            {doubledImages.map((image, index) => (
              <div
                key={index}
                className="carousel-item flex-shrink-0 px-4"
              >
                <div className="relative w-80 h-52 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-white">
                  <Image
                    src={image}
                    alt={`Proyecto ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
