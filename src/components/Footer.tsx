'use client';

import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-8" style={{backgroundColor: '#7E4FB0'}}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Columna 1: Información */}
          <div>
            <h3 className="text-xl font-bold mb-3" style={{color: '#81B04F'}}>Victoria Garay</h3>
            <p className="text-white/90 text-sm">
              Fullstack Developer especializada en Frontend, apasionada por crear experiencias web excepcionales.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-3" style={{color: '#81B04F'}}>Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#proyectos"
                  className="text-white/90 transition-colors hover:text-white"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="text-white/90 transition-colors hover:text-white"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white/90 transition-colors hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-3" style={{color: '#81B04F'}}>Conecta Conmigo</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/victoria-mercedes-garay/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/VMGaray"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href="mailto:victoriamegaray@gmail.com"
                className="text-white/90 hover:text-white transition-colors text-2xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t pt-6" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
          <p className="text-center text-white/80 text-sm flex items-center justify-center gap-2">
            © {currentYear} Victoria Garay. Hecho con <FaHeart style={{color: '#81B04F'}} /> y Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
