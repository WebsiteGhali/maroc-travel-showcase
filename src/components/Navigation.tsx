
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-terracotta to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">EV</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Événement Voyage</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-terracotta transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-gray-700 hover:text-terracotta transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('maroc')}
              className="text-gray-700 hover:text-terracotta transition-colors"
            >
              Découvrir le Maroc
            </button>
            <button 
              onClick={() => scrollToSection('evenements')}
              className="text-gray-700 hover:text-terracotta transition-colors"
            >
              Nos Événements
            </button>
            <button 
              onClick={() => scrollToSection('galerie')}
              className="text-gray-700 hover:text-terracotta transition-colors"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-terracotta transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-terracotta hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Réservez maintenant
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block px-3 py-2 text-gray-700 hover:text-terracotta w-full text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="block px-3 py-2 text-gray-700 hover:text-terracotta w-full text-left"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('maroc')}
                className="block px-3 py-2 text-gray-700 hover:text-terracotta w-full text-left"
              >
                Découvrir le Maroc
              </button>
              <button 
                onClick={() => scrollToSection('evenements')}
                className="block px-3 py-2 text-gray-700 hover:text-terracotta w-full text-left"
              >
                Nos Événements
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="block px-3 py-2 text-gray-700 hover:text-terracotta w-full text-left"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-terracotta w-full text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-terracotta hover:bg-orange-600 text-white"
              >
                Réservez maintenant
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
