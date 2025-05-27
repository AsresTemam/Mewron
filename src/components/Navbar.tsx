import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'navbar-transparent'} px-4 py-4 flex justify-between items-center`}>
      <div className="logo">
        <a href="#" className="text-2xl font-bold text-primary">Mewron LLC - Corporate Philosophy</a>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#download" className="hover:text-primary transition-colors">Download</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
        <a href="#support" className="hover:text-primary transition-colors">Support</a>
      </div>
      <div className="md:hidden">
        <button className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
