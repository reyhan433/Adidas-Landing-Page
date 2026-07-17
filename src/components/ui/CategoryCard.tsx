'use client';

import React from 'react';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <a
      href={category.link}
      className="relative block overflow-hidden aspect-[3/4] group"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider group-hover:-translate-y-2 transition-transform duration-300">
          {category.name}
        </h3>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-white text-sm font-bold uppercase tracking-wider border-b-2 border-white pb-1">
          Shop Now
        </span>
      </div>
    </a>
  );
};

export default CategoryCard;