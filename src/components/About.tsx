
import React from 'react';
import { Users, Award, Heart, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Clients satisfaits", value: "500+" },
    { icon: Award, label: "Années d'expérience", value: "11" },
    { icon: Heart, label: "Voyages organisés", value: "1000+" },
    { icon: Star, label: "Note moyenne", value: "4.9/5" }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-cream to-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            À propos d'<span className="text-terracotta">Événement Voyage</span>
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="fade-in">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Notre Histoire
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fondée en 2013 à Rabat, <strong>Événement Voyage</strong> est une agence de voyages 
                spécialisée dans l'organisation d'événements sur mesure et de voyages authentiques 
                au Maroc et vers les destinations saintes.
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Notre Engagement
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre engagement est de vous offrir des voyages uniques, alliant confort spirituel, 
                personnalisation et meilleur rapport qualité/prix. Découvrez le Maroc à travers nos 
                services touristiques, religieux, d'affaires et pour groupes.
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Notre Expertise
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Avec plus de 11 années d'expérience, notre équipe vous accompagne dans chaque étape 
                de votre voyage, de la planification à la réalisation, pour créer des souvenirs 
                inoubliables dans un cadre authentiquement marocain.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('/lovable-uploads/6225dd99-7a14-4ea6-85a7-9f811ebb82f8.png')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
