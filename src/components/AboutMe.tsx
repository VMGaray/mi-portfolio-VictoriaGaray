export default function AboutMe() {
  return (
    <section id="sobre-mi" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-12">
          Sobre Mí
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-blue-950 leading-relaxed mb-6">
            Soy una persona **curiosa, proactiva y con muchas ganas de seguir creciendo** en el mundo IT. Disfruto trabajar en equipo, aprender nuevas tecnologías y transformar ideas en productos reales. Recién termino mi carrera de desarrolladora **Fullstack con foco en el Frontend**, y mi pasión es crear soluciones accesibles, funcionales y con buen diseño.
          </p>
          <p className="text-lg text-blue-950 leading-relaxed">
            Actualmente me encuentro **#OpenToWork**, buscando mi primera experiencia laboral en tecnología para aplicar mis conocimientos y seguir aprendiendo de la mano de profesionales.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Mis Habilidades Blandas</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Trabajo en Equipo
              </span>
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Proactividad
              </span>
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Curiosidad
              </span>
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Resolución de Problemas
              </span>
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Aprendizaje Continuo
              </span>
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Comunicación Efectiva
              </span>
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Adaptabilidad
              </span>
              <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full">
                Gestión del Tiempo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}