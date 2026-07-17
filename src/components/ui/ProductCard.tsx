'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Product } from '@/types';
import clsx from 'clsx';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {product.badge && (
          <span className={clsx(
            'absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase',
            product.badge === 'NEW' && 'bg-black text-white',
            product.badge === 'SALE' && 'bg-red-600 text-white',
            product.badge === 'BESTSELLER' && 'bg-gray-600 text-white'
          )}>
            {product.badge}
          </span>
        )}

        <button
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            size={18}
            className={clsx(
              'transition-colors duration-200',
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-black'
            )}
          />
        </button>
      </div>

      <div className="mt-3 space-y-1">
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1">
            {product.colors.map((color, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <h3 className="text-sm font-medium text-black group-hover:underline cursor-pointer">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500 uppercase">{product.category}</p>

        <div className="flex items-center gap-2">
          <span className={clsx('text-sm font-bold', product.isSale && 'text-red-600')}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;