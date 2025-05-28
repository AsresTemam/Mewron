import React from 'react';
import logo from '../assets/logo.png';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 px-4 py-4 flex justify-between items-center transition-all duration-300
      ${scrolled ? 'bg-white text-black shadow-md' : 'bg-black bg-opacity-40 text-white'}`}
    >
      <div className="logo flex items-center space-x-3">
        <img
          src={logo}
          alt="Mewron LLC Logo"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg bg-white p-1"
          style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.13)' }}
        />
        <a
          href="#"
          className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-sm whitespace-nowrap"
        >
          Mewron LLC{' '}
          <span className="font-light text-gray-300 md:text-gray-500 text-lg">
            – Corporate Philosophy
          </span>
        </a>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="hover:text-primary transition-colors">
          Features
        </a>
        <a href="#download" className="hover:text-primary transition-colors">
          Download
        </a>
        <a href="#about" className="hover:text-primary transition-colors">
          About
        </a>
        <a href="#testimonials" className="hover:text-primary transition-colors">
          Testimonials
        </a>
        <a href="#faq" className="hover:text-primary transition-colors">
          FAQ
        </a>
        <a href="#blog" className="hover:text-primary transition-colors">
          Blog
        </a>
        <a href="#support" className="hover:text-primary transition-colors">
          Support
        </a>
      </div>
      <div className="md:hidden">
        <button className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
