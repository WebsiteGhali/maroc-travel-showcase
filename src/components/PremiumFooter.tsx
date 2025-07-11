
import React from 'react';
import { MapPin, Phone, Mail, Heart, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const PremiumFooter = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    "Vols internationaux",
    "Réservation d'hôtels",
    "Voyages organisés",
    "Omra et Hajj",
    "Événements sur mesure",
    "Team Building"
  ];

  const quickLinks = [
    { label: "Accueil", id: "accueil" },
    { label: "Services", id: "services" },
    { label: "À propos", id: "apropos" },
    { label: "Découvrir le Maroc", id: "maroc" },
    { label: "Galerie", id: "galerie" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" }
  ];

  return (
    <footer className="bg-gradient-to-br from-deep-blue via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-terracotta to-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta via-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-xl">EV</span>
              </div>
              <div>
                <span className="text-3xl font-bold font-playfair">Événement Voyage</span>
                <div className="text-terracotta font-medium">Premium Travel Agency</div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mb-8 opacity-90 max-w-md">
              Depuis plus de 10 ans, nous créons des expériences de voyage uniques au Maroc et au-delà. 
              Votre satisfaction est notre priorité absolue.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">Rue Al Hind, Rabat, Maroc</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">+212 5 37 29 29 01</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">admin@evenementvoyage.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-playfair">Liens rapides</h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <button 
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-lg opacity-80 hover:opacity-100 hover:text-terracotta transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-playfair">Nos services</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 premium-gradient rounded-full"></div>
                  <span className="text-lg opacity-80">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 font-playfair">Suivez-nous</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 glass-effect rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-bold mb-4 font-playfair">Newsletter</h4>
              <p className="text-lg opacity-80 mb-4">Recevez nos offres exclusives</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-terracotta backdrop-blur-sm"
                />
                <button className="premium-gradient px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-lg opacity-80 flex items-center justify-center gap-3">
            © 2024 Événement Voyage. Tous droits réservés. 
            <span className="flex items-center gap-2">
              Fait avec <Heart size={20} className="text-terracotta animate-pulse" /> à Rabat
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-6 text-sm opacity-60">
            <a href="#" className="hover:text-terracotta transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-terracotta transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-terracotta transition-colors">CGV</a>
            <a href="#" className="hover:text-terracotta transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
