import React, { useState, useEffect } from 'react';
import heroBackground1 from '../assets/bg1.jpg';
import heroBackground2 from '../assets/bg6.jpg';
import heroBackground3 from '../assets/bg3.jpg';
import heroBackground4 from '../assets/bg4.jpg';
import heroBackground5 from '../assets/bg5.jpg';
import heroBackground6 from '../assets/bg9.jpg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const backgrounds = [
    heroBackground1,
    heroBackground2,
    heroBackground3,
    heroBackground4,
    heroBackground5,
    heroBackground6
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
        setFade(true);
      }, 300); // Fade duration
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length, currentSlide]);

  const formatSlideNumber = (n: number) => (n < 9 ? `0${n + 1}` : `${n + 1}`);

  return (
    <section 
      id="hero" 
      className="hero-section relative text-white flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0 w-full h-full">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Indicators & Number */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
        {/* Diamonds */}
        <div className="flex flex-col space-y-4 mb-5">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setFade(true);
                }, 300);
              }}
              className={`
                w-1.5 h-1.5
                ${currentSlide === index ? 'bg-white' : 'bg-transparent border border-white opacity-60'}
                transform rotate-45
                transition-all duration-200
                focus:outline-none
              `}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                borderWidth: currentSlide === index ? '0px' : '1.5px',
              }}
            />
          ))}
        </div>
        {/* Current Slide Number */}
        <span
          className={`
            mt-2 text-white font-semibold text-xs tracking-widest
            transition-opacity duration-300
            ${fade ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {formatSlideNumber(currentSlide)}
        </span>
      </div>
    </section>
  );
};

export default Hero;
