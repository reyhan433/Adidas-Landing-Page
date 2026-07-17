'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { footerColumns } from '@/data/products';
import Container from '../ui/Container';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/adidas' },
  { label: 'Facebook', href: 'https://facebook.com/adidas' },
  { label: 'Twitter', href: 'https://twitter.com/adidas' },
  { label: 'YouTube', href: 'https://youtube.com/adidas' },
  { label: 'TikTok', href: 'https://tiktok.com/@adidas' },
];

const Footer: React.FC = () => {
  const [expandedColumn, setExpandedColumn] = useState<string | null>(null);

  const toggleColumn = (title: string) => {
    setExpandedColumn(expandedColumn === title ? null : title);
  };

  return (
    <footer className="bg-black text-white">
      <Container size="xl">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <div className="hidden sm:block">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                    {column.title}
                  </h3>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:hidden">
                  <button
                    onClick={() => toggleColumn(column.title)}
                    className="flex items-center justify-between w-full py-3 border-b border-gray-800"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      {column.title}
                    </h3>
                    {expandedColumn === column.title ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  {expandedColumn === column.title && (
                    <ul className="space-y-2 py-3">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-700 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span className="text-xs font-bold">{social.label[0]}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lg">🇮🇩</span>
                <select className="bg-transparent text-white text-sm border border-gray-700 rounded px-3 py-1 focus:outline-none focus:border-white">
                  <option value="id">Indonesia</option>
                  <option value="sg">Singapore</option>
                  <option value="my">Malaysia</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
            <p className="text-xs text-gray-500">
              © 2024 adidas Indonesia. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;