// Primero, importa los iconos que usarás de `react-icons`
import {
  FaReact,
  FaBootstrap,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

export const projectsData = [
  {
    id: 1,
    title: "Héroes Cercanos",
    description:
      "Plataforma solidaria desarrollada con Next.js que conecta a la comunidad con los bomberos voluntarios mediante campañas de donación, capacitaciones e información útil.",
    // Aquí cambiamos el array de strings a un array de objetos con nombre e icono
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "OAuth 2.0" }, // No hay un icono específico, lo dejamos solo con el nombre
      { name: "JWT" },
      { name: "Render" },
    ],
    githubUrl: "https://github.com/heroes-cercanos.git",
    deployUrl: "https://heroes-cercanos-front.onrender.com/",
    images: [
      "/images/heroes-cercanos-1.jpg",
      "/images/heroes-cercanos-2.jpg",
      "/images/heroes-cercanos-3.jpg",
      "/images/heroes-cercanos-4.jpg",
      "/images/heroes-cercanos-5.jpg",
      "/images/heroes-cercanos-6.jpg",
      "/images/heroes-cercanos-7.jpg",
    ],
  },
  {
    id: 2,
    title: "VGB-STORE -- Ecommerce",
    description:
      "Una tienda online desarrollada como proyecto final del curso de desarrollo frontend. Utiliza tecnologías modernas como Next.js (App Router), TypeScript y Tailwind CSS.",
    // Aquí también cambiamos el formato
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Context API" },
      { name: "localStorage" },
    ],
    githubUrl: "https://github.com/VMGaray/VGB-STORE--Ecommerce.git",
    deployUrl: "https://vgb-store.vercel.app/",
    images: [
      "/images/vgb-store-1.jpg",
      "/images/vgb-store-2.jpg",
      "/images/vgb-store-3.jpg",
      "/images/vgb-store-4.jpg",
      "/images/vgb-store-5.jpg",
      "/images/vgb-store-6.jpg",
    ],
  },
];