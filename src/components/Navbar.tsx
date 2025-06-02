import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo3.png';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#download', label: 'Download' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#blog', label: 'Blog' },
    { href: '#support', label: 'Support' },
  ];

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-between items-start transition-all duration-300
      ${scrolled ? 'bg-white text-black shadow-md' : 'bg-black bg-opacity-40 text-white dark:bg-gray-900 dark:text-white'}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Mewron LLC Logo"
          className="w-28 md:w-36 h-auto"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 pt-2 text-base md:text-lg font-medium ml-auto">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden ml-auto flex items-center space-x-3">
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen(true)}
          className="text-primary focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay + Slide-In Drawer */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" />
          <div
            ref={drawerRef}
            className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <span className="font-bold text-black dark:text-white">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                ✕
              </button>
            </div>
            <ul className="p-4 space-y-4 text-black dark:text-white">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
