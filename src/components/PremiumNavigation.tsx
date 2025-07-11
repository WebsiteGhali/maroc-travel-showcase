
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PremiumNavigation = () => {
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

  const menuItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Services', id: 'services' },
    { label: 'À propos', id: 'apropos' },
    { label: 'Découvrir le Maroc', id: 'maroc' },
    { label: 'Galerie', id: 'galerie' },
    { label: 'Témoignages', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-terracotta/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-terracotta via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-lg">EV</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-deep-blue font-playfair">Événement Voyage</span>
              <div className="text-sm text-terracotta font-medium">Premium Travel Agency</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-deep-blue hover:text-terracotta transition-all duration-300 font-medium text-lg relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 premium-gradient group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="premium-gradient text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-full bg-terracotta/10 hover:bg-terracotta/20 transition-colors"
          >
            {isOpen ? <X size={24} className="text-terracotta" /> : <Menu size={24} className="text-terracotta" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-terracotta/20 shadow-2xl">
            <div className="px-6 py-8 space-y-6">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-deep-blue hover:text-terracotta py-3 text-lg font-medium transition-colors border-b border-gray-100 last:border-b-0"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 space-y-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="w-full border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white py-4 rounded-2xl font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full premium-gradient text-white py-4 rounded-2xl font-semibold"
                >
                  Réserver maintenant
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PremiumNavigation;
