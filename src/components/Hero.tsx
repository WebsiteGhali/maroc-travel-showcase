
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/636124a2-2751-4340-91f9-a154ddd450f1.png')`
        }}
      />
      
      {/* Moroccan Pattern Overlay */}
      <div className="absolute inset-0 moroccan-pattern opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">EV</span>
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold">Événement Voyage</h1>
                <p className="text-sm opacity-90">Agence de voyages - Rabat</p>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez le Maroc
            <span className="block text-terracotta">Authentique</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Voyages sur mesure, événements uniques et expériences inoubliables
            <span className="block mt-2">depuis 2013</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-terracotta hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Réservez maintenant
            </Button>
            <Button 
              onClick={() => scrollToSection('apropos')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('apropos')}
            className="text-white hover:text-terracotta transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
