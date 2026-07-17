'use client';

import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-black text-white text-center py-2 text-xs sm:text-sm font-medium tracking-wider uppercase">
      <p>
        FREE SHIPPING & RETURNS |{' '}
        <a href="/adiclub" className="underline hover:text-gray-300 transition-colors">
          JOIN adiClub
        </a>
      </p>
    </div>
  );
};

export default TopBanner;