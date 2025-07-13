
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PremiumNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      // Active section detection
      const sections = ['accueil', 'services', 'apropos', 'maroc', 'galerie', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveItem(currentSection);
      }
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
    setActiveItem(sectionId);
  };

  const menuItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Services', id: 'services' },
    { label: 'À propos', id: 'apropos' },
    { label: 'Maroc', id: 'maroc' },
    { label: 'Galerie', id: 'galerie' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Luxury backdrop blur overlay */}
      <div className={`fixed top-0 left-0 right-0 h-32 z-40 transition-all duration-1000 ${
        isScrolled 
          ? 'bg-gradient-to-b from-white/80 via-white/60 to-transparent backdrop-blur-xl' 
          : 'bg-gradient-to-b from-black/30 via-black/10 to-transparent'
      }`} />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl shadow-[0_8px_60px_rgba(0,0,0,0.08)]' 
          : 'bg-transparent'
      }`}>
        
        {/* Ultra-thin luxury accent line */}
        <div className={`h-px bg-gradient-to-r from-transparent via-terracotta/60 to-transparent transition-all duration-1000 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`} />
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-28">
            
            {/* Sophisticated Logo */}
            <div 
              className="flex items-center space-x-5 group cursor-pointer" 
              onClick={() => scrollToSection('accueil')}
            >
              <div className="relative">
                {/* Main logo container */}
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-[1rem] flex items-center justify-center shadow-[0_8px_32px_rgba(15,23,42,0.3)] group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.4)] transition-all duration-500 group-hover:scale-105 border border-white/10">
                  <span className="text-white font-bold text-xl tracking-wider font-playfair">EV</span>
                </div>
                {/* Luxury accent dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-terracotta rounded-full shadow-lg animate-pulse"></div>
              </div>
              
              <div className="flex flex-col">
                <span className={`text-2xl font-bold tracking-tight font-playfair transition-all duration-500 ${
                  isScrolled ? 'text-slate-900' : 'text-white drop-shadow-lg'
                }`}>
                  Événement Voyage
                </span>
                <div className="flex items-center space-x-2 mt-1">
                  <Award className="w-3 h-3 text-terracotta" />
                  <span className="text-xs text-terracotta font-medium tracking-widest uppercase opacity-80">
                    Luxury Travel Concierge
                  </span>
                </div>
              </div>
            </div>

            {/* Refined Desktop Menu */}
            <div className="hidden lg:flex items-center">
              {menuItems.map((item, index) => {
                const isActive = activeItem === item.id;
                
                return (
                  <div key={item.id} className="relative mx-1">
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative px-6 py-4 transition-all duration-400 hover:scale-105 ${
                        isActive ? 'scale-105' : ''
                      }`}
                    >
                      <span className={`font-medium text-base tracking-wide transition-all duration-400 ${
                        isScrolled 
                          ? isActive 
                            ? 'text-terracotta' 
                            : 'text-slate-800 group-hover:text-terracotta'
                          : isActive 
                            ? 'text-terracotta drop-shadow-sm' 
                            : 'text-white/95 group-hover:text-white drop-shadow-sm'
                      }`}>
                        {item.label}
                      </span>
                      
                      {/* Sophisticated underline */}
                      <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-terracotta rounded-full transition-all duration-500 ${
                        isActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-70'
                      }`} />
                      
                      {/* Subtle glow effect */}
                      {isActive && (
                        <div className="absolute inset-0 bg-terracotta/5 rounded-xl blur-xl opacity-60" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Luxury Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="ghost"
                className={`group relative overflow-hidden px-6 py-3 rounded-xl font-medium transition-all duration-500 hover:scale-105 border border-transparent hover:border-terracotta/20 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-terracotta hover:bg-terracotta/5' 
                    : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center space-x-2 relative z-10">
                  <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Contact</span>
                </div>
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-gradient-to-r from-terracotta via-terracotta to-orange-600 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-[0_8px_32px_rgba(213,89,49,0.3)] hover:shadow-[0_12px_40px_rgba(213,89,49,0.4)]"
              >
                <div className="flex items-center space-x-2 relative z-10">
                  <Globe className="w-4 h-4" />
                  <span className="tracking-wide">Réserver</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>

            {/* Refined Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'bg-slate-100 hover:bg-slate-200' 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {isOpen ? (
                <X size={24} className={`transition-all duration-300 ${
                  isScrolled ? 'text-slate-800' : 'text-white'
                }`} />
              ) : (
                <Menu size={24} className={`transition-all duration-300 ${
                  isScrolled ? 'text-slate-800' : 'text-white'
                }`} />
              )}
            </button>
          </div>

          {/* Luxury Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-t border-slate-200/50 animate-fade-in">
              <div className="px-8 py-8">
                <div className="space-y-1">
                  {menuItems.map((item, index) => {
                    const isActive = activeItem === item.id;
                    
                    return (
                      <button 
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`group w-full text-left p-4 rounded-xl transition-all duration-300 hover:scale-[1.01] animate-fade-in ${
                          isActive 
                            ? 'bg-terracotta/10 text-terracotta' 
                            : 'hover:bg-slate-50 text-slate-800 hover:text-terracotta'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="text-lg font-medium tracking-wide">
                          {item.label}
                        </span>
                        {isActive && (
                          <div className="w-6 h-0.5 bg-terracotta rounded-full mt-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
                
                <div className="pt-6 space-y-3 border-t border-slate-200/50 mt-6">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-terracotta hover:border-terracotta/30 py-4 rounded-xl font-medium text-base transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Nous Contacter
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-terracotta to-orange-600 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Réserver Maintenant
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default PremiumNavigation;
