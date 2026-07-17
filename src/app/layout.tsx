import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'adidas Indonesia | Official Website',
  description: 'Shop the latest adidas shoes, clothing & accessories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}