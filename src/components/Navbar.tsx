import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-br from-blue-50/90 to-indigo-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a
          href="#home"
          aria-label="Retour à l'accueil, Dr Kottin Evariste"
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
        >
          Dr <span className="font-light">Kottin Evariste</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Accueil
          </a>
          <a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Publications
          </a>
          <a href="#skills" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Domaines de recherche
          </a>
          <a href="#about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            À propos
          </a>
          <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Activer le mode sombre"
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Activer le mode sombre"
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Ouvrir ou fermer le menu de navigation"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4 shadow-md' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex flex-col space-y-4">
          <a
            href="#home"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </a>
           <a
            href="#projects"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Publications
          </a>
           <a
            href="#skills"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Domaines de recherche
          </a>
           <a
            href="#about"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </a>
           <a
            href="#contact"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;