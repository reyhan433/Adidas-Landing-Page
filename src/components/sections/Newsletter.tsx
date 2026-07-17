'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Container from '../ui/Container';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isConsent, setIsConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isConsent) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter and be the first to know about new products.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-black bg-white text-sm focus:outline-none focus:border-gray-500 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Subscribe
                </button>
              </div>

              <label className="flex items-start gap-3 mt-4 text-left cursor-pointer">
                <input
                  type="checkbox"
                  checked={isConsent}
                  onChange={(e) => setIsConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 border-black accent-black"
                  required
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  I agree to receive marketing emails from adidas.
                </span>
              </label>
            </form>
          ) : (
            <div className="py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-bold">Thank you for subscribing!</p>
              <p className="text-gray-500 text-sm mt-2">
                Check your inbox for a welcome message.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;