
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, MapPin, Camera, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PremiumNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['accueil', 'services', 'apropos', 'maroc', 'galerie', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
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
    { label: 'Accueil', id: 'accueil', icon: Sparkles },
    { label: 'Services', id: 'services', icon: MapPin },
    { label: 'À propos', id: 'apropos', icon: Sparkles },
    { label: 'Découvrir le Maroc', id: 'maroc', icon: MapPin },
    { label: 'Galerie', id: 'galerie', icon: Camera },
    { label: 'Contact', id: 'contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_40px_rgb(0,0,0,0.12)] border-b border-white/30' 
        : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm'
    }`}>
      
      {/* Luxury accent line */}
      <div className={`h-px bg-gradient-to-r from-transparent via-terracotta/50 to-transparent transition-opacity duration-700 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Ultra Premium Logo */}
          <div className="flex items-center space-x-6 group cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta via-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-[0_12px_40px_rgba(213,89,49,0.4)] group-hover:shadow-[0_16px_50px_rgba(213,89,49,0.6)] transition-all duration-500 group-hover:scale-110">
                <span className="text-white font-bold text-xl tracking-wider font-playfair">EV</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-3xl font-bold tracking-tight font-playfair transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Événement Voyage
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-terracotta rounded-full animate-pulse"></div>
                <span className="text-sm text-terracotta font-medium tracking-wider uppercase">
                  Excellence & Prestige
                </span>
              </div>
            </div>
          </div>

          {/* Ultra Premium Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-2">
            {menuItems.map((item) => {
              const isActive = activeItem === item.id;
              const IconComponent = item.icon;
              
              return (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-6 py-4 rounded-2xl transition-all duration-500 hover:scale-105 ${
                    isActive 
                      ? 'bg-terracotta/10 shadow-lg backdrop-blur-sm' 
                      : 'hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                      isScrolled 
                        ? isActive ? 'text-terracotta' : 'text-slate-600 group-hover:text-terracotta'
                        : isActive ? 'text-terracotta' : 'text-white/80 group-hover:text-white'
                    }`} />
                    <span className={`font-medium text-lg transition-all duration-300 ${
                      isScrolled 
                        ? isActive ? 'text-terracotta' : 'text-slate-700 group-hover:text-terracotta'
                        : isActive ? 'text-terracotta' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Luxury underline */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-terracotta via-orange-400 to-amber-500 rounded-full transition-all duration-500 ${
                    isActive ? 'w-12 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-60'
                  }`} />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-terracotta/20 via-orange-400/20 to-amber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl ${
                    isActive ? 'opacity-30' : ''
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Ultra Premium CTA Buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className={`group relative overflow-hidden border-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 ${
                isScrolled 
                  ? 'border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white hover:border-terracotta shadow-lg'
                  : 'border-white/30 text-white hover:bg-white hover:text-slate-800 hover:border-white backdrop-blur-sm'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">Nous Appeler</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-terracotta via-orange-500 to-amber-600 hover:from-orange-600 hover:via-red-500 hover:to-amber-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-[0_12px_40px_rgba(213,89,49,0.4)] hover:shadow-[0_16px_50px_rgba(213,89,49,0.6)]"
            >
              <div className="flex items-center space-x-3 relative z-10">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                <span className="font-bold tracking-wide">Réserver Maintenant</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>

          {/* Ultra Premium Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden p-4 rounded-2xl transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'bg-terracotta/10 hover:bg-terracotta/20' 
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <div className="relative">
              {isOpen ? (
                <X size={28} className={`transition-all duration-300 ${
                  isScrolled ? 'text-terracotta' : 'text-white'
                }`} />
              ) : (
                <Menu size={28} className={`transition-all duration-300 ${
                  isScrolled ? 'text-terracotta' : 'text-white'
                }`} />
              )}
            </div>
          </button>
        </div>

        {/* Ultra Premium Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-terracotta/20 shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-fade-in">
            <div className="px-8 py-10 space-y-2">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeItem === item.id;
                
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group w-full text-left p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                      isActive 
                        ? 'bg-terracotta/10 shadow-lg' 
                        : 'hover:bg-terracotta/5 hover:shadow-md'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-terracotta/20 text-terracotta' 
                          : 'bg-slate-100 text-slate-600 group-hover:bg-terracotta/20 group-hover:text-terracotta'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`text-xl font-medium transition-colors duration-300 ${
                        isActive 
                          ? 'text-terracotta' 
                          : 'text-slate-700 group-hover:text-terracotta'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
              
              <div className="pt-8 space-y-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="w-full border-2 border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white py-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Nous Appeler
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-terracotta via-orange-500 to-amber-600 text-white py-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  Réserver Maintenant
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
