'use client';

import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 md:py-24" style={{backgroundColor: '#E0D7F0'}}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-12 md:mb-16">
          Mis Proyectos
        </h2>
        <div className="space-y-16">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}