
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Benali",
      role: "Directrice Marketing",
      company: "Tech Innovations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6c5?w=150&h=150&fit=crop&crop=face&q=90",
      rating: 5,
      text: "Événement Voyage a organisé notre séminaire annuel à Marrakech. L'organisation était parfaite, l'équipe professionnelle et les prestations de très haute qualité. Nos collaborateurs gardent un souvenir mémorable de cette expérience.",
      service: "Événementiel Professionnel"
    },
    {
      name: "Ahmed Tazi",
      role: "Chef d'Entreprise",
      company: "Atlas Construction",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=90",
      rating: 5,
      text: "Notre voyage de noces organisé par Événement Voyage était absolument magique. Chaque détail était pensé, du transport aux hébergements de luxe. Merci pour cette lune de miel inoubliable !",
      service: "Voyage de Luxe"
    },
    {
      name: "Fatima El Alami",
      role: "Consultante",
      company: "International Business",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=90",
      rating: 5,
      text: "Mon pèlerinage à La Mecque avec Événement Voyage s'est déroulé dans d'excellentes conditions. L'encadrement spirituel et logistique était remarquable. Je recommande vivement leurs services.",
      service: "Omra & Hajj"
    },
    {
      name: "Omar Benjelloun",
      role: "Directeur RH",
      company: "Groupe Financier",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=90",
      rating: 5,
      text: "Le team building organisé par Événement Voyage a dépassé toutes nos attentes. Les activités étaient innovantes et ont réellement renforcé la cohésion de nos équipes. Un investissement qui en valait la peine !",
      service: "Team Building"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-deep-blue via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-terracotta to-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-playfair">
            Témoignages <span className="premium-text-gradient">Clients</span>
          </h2>
          <div className="w-32 h-2 premium-gradient mx-auto mb-12 rounded-full"></div>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Découvrez ce que nos clients disent de leurs expériences avec Événement Voyage
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="glass-effect rounded-3xl p-12 mb-12 border border-white/20 relative overflow-hidden">
            <div className="absolute top-8 left-8 text-6xl text-terracotta/30">
              <Quote />
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-32 h-32 rounded-full shadow-2xl border-4 border-terracotta/50"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-2xl leading-relaxed mb-6 font-light italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-terracotta mb-1">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-lg opacity-75 mb-2">
                    {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                  </p>
                  <span className="inline-block glass-effect px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[activeTestimonial].service}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-white/30 hover:border-terracotta text-white hover:bg-terracotta/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'premium-gradient w-12'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-white/30 hover:border-terracotta text-white hover:bg-terracotta/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Mini Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {testimonials.filter((_, index) => index !== activeTestimonial).slice(0, 3).map((testimonial, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto shadow-xl mb-4"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h5 className="font-bold text-terracotta mb-1">{testimonial.name}</h5>
                <p className="text-sm opacity-75">{testimonial.service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
