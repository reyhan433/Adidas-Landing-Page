'use client';

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const BrandStory: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&q=80"
          alt="Brand Campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container size="xl">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-6">
            IMPOSSIBLE IS NOTHING
          </p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-tight mb-8">
            Through sport, we have the power to change lives
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            We believe in the power of sport to create positive change.
          </p>

          <Button variant="white" size="lg" href="/campaign">
            EXPLORE THE COLLECTION
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BrandStory;