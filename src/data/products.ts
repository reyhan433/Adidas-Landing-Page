import { Product, Category, HeroSlide, NavItem, CollectionItem, FooterColumn } from '@/types';

export const navItems: NavItem[] = [
  {
    label: 'Men',
    href: '/men',
    children: [
      { label: 'Shoes', href: '/men/shoes' },
      { label: 'Clothing', href: '/men/clothing' },
      { label: 'Accessories', href: '/men/accessories' },
      { label: 'New Arrivals', href: '/men/new' },
    ],
  },
  {
    label: 'Women',
    href: '/women',
    children: [
      { label: 'Shoes', href: '/women/shoes' },
      { label: 'Clothing', href: '/women/clothing' },
      { label: 'Accessories', href: '/women/accessories' },
      { label: 'New Arrivals', href: '/women/new' },
    ],
  },
  {
    label: 'Kids',
    href: '/kids',
  },
  {
    label: 'Sports',
    href: '/sports',
    children: [
      { label: 'Running', href: '/sports/running' },
      { label: 'Football', href: '/sports/football' },
      { label: 'Basketball', href: '/sports/basketball' },
    ],
  },
  {
    label: 'Brands',
    href: '/brands',
  },
  {
    label: 'Sale',
    href: '/sale',
  },
];

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'UNLOCK YOUR POTENTIAL',
    subtitle: 'New Ultraboost Light — our lightest Ultraboost ever.',
    ctaText: 'SHOP NOW',
    ctaLink: '/ultraboost',
    // Gambar pelari yang lebih stabil dan epic
    backgroundImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&q=80', 
  },
  {
    id: '2',
    title: 'ORIGINALS ARE BACK',
    subtitle: 'The Samba. The Gazelle. The Campus. Icons reborn.',
    ctaText: 'EXPLORE',
    ctaLink: '/originals',
    backgroundImage: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&q=80',
  },
  {
    id: '3',
    title: 'MADE FOR ATHLETES',
    subtitle: 'Performance gear engineered for those who push beyond limits.',
    ctaText: 'SHOP MEN',
    ctaLink: '/men',
    backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80',
  },
];

export const categories: Category[] = [
  {
    id: 'men',
    name: 'MEN',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80',
    link: '/men',
  },
  {
    id: 'women',
    name: 'WOMEN',
    image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800&q=80',
    link: '/women',
  },
  {
    id: 'kids',
    name: 'KIDS',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80',
    link: '/kids',
  },
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Ultraboost Light Shoes',
    price: 3200000,
    // Sepatu running modern (mirip Ultraboost)
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80', 
    category: 'Running',
    colors: ['#000000', '#FFFFFF', '#FF0000'],
    badge: 'NEW',
    isNew: true,
  },
  {
    id: '2',
    name: 'Samba OG Shoes',
    price: 1800000,
    // Sepatu classic retro (mirip Samba/Gazelle)
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80', 
    category: 'Originals',
    colors: ['#FFFFFF', '#000000', '#006400'],
    badge: 'BESTSELLER',
  },
  {
    id: '3',
    name: 'Gazelle Bold Shoes',
    price: 1600000,
    originalPrice: 2000000,
    // Sepatu pink/bold (mirip Gazelle Bold)
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80', 
    category: 'Originals',
    colors: ['#FF69B4', '#FFFFFF', '#0000FF'],
    badge: 'SALE',
    isSale: true,
  },
  {
    id: '4',
    name: 'Superstar Shoes',
    price: 1500000,
    // Sepatu putih classic (mirip Superstar/Stan Smith)
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80', 
    category: 'Originals',
    colors: ['#FFFFFF', '#000000'],
  },
  {
    id: '5',
    name: 'Forum Low Shoes',
    price: 1700000,
    // Sepatu basket retro (mirip Forum)
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80', 
    category: 'Originals',
    colors: ['#FFFFFF', '#1E90FF', '#FF4500'],
    badge: 'NEW',
    isNew: true,
  },
  {
    id: '6',
    name: 'NMD_R1 Shoes',
    price: 2200000,
    // Sepatu streetwear modern (mirip NMD)
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80', 
    category: 'Originals',
    colors: ['#000000', '#808080', '#FFFFFF'],
  },
  {
    id: '7',
    name: 'Campus 00s Shoes',
    price: 1600000,
    // Sepatu chunky retro (mirip Campus 00s)
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80', 
    category: 'Originals',
    colors: ['#228B22', '#000000', '#8B4513'],
    badge: 'BESTSELLER',
  },
  {
    id: '8',
    name: 'Adizero Adios Pro 3',
    price: 3500000,
    originalPrice: 4000000,
    // Sepatu lari kompetisi (mirip Adizero)
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80', 
    category: 'Running',
    colors: ['#FF4500', '#000000', '#FFFFFF'],
    badge: 'SALE',
    isSale: true,
  },
];

export const collections: CollectionItem[] = [
  {
    id: '1',
    title: 'ULTRABOOST COLLECTION',
    description: 'Experience incredible energy return with every step.',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1000&q=80',
    ctaText: 'SHOP ULTRABOOST',
    ctaLink: '/ultraboost',
    layout: 'left',
  },
  {
    id: '2',
    title: 'ADIDAS ORIGINALS',
    description: 'From the archive to the street. Icons reborn.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&q=80',
    ctaText: 'SHOP ORIGINALS',
    ctaLink: '/originals',
    layout: 'right',
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'PRODUCTS',
    links: [
      { label: 'Men', href: '/men' },
      { label: 'Women', href: '/women' },
      { label: 'Kids', href: '/kids' },
      { label: 'Sale', href: '/sale' },
    ],
  },
  {
    title: 'SPORTS',
    links: [
      { label: 'Running', href: '/sports/running' },
      { label: 'Football', href: '/sports/football' },
      { label: 'Basketball', href: '/sports/basketball' },
    ],
  },
  {
    title: 'COLLECTIONS',
    links: [
      { label: 'Ultraboost', href: '/collections/ultraboost' },
      { label: 'Stan Smith', href: '/collections/stan-smith' },
      { label: 'Superstar', href: '/collections/superstar' },
    ],
  },
  {
    title: 'ABOUT',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
];