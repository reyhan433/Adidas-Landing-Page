'use client';

import React from 'react';
import { collections } from '@/data/products';
import Container from '../ui/Container';
import Button from '../ui/Button';
import clsx from 'clsx';

const CollectionShowcase: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container size="full">
        <div className="space-y-8 sm:space-y-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={clsx(
                'grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] lg:min-h-[600px]',
              )}
            >
              <div className={clsx(
                'relative overflow-hidden h-[300px] lg:h-full',
                collection.layout === 'right' && 'lg:order-2'
              )}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className={clsx(
                'flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-white',
                collection.layout === 'right' && 'lg:order-1'
              )}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-4">
                  {collection.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  {collection.description}
                </p>
                <Button variant="primary" href={collection.ctaLink}>
                  {collection.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CollectionShowcase;