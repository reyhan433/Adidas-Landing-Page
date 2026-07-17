'use client';

import React from 'react';
import { featuredProducts } from '@/data/products';
import ProductCard from '../ui/ProductCard';
import Container from '../ui/Container';
import Button from '../ui/Button';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
              Trending Now
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              The most popular styles right now
            </p>
          </div>
          <Button variant="outline" href="/best-sellers" className="mt-4 sm:mt-0">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;