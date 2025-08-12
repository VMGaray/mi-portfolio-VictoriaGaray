import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Lado de la imagen */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 shadow-lg">
            <Image
              src="/images/foto perfil.jpg"
              alt="Foto de Victoria Garay"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Lado del texto */}
        <div className="text-center md:text-left">
          <p className="text-lg text-stone-500">¡Hola! Soy</p>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-950 leading-tight mt-2">
            Victoria Garay
          </h1>
          <h2 className="text-2xl md:text-3xl text-lime-800 font-semibold mt-4">
            Fullstack Developer - Frontend Specialist
          </h2>
          <p className="mt-6 text-gray-700 max-w-lg md:max-w-none">
            | JavaScript | TypeScript | React | Redux | Next.js | Tailwind CSS | Bootstrap | Express |
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="#proyectos" className="bg-lime-800 text-white font-bold py-3 px-6 rounded-full hover:bg-lime-900 transition-colors">
              Ver Proyectos
            </a>
            <a href="#contacto" className="bg-white text-lime-800 border border-lime-800 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}