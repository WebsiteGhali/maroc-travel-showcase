
import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PremiumGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tout voir' },
    { id: 'desert', label: 'Désert et nature' },
    { id: 'culture', label: 'Culture et artisanat' },
    { id: 'pilgrimage', label: 'Pèlerinage' },
    { id: 'business', label: 'Voyages d\'affaires' },
    { id: 'team', label: 'Activités en équipe' }
  ];

  const images = [
    {
      url: '/lovable-uploads/168cad03-9d59-4594-b4e6-489aaaffd695.png',
      title: 'Dunes du Sahara',
      description: 'Les majestueuses dunes du désert marocain',
      category: 'desert'
    },
    {
      url: '/lovable-uploads/636124a2-2751-4340-91f9-a154ddd450f1.png',
      title: 'Zellige traditionnel',
      description: 'Art de la mosaïque marocaine ancestrale',
      category: 'culture'
    },
    {
      url: '/lovable-uploads/46a86e4e-745b-43b3-9693-f44861a3b922.png',
      title: 'Thé à la menthe',
      description: 'Tradition marocaine du thé et pâtisseries',
      category: 'culture'
    },
    {
      url: '/lovable-uploads/3bdb0f78-33f6-4850-9968-a4e6c796abe4.png',
      title: 'Pyramides d\'Égypte',
      description: 'Découverte des trésors d\'Égypte',
      category: 'pilgrimage'
    },
    {
      url: '/lovable-uploads/6225dd99-7a14-4ea6-85a7-9f811ebb82f8.png',
      title: 'Chefchaouen',
      description: 'La perle bleue du Maroc',
      category: 'desert'
    },
    // Additional premium images
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=90',
      title: 'Séminaire premium',
      description: 'Événements d\'entreprise haut de gamme',
      category: 'business'
    },
    {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=90',
      title: 'Team building',
      description: 'Activités de cohésion en équipe',
      category: 'team'
    },
    {
      url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop&q=90',
      title: 'La Mecque',
      description: 'Pèlerinage spirituel encadré',
      category: 'pilgrimage'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section id="galerie" className="py-32 bg-gradient-to-br from-sand via-cream to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20 16c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z'/%3E%3C/g%3E%3C/svg%3E")`}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-deep-blue mb-8 font-playfair">
            Notre <span className="premium-text-gradient">Galerie</span>
          </h2>
          <div className="w-32 h-2 premium-gradient mx-auto mb-12 rounded-full"></div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Découvrez la beauté du Maroc et de nos destinations à travers ces images authentiques
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'premium-gradient text-white shadow-2xl scale-105'
                  : 'bg-white/80 text-deep-blue hover:bg-white border-2 border-terracotta/20 hover:border-terracotta'
              }`}
            >
              <Filter className="w-5 h-5 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer premium-card"
              onClick={() => setSelectedImage(image.url)}
            >
              <div 
                className="h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2 font-playfair">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
              
              {/* Premium Badge */}
              <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xs font-medium">Premium</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-terracotta transition-colors z-10 w-12 h-12 glass-effect rounded-full flex items-center justify-center"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery" 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-3xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PremiumGallery;
