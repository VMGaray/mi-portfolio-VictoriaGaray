export default function AboutMe() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24" style={{backgroundColor: '#E0D7F0'}}>
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-12">
          Sobre Mí
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-blue-950 leading-relaxed mb-6">
            Soy una persona <strong>curiosa, proactiva y con muchas ganas de seguir creciendo</strong> en el mundo IT. Disfruto trabajar en equipo, aprender nuevas tecnologías y transformar ideas en productos reales. Recién termino mi carrera de desarrolladora <strong>Fullstack con foco en el Frontend</strong>, y mi pasión es crear soluciones accesibles, funcionales y con buen diseño.
          </p>
          <p className="text-lg text-blue-950 leading-relaxed">
            Actualmente me encuentro <strong style={{color: '#7E4FB0'}}>#OpenToWork</strong>, buscando mi primera experiencia laboral en tecnología para aplicar mis conocimientos y seguir aprendiendo de la mano de profesionales.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Mis Habilidades Blandas</h3>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Trabajo en Equipo
              </span>
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Proactividad
              </span>
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Curiosidad
              </span>
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Resolución de Problemas
              </span>
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Aprendizaje Continuo
              </span>
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Comunicación Efectiva
              </span>
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Adaptabilidad
              </span>
              <span className="text-sm font-medium px-4 py-2 rounded-full" style={{backgroundColor: '#f3e8ff', color: '#7E4FB0'}}>
                Gestión del Tiempo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}