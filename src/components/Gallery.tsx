
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: '/lovable-uploads/168cad03-9d59-4594-b4e6-489aaaffd695.png',
      title: 'Dunes du Sahara',
      description: 'Les majestueuses dunes du désert marocain'
    },
    {
      url: '/lovable-uploads/636124a2-2751-4340-91f9-a154ddd450f1.png',
      title: 'Zellige traditionnel',
      description: 'Art de la mosaïque marocaine ancestrale'
    },
    {
      url: '/lovable-uploads/46a86e4e-745b-43b3-9693-f44861a3b922.png',
      title: 'Thé à la menthe',
      description: 'Tradition marocaine du thé et pâtisseries'
    },
    {
      url: '/lovable-uploads/3bdb0f78-33f6-4850-9968-a4e6c796abe4.png',
      title: 'Pyramides d\'Égypte',
      description: 'Découverte des trésors d\'Égypte'
    },
    {
      url: '/lovable-uploads/6225dd99-7a14-4ea6-85a7-9f811ebb82f8.png',
      title: 'Chefchaouen',
      description: 'La perle bleue du Maroc'
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Notre <span className="text-terracotta">Galerie</span>
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la beauté du Maroc et de nos destinations à travers ces images authentiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div 
                className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-terracotta transition-colors z-10"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery" 
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
