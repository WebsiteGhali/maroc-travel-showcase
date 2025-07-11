
import React, { useEffect } from 'react';
import PremiumNavigation from '@/components/PremiumNavigation';
import PremiumHero from '@/components/PremiumHero';
import PremiumServices from '@/components/PremiumServices';
import PremiumAbout from '@/components/PremiumAbout';
import DiscoverMorocco from '@/components/DiscoverMorocco';
import PremiumGallery from '@/components/PremiumGallery';
import Testimonials from '@/components/Testimonials';
import PremiumContact from '@/components/PremiumContact';
import PremiumFooter from '@/components/PremiumFooter';

const Index = () => {
  useEffect(() => {
    // Enhanced smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Advanced Intersection Observer for premium animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          
          // Add staggered animations for child elements
          const children = entry.target.querySelectorAll('.slide-up');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('fade-in');
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
    fadeElements.forEach((el) => observer.observe(el));

    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      <PremiumHero />
      <PremiumServices />
      <PremiumAbout />
      <DiscoverMorocco />
      <PremiumGallery />
      <Testimonials />
      <PremiumContact />
      <PremiumFooter />
    </div>
  );
};

export default Index;
