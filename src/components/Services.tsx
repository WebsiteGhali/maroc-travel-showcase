import React from 'react';
import { Plane, Building, Globe, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Vols",
      description: "Réservez un vol vers la destination de vos rêves. Nous vous trouvons les meilleurs départs selon votre budget et vos envies.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"
    },
    {
      icon: Building,
      title: "Hôtels",
      description: "Des hôtels soigneusement sélectionnés pour votre confort, votre budget, et vos envies de détente ou d'aventure.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    },
    {
      icon: Globe,
      title: "Voyage organisé",
      description: "Partez l'esprit tranquille : vol + hôtel adaptés à votre destination, vos dates et votre budget. Nous vous accompagnons dans chaque étape de votre voyage.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
    },
    {
      icon: MapPin,
      title: "Omra et Hajj",
      description: "Organisation complète de votre pèlerinage. Vols, hébergement proche des lieux saints et assistance dédiée. Un voyage spirituel dans les meilleures conditions.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="evenements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos <span className="text-terracotta">Services</span>
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des voyages sur mesure adaptés à vos besoins, vos envies et votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="p-0">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg relative overflow-hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-800 mb-3 group-hover:text-terracotta transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
