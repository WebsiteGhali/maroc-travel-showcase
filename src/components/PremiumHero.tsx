
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Star, ArrowRight } from 'lucide-react';

const PremiumHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1920&h=1080&fit=crop&q=80')`,
          transform: isLoaded ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* Elegant Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 via-transparent to-desert/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-gold/20 to-terracotta/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-32 w-40 h-40 bg-gradient-to-br from-amber-400/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-br from-desert/25 to-sand/25 rounded-full blur-2xl animate-pulse delay-500" />

      {/* Premium Content Container */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`space-y-12 transition-all duration-2000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Premium Brand Badge */}
          <div className="inline-flex items-center space-x-6 glass-effect rounded-3xl px-10 py-6 border border-white/30 shadow-premium backdrop-blur-md">
            <div className="w-20 h-20 bg-gradient-to-br from-terracotta via-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-2xl tracking-wider">EV</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-wide font-playfair">Événement Voyage</h1>
              <p className="text-xl opacity-90 font-medium">Agence de voyages premium • Rabat</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-amber-400 font-medium">Excellence certifiée</span>
              </div>
            </div>
          </div>

          {/* Main Hero Title */}
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight font-playfair">
              Voyagez
              <span className="block bg-gradient-to-r from-terracotta via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Autrement
              </span>
            </h2>
            
            {/* Premium Subtitle */}
            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-2xl md:text-4xl font-light leading-relaxed opacity-95 font-playfair">
                Depuis plus de 10 ans, nous créons des expériences uniques au Maroc et au-delà
              </p>
              <p className="text-lg md:text-xl text-terracotta font-medium glass-effect inline-block px-6 py-3 rounded-2xl">
                ✨ Confort • Inspiration • Excellence
              </p>
            </div>
          </div>
          
          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group premium-gradient hover:shadow-3xl text-white px-12 py-8 rounded-3xl text-2xl font-semibold transition-all duration-700 transform hover:scale-110 shadow-2xl border-2 border-white/20 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-4">
                <span>Réservez maintenant</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="group border-3 border-white/60 text-white hover:bg-white/20 hover:border-white glass-effect px-12 py-8 rounded-3xl text-2xl font-semibold transition-all duration-700 hover:scale-110 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-4">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Découvrir nos services</span>
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-90">
            <div className="glass-effect px-6 py-4 rounded-2xl">
              <div className="text-3xl font-bold text-terracotta">+10</div>
              <div className="text-sm font-medium">Années d'expérience</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-2xl">
              <div className="text-3xl font-bold text-terracotta">1000+</div>
              <div className="text-sm font-medium">Clients satisfaits</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-2xl">
              <div className="text-3xl font-bold text-terracotta">500+</div>
              <div className="text-sm font-medium">Voyages organisés</div>
            </div>
            <div className="glass-effect px-6 py-4 rounded-2xl">
              <div className="text-3xl font-bold text-terracotta">Agréée</div>
              <div className="text-sm font-medium">Hajj & Omra</div>
            </div>
          </div>
        </div>
        
        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('services')}
            className="group text-white hover:text-terracotta transition-all duration-500 flex flex-col items-center space-y-3"
          >
            <span className="text-lg font-medium opacity-75 group-hover:opacity-100 transition-opacity">Découvrir</span>
            <div className="animate-bounce group-hover:animate-pulse">
              <ChevronDown className="w-10 h-10 group-hover:scale-125 transition-transform duration-500" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
