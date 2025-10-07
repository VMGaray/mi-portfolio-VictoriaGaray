'use client';

import ImageCarousel from "./ImageCarousel";
import Link from "next/link";
import { projectsData } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: typeof projectsData[0];
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isVGBStore = project.title.includes("VGB-STORE");

  return (
    <div
      className={`bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 flex flex-col gap-8 border border-gray-100 hover:border-purple-200 ${
        isVGBStore ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Carrusel de Imágenes con auto-avance */}
      <div className="md:w-1/2">
        <ImageCarousel images={project.images} title={project.title} autoplay={true} />
      </div>

      {/* Detalles del Proyecto */}
      <div className="md:w-1/2 flex flex-col">
        <h3
          className="text-3xl font-bold text-blue-950 mb-3 transition-colors"
          onMouseEnter={(e) => e.currentTarget.style.color = '#7E4FB0'}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        >
          {project.title}
        </h3>
        <p className="text-gray-700 mb-6 flex-grow leading-relaxed text-base">
          {project.description}
        </p>

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
        <div className="flex flex-wrap gap-4 mt-auto">
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
      </div>
    </div>
  );
}