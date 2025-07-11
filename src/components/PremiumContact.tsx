
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const PremiumContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    objet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nom || !formData.prenom || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    console.log('Form submitted:', formData);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({
      nom: '',
      prenom: '',
      email: '',
      objet: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: "Rue Al Hind, Rabat, Maroc",
      color: "from-terracotta to-orange-500"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+212 5 37 29 29 01",
      color: "from-gold to-amber-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "admin@evenementvoyage.com",
      color: "from-desert to-sand"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lun-Ven: 9h-18h • Sam: 9h-13h",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-sand via-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-terracotta/10 to-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-desert/10 to-amber-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-deep-blue mb-8 font-playfair">
            Contactez-<span className="premium-text-gradient">nous</span>
          </h2>
          <div className="w-32 h-2 premium-gradient mx-auto mb-12 rounded-full"></div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Prêt à planifier votre prochain voyage ? Notre équipe d'experts est là pour vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-deep-blue mb-8 font-playfair">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-deep-blue mb-2">{info.title}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="glass-effect p-8 rounded-3xl border border-terracotta/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-deep-blue">Contact WhatsApp</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Besoin d'une réponse rapide ? Contactez-nous directement sur WhatsApp
              </p>
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-2xl font-semibold text-lg">
                Écrire sur WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="premium-card p-12 shadow-3xl">
              <h3 className="text-3xl font-bold text-deep-blue mb-8 font-playfair flex items-center">
                <Send className="w-8 h-8 mr-4 text-terracotta" />
                Envoyez-nous un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="prenom" className="block text-lg font-semibold text-deep-blue mb-3">
                      Prénom *
                    </label>
                    <Input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-terracotta transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-lg font-semibold text-deep-blue mb-3">
                      Nom *
                    </label>
                    <Input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-terracotta transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-deep-blue mb-3">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-terracotta transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="objet" className="block text-lg font-semibold text-deep-blue mb-3">
                    Objet
                  </label>
                  <Input
                    type="text"
                    id="objet"
                    name="objet"
                    value={formData.objet}
                    onChange={handleChange}
                    className="w-full h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-terracotta transition-colors"
                    placeholder="Sujet de votre demande"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-deep-blue mb-3">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full text-lg rounded-xl border-2 border-gray-200 focus:border-terracotta transition-colors resize-none"
                    placeholder="Décrivez votre projet de voyage ou événement..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full premium-gradient hover:shadow-3xl text-white py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-105"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mt-20 glass-effect rounded-3xl p-2 shadow-2xl">
          <div className="bg-gradient-to-br from-terracotta/20 to-gold/20 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-terracotta mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-deep-blue mb-2">Notre localisation</h4>
              <p className="text-gray-600">Carte Google Maps intégrée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumContact;
