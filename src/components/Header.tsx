'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-600 hover:text-lime-800 transition-colors"
    >
      {children}
    </a>
  );
};

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o nombre de Victoria */}
        <Link href="/" className="text-2xl font-bold text-blue-950">
          Victoria Garay
        </Link>

        {/* Navegación principal */}
        <div className="flex space-x-6">
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#sobre-mi">Sobre Mí</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </div>
      </nav>
    </header>
  );
}