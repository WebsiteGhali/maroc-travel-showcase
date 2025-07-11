
import React from 'react';
import { Users, Award, Heart, Star, Trophy, Globe2 } from 'lucide-react';

const PremiumAbout = () => {
  const stats = [
    { icon: Award, label: "Années d'expérience", value: "+10", color: "from-terracotta to-orange-500" },
    { icon: Users, label: "Clients satisfaits", value: "1000+", color: "from-gold to-amber-500" },
    { icon: Heart, label: "Voyages organisés", value: "500+", color: "from-desert to-sand" },
    { icon: Star, label: "Note moyenne", value: "4.9/5", color: "from-amber-500 to-yellow-500" },
    { icon: Trophy, label: "Événements réussis", value: "300+", color: "from-orange-500 to-red-500" },
    { icon: Globe2, label: "Destinations", value: "50+", color: "from-teal-500 to-cyan-500" }
  ];

  return (
    <section id="apropos" className="py-32 bg-gradient-to-br from-white via-cream to-sand relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-desert/10 to-amber-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-deep-blue mb-8 font-playfair">
            À propos d'<span className="premium-text-gradient">Événement Voyage</span>
          </h2>
          <div className="w-32 h-2 premium-gradient mx-auto mb-12 rounded-full"></div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Une histoire d'excellence et de passion au service de vos voyages
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <div className="space-y-12">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-deep-blue mb-6 font-playfair flex items-center">
                <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                Notre Histoire
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Créée en <strong className="text-terracotta">2013 à Rabat</strong>, Événement Voyage est une agence marocaine de référence 
                dans l'organisation de voyages sur mesure et d'événements professionnels. Notre équipe expérimentée 
                conçoit chaque projet comme une expérience unique, en conjuguant rigueur, inspiration et hospitalité marocaine.
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-3xl font-bold text-deep-blue mb-6 font-playfair flex items-center">
                <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                Nos Valeurs
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-effect p-6 rounded-2xl">
                  <h4 className="font-bold text-terracotta mb-2">Excellence</h4>
                  <p className="text-gray-600">Un service irréprochable dans chaque détail</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl">
                  <h4 className="font-bold text-terracotta mb-2">Authenticité</h4>
                  <p className="text-gray-600">L'hospitalité marocaine traditionnelle</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl">
                  <h4 className="font-bold text-terracotta mb-2">Innovation</h4>
                  <p className="text-gray-600">Des expériences créatives et modernes</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl">
                  <h4 className="font-bold text-terracotta mb-2">Confiance</h4>
                  <p className="text-gray-600">Transparence et fiabilité garanties</p>
                </div>
              </div>
            </div>

            <div className="fade-in glass-effect p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-deep-blue mb-4 font-playfair">Notre Engagement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                💼 Basée à Rabat • 👥 Groupes & entreprises • 🕋 Agréée Hajj & Omra
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div 
                className="h-64 rounded-3xl shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/6225dd99-7a14-4ea6-85a7-9f811ebb82f8.png')`
                }}
              />
              <div 
                className="h-64 rounded-3xl shadow-2xl bg-cover bg-center mt-12"
                style={{
                  backgroundImage: `url('/lovable-uploads/636124a2-2751-4340-91f9-a154ddd450f1.png')`
                }}
              />
            </div>
            <div 
              className="h-48 rounded-3xl shadow-2xl bg-cover bg-center -mt-6"
              style={{
                backgroundImage: `url('/lovable-uploads/168cad03-9d59-4594-b4e6-489aaaffd695.png')`
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center slide-up group">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-deep-blue mb-3 font-playfair">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumAbout;
