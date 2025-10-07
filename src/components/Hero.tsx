'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen p-4 md:p-8" style={{backgroundColor: '#E0D7F0'}}>
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Lado de la imagen */}
        <div className="flex justify-center md:justify-end animate-fade-in">
          <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 shadow-2xl ring-4 ring-[#7E4FB0]/20 hover:ring-[#7E4FB0]/40 transition-all duration-300 hover:scale-105">
            <Image
              src="/images/foto perfil.jpg"
              alt="Foto de Victoria Garay"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Lado del texto */}
        <div className="text-center md:text-left animate-slide-in-right">
          <p className="text-lg text-stone-500 animate-fade-in-up">¡Hola! Soy</p>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-950 leading-tight mt-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Victoria Garay
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 animate-fade-in-up" style={{animationDelay: '0.2s', color: '#7E4FB0'}}>
            Fullstack Developer - Frontend Specialist
          </h2>
          <p className="mt-6 text-gray-700 max-w-lg md:max-w-none font-medium animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            JavaScript | TypeScript | React | Redux | Next.js | Tailwind CSS | Bootstrap | Express
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a
              href="#proyectos"
              className="font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{backgroundColor: '#7E4FB0', color: 'white'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D5DAF5';
                e.currentTarget.style.color = '#7E4FB0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7E4FB0';
                e.currentTarget.style.color = 'white';
              }}
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{backgroundColor: '#7E4FB0', color: 'white'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D5DAF5';
                e.currentTarget.style.color = '#7E4FB0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7E4FB0';
                e.currentTarget.style.color = 'white';
              }}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}