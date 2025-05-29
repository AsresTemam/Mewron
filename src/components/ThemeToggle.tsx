// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
