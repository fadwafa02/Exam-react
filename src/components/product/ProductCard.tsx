import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 group transition-transform hover:-translate-y-1">
      {product.isNew && (
        <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
          NOUVEAU
        </div>
      )}
      
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="relative pb-[100%] overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
          />
        </div>
        
        {/* Wishlist button */}
        <button 
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={18} />
        </button>
        
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 h-10">
            {product.name}
          </h3>
          
          <div className="mt-2 mb-4">
            <span className="text-lg font-bold text-gray-900">{product.price.toFixed(2)} TND</span>
          </div>
          
          <div className="mt-auto flex space-x-2">
            <button 
              onClick={handleAddToCart}
              className="flex items-center justify-center flex-1 px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart size={16} className="mr-2" />
              <span className="whitespace-nowrap overflow-hidden">AJOUTER AU PANIER</span>
            </button>
            <button className="hidden p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;