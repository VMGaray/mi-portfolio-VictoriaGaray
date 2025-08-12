import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
          ¿Hablamos?
        </h2>
        <p className="text-lg text-blue-950 leading-relaxed mb-10">
          Estoy buscando mi primera oportunidad laboral. Si mi perfil te interesa, no dudes en contactarme. ¡Me encantaría trabajar contigo!
        </p>
        <div className="flex justify-center gap-6 md:gap-8">
          {/* Enlace a LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/victoria-mercedes-garay/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-lime-800 text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-lime-900"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </Link>
          {/* Enlace a Correo Electrónico */}
          <Link
            href="mailto:victoriamegaray@gmail.com" 
            className="flex items-center gap-3 bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-gray-900"
          >
            <FaEnvelope size={24} />
            Email
          </Link>
          <Link
            href="https://github.com/VMGaray" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-lime-700 text-white font-bold py-3 px-6 rounded-full transition-colors hover:bg-lime-800"
          >
            <FaLinkedin size={24} />
            GitHub
          </Link>
          
        </div>
      </div>
    </section>
  );
}