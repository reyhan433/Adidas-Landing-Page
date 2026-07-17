import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CategoryGrid from '@/components/sections/CategoryGrid';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import CollectionShowcase from '@/components/sections/CollectionShowcase';
import BrandStory from '@/components/sections/BrandStory';
import AdiClubBanner from '@/components/sections/AdiClubBanner';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <CollectionShowcase />
      <BrandStory />
      <AdiClubBanner />
      <Newsletter />
      <Footer />
    </main>
  );
}