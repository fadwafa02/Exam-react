import React from 'react';
import { ArrowLeft, ArrowRight, ShoppingCart, Heart } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { Product } from '../../types';

type ProductSectionProps = {
  title: string;
  products: Product[];
  viewAllLink?: string;
};

const ProductSection: React.FC<ProductSectionProps> = ({ title, products, viewAllLink }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold uppercase">{title}</h2>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ArrowLeft size={18} />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {viewAllLink && (
          <div className="mt-6 text-center">
            <a 
              href={viewAllLink} 
              className="inline-block px-6 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition-colors"
            >
              View All Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;