
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Camera, Star, Compass, Mountain, Palmtree } from 'lucide-react';

const DiscoverMorocco = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    {
      icon: MapPin,
      title: "Villes Impériales",
      description: "Marrakech, Fès, Rabat, Meknès"
    },
    {
      icon: Mountain,
      title: "Atlas & Désert",
      description: "Montagnes majestueuses et dunes dorées"
    },
    {
      icon: Palmtree,
      title: "Côtes Atlantique",
      description: "Casablanca, Essaouira, Agadir"
    },
    {
      icon: Camera,
      title: "Patrimoine UNESCO",
      description: "Sites classés et monuments historiques"
    },
    {
      icon: Compass,
      title: "Circuits Authentiques",
      description: "Expériences culturelles immersives"
    },
    {
      icon: Star,
      title: "Hospitalité Légendaire",
      description: "Accueil chaleureux et traditions"
    }
  ];

  return (
    <section id="maroc" className="py-32 bg-gradient-to-br from-deep-blue via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-terracotta to-gold rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-desert to-sand rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-playfair">
            Découvrir le <span className="premium-text-gradient">Maroc</span>
          </h2>
          <div className="w-32 h-2 premium-gradient mx-auto mb-12 rounded-full"></div>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Le Maroc, terre d'accueil et de contrastes, vous invite à découvrir sa culture, 
            ses paysages, ses traditions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-12">
            <div className="fade-in">
              <h3 className="text-4xl font-bold mb-8 font-playfair">
                Une terre de <span className="text-terracotta">merveilles</span>
              </h3>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                De Marrakech à Fès, du désert au littoral, vivez un voyage sensoriel guidé par nos équipes. 
                Chaque région révèle ses secrets millénaires dans un écrin de beauté préservée.
              </p>
              
              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-2xl border border-white/20">
                  <h4 className="text-xl font-bold text-terracotta mb-3">Expériences Culturelles</h4>
                  <p className="opacity-80">Excursions culturelles, visites guidées, soirées traditionnelles, circuits à thème</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl border border-white/20">
                  <h4 className="text-xl font-bold text-terracotta mb-3">Authenticité Garantie</h4>
                  <p className="opacity-80">Rencontres avec les artisans, découverte des traditions locales</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="premium-gradient hover:shadow-3xl text-white px-10 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 transform hover:scale-105"
            >
              Planifier mon voyage au Maroc
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div 
              className="rounded-3xl shadow-3xl overflow-hidden h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('/lovable-uploads/168cad03-9d59-4594-b4e6-489aaaffd695.png')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-3xl font-bold mb-3 font-playfair">Sahara Marocain</h4>
                <p className="text-xl opacity-90">Une expérience magique vous attend</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center slide-up group">
              <div className="w-20 h-20 premium-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <highlight.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-terracotta font-playfair">{highlight.title}</h4>
              <p className="opacity-80 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverMorocco;
