import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Check, AlertTriangle, ChevronRight } from 'lucide-react';
import { getProductById } from '../api/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import ProductSection from '../components/home/ProductSection';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  
  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const productData = await getProductById(id);
        setProduct(productData);
        
        // Assume we also load related products
        // This would come from a real API
        const dummyRelated = []; // would be loaded from API
        setRelatedProducts(dummyRelated);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart({...product, quantity});
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <AlertTriangle size={48} className="mx-auto text-red-500 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <a href="/" className="inline-block px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
          Return to Home
        </a>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-teal-500">Home</a>
        <ChevronRight size={14} className="mx-2" />
        <a href={`/category/${product.category}`} className="hover:text-teal-500">{product.category}</a>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-700">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[400px] object-contain"
            />
          </div>
          
          {/* Thumbnails (placeholder for multiple images) */}
          <div className="flex space-x-2">
            <button 
              className={`border p-2 rounded-md ${activeImage === 0 ? 'border-teal-500' : 'border-gray-200'}`}
              onClick={() => setActiveImage(0)}
            >
              <img 
                src={product.image} 
                alt={`${product.name} thumbnail 1`} 
                className="w-16 h-16 object-contain"
              />
            </button>
            {/* Additional thumbnails would go here */}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">(12 Reviews)</span>
          </div>
          
          <div className="mb-6">
            <p className="text-3xl font-bold text-gray-900 mb-4">
              {product.price.toFixed(2)} TND
            </p>
            
            <div className="flex items-center text-sm text-green-600 mb-6">
              <Check size={16} className="mr-2" />
              <span>In Stock</span>
            </div>
            
            <div className="prose max-w-none mb-6">
              <p>{product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl."}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex border border-gray-300 rounded-md w-32">
              <button 
                className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-center focus:outline-none"
                min="1"
              />
              <button 
                className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 flex items-center justify-center"
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100">
              <Heart size={20} />
            </button>
          </div>
          
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="text-sm text-gray-600">
              <p className="mb-1"><strong>SKU:</strong> {product.id}</p>
              <p className="mb-1"><strong>Category:</strong> {product.category}</p>
              <p><strong>Tags:</strong> photography, camera, equipment</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <ProductSection title="RELATED PRODUCTS" products={relatedProducts} />
      )}
    </div>
  );
};

export default ProductPage;