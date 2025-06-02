import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBackground1 from '../assets/bg1.jpg';
import heroBackground2 from '../assets/bg6.jpg';
import heroBackground3 from '../assets/bg3.jpg';
import heroBackground4 from '../assets/bg4.jpg';
import heroBackground5 from '../assets/bg5.jpg';
import heroBackground6 from '../assets/bg9.jpg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const backgrounds = [
    { 
      src: heroBackground1, 
      title: "Connect with Pet Lovers",
      subtitle: "Join our vibrant community",
      gradient: "from-purple-600/20 to-blue-600/20"
    },
    { 
      src: heroBackground2, 
      title: "Track Health & Wellness",
      subtitle: "Monitor your pet's journey",
      gradient: "from-blue-600/20 to-teal-600/20"
    },
    { 
      src: heroBackground3, 
      title: "Share Precious Moments",
      subtitle: "Create lasting memories",
      gradient: "from-pink-600/20 to-orange-600/20"
    },
    { 
      src: heroBackground4, 
      title: "AI-Powered Features",
      subtitle: "Smart pet care solutions",
      gradient: "from-green-600/20 to-blue-600/20"
    },
    { 
      src: heroBackground5, 
      title: "Expert Guidance",
      subtitle: "Professional advice at your fingertips",
      gradient: "from-indigo-600/20 to-purple-600/20"
    },
    { 
      src: heroBackground6, 
      title: "Build Digital Legacy",
      subtitle: "Preserve your pet's story",
      gradient: "from-amber-600/20 to-red-600/20"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const formatSlideNumber = (n: number) => (n < 9 ? `0${n + 1}` : `${n + 1}`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section className="hero-section relative text-white flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        {backgrounds.map((bg, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${bg.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bg.gradient}`} />
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
            }}
            animate={{
              y: -10,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Mewron
            </h1>
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 font-light tracking-wide"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Connect • Track • Share Your Pet's Journey
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              {backgrounds[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-blue-200">
              {backgrounds[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg overflow-hidden"
          >
            <span className="relative z-10">Get Started Free</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 border-2 border-white/30 backdrop-blur-md bg-white/10 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Watch Demo
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Modern Slide Indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-4">
          {/* Progress Bar */}
          <div className="relative h-32 w-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-purple-400"
              animate={{
                height: `${((currentSlide + 1) / backgrounds.length) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Slide Dots */}
          <div className="flex flex-col space-y-3">
            {backgrounds.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-white scale-125'
                      : 'bg-transparent border border-white/50'
                  }`}
                  animate={currentSlide === index ? {
                    boxShadow: ["0 0 0 0 rgba(255,255,255,0.6)", "0 0 0 10px rgba(255,255,255,0)", "0 0 0 0 rgba(255,255,255,0.6)"]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="absolute left-8 top-1/2 -translate-y-1/2 text-xs text-white/0 group-hover:text-white/80 transition-all duration-300 whitespace-nowrap">
                  {backgrounds[index].title.split(' ')[0]}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Current Slide Number */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {formatSlideNumber(currentSlide)}
            </span>
            <span className="text-white/50 text-sm ml-1">/ {formatSlideNumber(backgrounds.length - 1)}</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;