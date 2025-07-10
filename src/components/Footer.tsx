
import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-terracotta to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">EV</span>
              </div>
              <span className="text-xl font-bold">Événement Voyage</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Votre agence de voyages spécialisée depuis 2013. Découvrez le Maroc authentique 
              et créez des souvenirs inoubliables avec nous.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-terracotta" />
                <span className="text-sm text-gray-300">Rue Al Hind, Rabat, Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-terracotta" />
                <span className="text-sm text-gray-300">05 37 29 29 01</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-terracotta" />
                <span className="text-sm text-gray-300">admin@evenementvoyage.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block text-gray-300 hover:text-terracotta transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="block text-gray-300 hover:text-terracotta transition-colors"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('maroc')}
                className="block text-gray-300 hover:text-terracotta transition-colors"
              >
                Découvrir le Maroc
              </button>
              <button 
                onClick={() => scrollToSection('evenements')}
                className="block text-gray-300 hover:text-terracotta transition-colors"
              >
                Nos Services
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="block text-gray-300 hover:text-terracotta transition-colors"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-terracotta transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos services</h3>
            <div className="space-y-2 text-gray-300">
              <p>• Vols internationaux</p>
              <p>• Réservation d'hôtels</p>
              <p>• Voyages organisés</p>
              <p>• Omra et Hajj</p>
              <p>• Événements sur mesure</p>
              <p>• Voyages d'affaires</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            © 2024 Événement Voyage. Tous droits réservés. 
            <span className="flex items-center gap-1">
              Fait avec <Heart size={16} className="text-terracotta" /> à Rabat
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
