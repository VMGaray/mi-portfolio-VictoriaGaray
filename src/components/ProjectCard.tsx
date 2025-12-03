'use client';

import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import Link from "next/link";
import { projectsData } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: typeof projectsData[0];
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Usar cardImages si existe, sino usar images
  const frontImages = project.cardImages || project.images;

  return (
    <div className="perspective-container w-full h-[600px] md:h-[700px] lg:h-[750px]">
      <div
        className={`flip-card-inner w-full h-full transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT - Carrusel de Imágenes */}
        <div
          className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-xl shadow-xl p-6 border border-gray-100 cursor-pointer"
          onClick={handleFlip}
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-6">
            <div className="w-full h-4/5">
              <ImageCarousel images={frontImages} title={project.title} autoplay={true} />
            </div>
            <h3 className="text-3xl font-bold text-blue-950 text-center">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Haz clic para ver detalles
            </p>
          </div>
        </div>

        {/* BACK - Detalles del Proyecto */}
        <div
          className="flip-card-back absolute w-full h-full backface-hidden bg-white rounded-xl shadow-xl border border-purple-200 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col h-full overflow-y-auto p-6 lg:p-8 custom-scrollbar">
            <h3 className="text-3xl font-bold text-blue-950 mb-4" style={{color: '#7E4FB0'}}>
              {project.title}
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              {project.description}
            </p>

            {/* Mi Contribución */}
            {project.myContribution && (
              <div className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 className="text-lg font-bold text-blue-950 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💼</span>
                  Mi Contribución al Proyecto
                </h4>
                <div className="space-y-4">
                  {project.myContribution.map((contribution, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h5 className="text-base font-bold mb-2 flex items-center gap-2" style={{color: '#7E4FB0'}}>
                        {contribution.title}
                      </h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {contribution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Funcionalidades principales */}
            {project.features && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-950 mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded" style={{backgroundColor: '#7E4FB0'}}></span>
                  Funcionalidades principales
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tecnologías */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-950 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 rounded" style={{backgroundColor: '#7E4FB0'}}></span>
                Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors"
                    style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9d5ff'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3e8ff'}
                  >
                    {tech.icon && <tech.icon size={16} />}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-950 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                <FaGithub size={18} />
                Ver Código
              </Link>
              {project.deployUrl && (
                <Link
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center"
                  style={{backgroundColor: '#81B04F'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6d9542'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#81B04F'}
                >
                  <FaExternalLinkAlt size={16} />
                  Deploy
                </Link>
              )}
            </div>

            {/* Botón para volver - Sticky en la parte inferior */}
            <div className="sticky bottom-0 left-0 right-0 mt-6 pt-4 pb-2 bg-gradient-to-t from-white via-white to-transparent">
              <button
                onClick={handleFlip}
                className="w-full py-3 px-6 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                style={{backgroundColor: '#7E4FB0'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6d3f96'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7E4FB0'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}