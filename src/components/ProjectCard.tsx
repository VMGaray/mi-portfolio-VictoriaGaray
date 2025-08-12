import ImageCarousel from "./ImageCarousel";
import Link from "next/link";
import { projectsData } from "../data/projectsData";

interface ProjectCardProps {
  project: typeof projectsData[0];
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isVGBStore = project.title.includes("VGB-STORE");

  return (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col gap-8 ${
      isVGBStore ? "md:flex-row-reverse" : "md:flex-row"
    }`}
  >
    {/* Carrusel de Imágenes con auto-avance */}
    <div className="md:w-1/2">
      <ImageCarousel images={project.images} title={project.title} autoplay={true} />
    </div>

    {/* Detalles del Proyecto */}
    <div className="md:w-1/2 flex flex-col">
      <h3 className="text-3xl font-bold text-blue-950 mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

      {/* Tecnologías */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-blue-950 mb-2">Tecnologías</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-lime-100 text-lime-800 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2"
            >
              {/* Renderiza el icono solo si la tecnología lo tiene */}
              {tech.icon && <tech.icon size={16} />}
              {/* Renderiza el nombre de la tecnología */}
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="flex gap-4 mt-auto">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-950 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-900 transition-colors text-center"
        >
          GitHub
        </Link>
        <Link
          href={project.deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-950 border border-gray-800 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors text-center"
        >
          Deploy
        </Link>
      </div>
    </div>
  </div>
);
}