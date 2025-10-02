'use client';

import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24" style={{backgroundColor: '#E0D7F0'}}>
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
          ¿Hablamos?
        </h2>
        <p className="text-lg text-blue-950 leading-relaxed mb-10">
          Estoy buscando mi primera oportunidad laboral. Si mi perfil te interesa, no dudes en contactarme. ¡Me encantaría trabajar contigo!
        </p>
        <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
          {/* Enlace a LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/victoria-mercedes-garay/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{backgroundColor: '#7E4FB0'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6a3f99'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7E4FB0'}
          >
            <FaLinkedin size={24} />
            LinkedIn
          </Link>
          {/* Enlace a Correo Electrónico */}
          <Link
            href="mailto:victoriamegaray@gmail.com"
            className="flex items-center gap-3 bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:-translate-y-1"
          >
            <FaEnvelope size={24} />
            Email
          </Link>
          <Link
            href="https://github.com/VMGaray"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{backgroundColor: '#81B04F'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6d9542'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#81B04F'}
          >
            <FaGithub size={24} />
            GitHub
          </Link>

        </div>
      </div>
    </section>
  );
}