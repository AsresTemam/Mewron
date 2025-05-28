import React from 'react';
import logo from '../assets/logo2.jpg';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 px-4 py-4 flex justify-between items-start transition-all duration-300
      ${scrolled ? 'bg-white text-black shadow-md' : 'bg-black bg-opacity-40 text-white'}`}
    >
      {/* Left Section: Logo + Company Name */}
      <div className="flex flex-col items-start space-y-1">
        <div className="w-full flex justify-center">
          <img
  src={logo}
  alt="Mewron LLC Logo"
  className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg"
  style={{
    backgroundColor: 'transparent',
    boxShadow: '0 4px 15px rgba(0,0,0,0.13)',
  }}
/>

        </div>
        <a
          href="#"
          className="text-xl md:text-2xl font-extrabold tracking-wide drop-shadow-sm mt-1"
        >
          Mewron LLC - Corporate Philosophy
        </a>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="hidden md:flex space-x-10 items-center pt-2 text-base md:text-lg font-medium">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#download" className="hover:text-primary transition-colors">Download</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
        <a href="#support" className="hover:text-primary transition-colors">Support</a>
      </div>

      {/* Mobile Menu Icon */}
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
