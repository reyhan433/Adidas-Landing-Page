'use client';

import React from 'react';
import { Truck, Star, Gift, Lock } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const benefits = [
  { icon: Truck, title: 'Free Shipping', description: 'Free standard shipping on all orders' },
  { icon: Star, title: 'Exclusive Access', description: 'Members-only products and early access' },
  { icon: Gift, title: 'Member Rewards', description: 'Earn points and redeem for rewards' },
  { icon: Lock, title: 'Member Prices', description: 'Exclusive discounts for members' },
];

const AdiClubBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mb-4">
            JOIN adiClub
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Sign up for free. Join the community. Get rewarded.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/30 mb-4">
                <benefit.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wide mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="white" size="lg" href="/adiclub/join">
            JOIN NOW — IT&apos;S FREE
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AdiClubBanner;