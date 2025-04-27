import { Product } from '../types';

// This would be replaced with actual API calls in a real application
const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'BATTERIE PATONA F1163 POUR CANON LP-E19 (7.4V 3500MAH)',
    price: 37.819,
    image: 'https://images.pexels.com/photos/3602958/pexels-photo-3602958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'batteries',
    isNew: true,
    description: 'High-capacity battery replacement for Canon LP-E19. Perfect for extended shooting sessions.'
  },
  {
    id: '2',
    name: 'CHARGEUR DOUBLE PATONA 1992',
    price: 42.517,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'accessories',
    isNew: true,
    description: 'Dual battery charger for efficient charging of multiple batteries simultaneously.'
  },
  {
    id: '3',
    name: 'CHARGEUR PATONA DOUBLE 1970',
    price: 50.42,
    image: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'accessories',
    isNew: true,
    description: 'Premium dual battery charger with LED indicators and fast-charging capabilities.'
  },
  {
    id: '4',
    name: 'CHARGEUR PORTABLE PATONA 1724',
    price: 50.42,
    image: 'https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'accessories',
    isNew: true,
    description: 'Portable charger for on-the-go photographers, compact and reliable.'
  },
  {
    id: '5',
    name: 'SONY A7 IV Full-Frame Camera Body',
    price: 2499.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cameras',
    description: 'Professional full-frame mirrorless camera with advanced autofocus and 4K video capabilities.'
  },
  {
    id: '6',
    name: 'Canon EOS R6 Mark II',
    price: 2299.00,
    image: 'https://images.pexels.com/photos/1787234/pexels-photo-1787234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cameras',
    description: 'High-performance full-frame mirrorless camera with exceptional low-light shooting capabilities.'
  },
  {
    id: '7',
    name: 'Manfrotto MVH502A Fluid Video Head',
    price: 209.99,
    image: 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tripods',
    description: 'Professional fluid video head for smooth panning and tilting movements.'
  },
  {
    id: '8',
    name: 'GODOX SL-60W LED Video Light',
    price: 139.00,
    image: 'https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'lighting',
    description: 'Powerful LED video light with adjustable brightness and color temperature.'
  },
];

// Simulate API calls with promises and timeout
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchNewProducts = async (): Promise<Product[]> => {
  await delay(800); // Simulate API delay
  return dummyProducts.filter(product => product.isNew);
};

export const fetchDeals = async (): Promise<Product[]> => {
  await delay(500); // Simulate API delay
  // For demo, returning a subset of products as "deals"
  return dummyProducts.filter((_, index) => index % 2 === 0);
};

export const getProductById = async (id: string): Promise<Product> => {
  await delay(600); // Simulate API delay
  const product = dummyProducts.find(p => p.id === id);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return product;
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(700); // Simulate API delay
  // If no actual category match, return all products for demo
  const matchedProducts = dummyProducts.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
  
  return matchedProducts.length > 0 ? matchedProducts : dummyProducts;
};