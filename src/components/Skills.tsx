import {
  FaReact,
  FaBootstrap,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiTypescript,
  SiN8N,
} from "react-icons/si";

const skillsData = [
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-gray-700" },
  { name: "n8n", icon: SiN8N, color: "text-pink-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-700" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24" style={{backgroundColor: '#E0D7F0'}}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-12">
          Tecnologías
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-transparent hover:border-purple-200"
              >
                <Icon className={`text-5xl md:text-6xl ${skill.color} mb-3 transition-transform duration-300 group-hover:scale-110`} />
                <span className="text-sm md:text-base font-medium text-gray-700 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
