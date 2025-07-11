
import React, { useState } from 'react';
import { Plane, Building, Globe, MapPin, Users, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PremiumServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Plane,
      title: "Vols",
      description: "Réservation de vols selon vos dates, budget et préférences. Accès à un large réseau de compagnies.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=90",
      features: ["Compagnies premium", "Tarifs négociés", "Assistance 24/7"]
    },
    {
      icon: Building,
      title: "Hôtels",
      description: "Sélection rigoureuse d'hôtels au Maroc et à l'international : luxe, charme, familial, selon vos besoins.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=90",
      features: ["Hôtels 4-5 étoiles", "Vues panoramiques", "Service personnalisé"]
    },
    {
      icon: Globe,
      title: "Voyages organisés",
      description: "Packs complets (vol + hôtel + activités), pour couples, familles ou groupes. Planification clé en main.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&q=90",
      features: ["Circuits sur mesure", "Guides expérimentés", "Groupe limité"]
    },
    {
      icon: MapPin,
      title: "Omra & Hajj",
      description: "Accompagnement spirituel, hébergements proches des lieux saints, encadrement logistique total.",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop&q=90",
      features: ["Hébergement proche", "Guide spirituel", "Groupe encadré"]
    },
    {
      icon: Users,
      title: "Événementiel pro",
      description: "Organisation de séminaires, congrès, salons, conférences : lieux, transport, matériel, restauration.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=90",
      features: ["Lieux prestigieux", "Équipement professionnel", "Restauration haut de gamme"]
    },
    {
      icon: Handshake,
      title: "Team Building",
      description: "Activités de cohésion : défis, nature, culture, sport… au Maroc ou à l'étranger.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=90",
      features: ["Activités originales", "Encadrement expert", "Résultats mesurables"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-cream via-sand to-desert relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-deep-blue mb-8 font-playfair">
            Nos <span className="premium-text-gradient">Services</span>
          </h2>
          <div className="w-32 h-2 premium-gradient mx-auto mb-12 rounded-full"></div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Une expertise complète pour tous vos projets de voyage et d'événementiel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 premium-card border-0 overflow-hidden cursor-pointer ${
                activeService === index ? 'ring-4 ring-terracotta/50 shadow-3xl' : ''
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <CardHeader className="p-0 relative">
                <div 
                  className="h-72 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 z-10">
                    <div className="w-16 h-16 premium-gradient rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 glass-effect px-4 py-2 rounded-xl">
                    <span className="text-white font-medium text-sm">Premium</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <CardTitle className="text-2xl font-bold text-deep-blue mb-4 group-hover:text-terracotta transition-colors duration-300 font-playfair">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 premium-gradient rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect rounded-3xl p-12 backdrop-blur-sm border border-white/30">
          <h3 className="text-3xl font-bold text-deep-blue mb-6 font-playfair">
            Prêt à planifier votre prochain voyage ?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Notre équipe d'experts vous accompagne dans la création d'expériences sur mesure
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="premium-gradient hover:shadow-3xl text-white px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 transform hover:scale-105"
          >
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
