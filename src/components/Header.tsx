'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-600 transition-colors font-medium"
      onMouseEnter={(e) => e.currentTarget.style.color = '#7E4FB0'}
      onMouseLeave={(e) => e.currentTarget.style.color = ''}
    >
      {children}
    </a>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o nombre de Victoria */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-950 transition-colors"
          onMouseEnter={(e) => e.currentTarget.style.color = '#7E4FB0'}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        >
          Victoria Garay
        </Link>

        {/* Navegación principal - Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#sobre-mi">Sobre Mí</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </div>

        {/* Botón hamburguesa - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-blue-950 transition-colors"
          aria-label="Toggle menu"
          onMouseEnter={(e) => e.currentTarget.style.color = '#7E4FB0'}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <NavLink href="#proyectos" onClick={closeMenu}>Proyectos</NavLink>
            <NavLink href="#sobre-mi" onClick={closeMenu}>Sobre Mí</NavLink>
            <NavLink href="#contacto" onClick={closeMenu}>Contacto</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}