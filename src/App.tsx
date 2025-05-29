import { useEffect, useState } from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Download />
      <About />
      <Testimonials />
      <FAQ />
      <Blog />
      <Support />
      <Footer />
    </div>
  );
}

export default App;