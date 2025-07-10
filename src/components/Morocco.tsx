
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Camera, Star } from 'lucide-react';

const Morocco = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="maroc" className="py-20 bg-gradient-to-br from-desert to-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Découvrir le <span className="text-terracotta">Maroc</span>
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Explorez des destinations uniques et créez des souvenirs inoubliables
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Le Maroc vous attend avec ses paysages époustouflants, sa culture millénaire 
                et son hospitalité légendaire. De Marrakech aux dunes du Sahara, de Fès 
                à Chefchaouen, chaque destination révèle des trésors authentiques.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center slide-up">
                <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Destinations</h4>
                <p className="text-gray-600 text-sm">Villes impériales, désert, montagnes</p>
              </div>
              
              <div className="text-center slide-up">
                <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Expériences</h4>
                <p className="text-gray-600 text-sm">Visites guidées authentiques</p>
              </div>
              
              <div className="text-center slide-up">
                <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Qualité</h4>
                <p className="text-gray-600 text-sm">Service premium garanti</p>
              </div>
            </div>

            <div className="fade-in">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-terracotta hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Planifier mon voyage
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('/lovable-uploads/168cad03-9d59-4594-b4e6-489aaaffd695.png')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Sahara Marocain</h4>
                <p className="text-lg opacity-90">Une expérience magique vous attend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Morocco;
