
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Image - Moroccan Architecture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1920&h=1080&fit=crop&q=80')`
        }}
      />
      
      {/* Elegant Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 via-transparent to-desert/30" />
      
      {/* Premium Content Container */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Premium Logo Badge */}
          <div className="inline-flex items-center space-x-4 bg-white/15 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-terracotta via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl tracking-wider">EV</span>
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold tracking-wide">Événement Voyage</h1>
              <p className="text-lg opacity-90 font-medium">Agence de voyages premium • Rabat</p>
            </div>
          </div>

          {/* Main Hero Title */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Découvrez le
              <span className="block bg-gradient-to-r from-terracotta via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Maroc Authentique
              </span>
            </h2>
            
            {/* Premium Subtitle */}
            <p className="text-xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto opacity-95">
              Voyages sur mesure, événements d'exception et expériences inoubliables
              <span className="block mt-3 text-lg md:text-xl text-terracotta font-medium">
                ✨ Votre partenaire de confiance depuis 2013
              </span>
            </p>
          </div>
          
          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-terracotta to-orange-600 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20"
            >
              <span className="flex items-center space-x-3">
                <span>Réservez maintenant</span>
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('apropos')}
              variant="outline"
              className="border-3 border-white/50 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-10 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 hover:scale-105"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 pt-8 opacity-90">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Excellence certifiée</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-sm font-medium">
              <span className="text-terracotta font-bold">1000+</span> clients satisfaits
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-sm font-medium">
              <span className="text-terracotta font-bold">10 ans</span> d'expérience
            </div>
          </div>
        </div>
        
        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('apropos')}
            className="group text-white hover:text-terracotta transition-all duration-300 flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium opacity-75 group-hover:opacity-100">Découvrir</span>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Elements for Premium Feel */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-terracotta/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-32 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-orange-400/25 rounded-full blur-lg animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
