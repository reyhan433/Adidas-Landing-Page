'use client';

import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { navItems } from '@/data/products';
import TopBanner from './TopBanner';
import Container from '../ui/Container';
import clsx from 'clsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx('sticky top-0 z-50 transition-all duration-300 bg-white', isScrolled && 'shadow-md')}>
      <TopBanner />
      
      <Container size="xl">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="/" className="flex-shrink-0">
            <svg viewBox="0 0 100 60" className="h-10 w-auto" fill="currentColor">
              <path d="M10 50 L25 10 L35 10 L20 50 Z" />
              <path d="M25 50 L40 10 L50 10 L35 50 Z" />
              <path d="M40 50 L55 10 L65 10 L50 50 Z" />
              <text x="0" y="58" fontSize="8" fontWeight="bold" fontFamily="Arial">adidas</text>
            </svg>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold uppercase tracking-wide py-6 border-b-2 border-transparent hover:border-black transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </nav>
      </Container>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(4rem+28px)] bg-white z-40 overflow-y-auto">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block text-lg font-bold uppercase tracking-wide py-3 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block text-sm text-gray-500 py-1 hover:text-black transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;