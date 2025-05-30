import React from 'react';
import logo from '../assets/logo3.png'; // Must be PNG with transparency
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 px-4 py-4 flex justify-between items-start transition-all duration-300
      ${scrolled ? 'bg-white text-black shadow-md' : 'bg-black bg-opacity-40 text-white dark:bg-gray-900 dark:text-white'}`}
    >
      {/* Logo Only */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Mewron LLC Logo"
          className="w-65 md:w-72 h-auto"
        />
      </div>

      {/* Right Section: Navigation Links + Theme Toggle */}
      <div className="hidden md:flex items-center space-x-6 pt-2 text-base md:text-lg font-medium ml-auto">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#download" className="hover:text-primary transition-colors">Download</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
        <a href="#support" className="hover:text-primary transition-colors">Support</a>
        <ThemeToggle />
      </div>

      {/* Mobile: Theme Toggle + Menu Button */}
      <div className="md:hidden flex items-center space-x-3 ml-auto">
        <ThemeToggle />
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
