import React, { useEffect, useState } from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import ProductSection from '../components/home/ProductSection';
import BrandsSection from '../components/home/BrandsSection';
import BlogSection from '../components/home/BlogSection';
import { Product } from '../types';
import { fetchNewProducts, fetchDeals } from '../api/products';

const HomePage = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [deals, setDeals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const newProductsData = await fetchNewProducts();
        const dealsData = await fetchDeals();
        
        setNewProducts(newProductsData);
        setDeals(dealsData);
      } catch (error) {
        console.error('Error loading homepage data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }
  
  return (
    <div>
      <HeroCarousel />
      
      <ProductSection title="NOUVEAUX PRODUITS" products={newProducts} viewAllLink="/new-products" />
      
      <BrandsSection />
      
      <ProductSection title="DEALS" products={deals} viewAllLink="/deals" />
      
      <BlogSection />
    </div>
  );
};

export default HomePage;