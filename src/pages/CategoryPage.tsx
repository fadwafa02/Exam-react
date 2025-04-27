import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown, ChevronRight } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { Product } from '../types';
import { fetchProductsByCategory } from '../api/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    const loadProducts = async () => {
      if (!category) return;
      
      try {
        setLoading(true);
        const productsData = await fetchProductsByCategory(category);
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, [category]);
  
  const sortProducts = (option: string) => {
    setSortOption(option);
    
    const sortedProducts = [...products];
    switch (option) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sortedProducts.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      default:
        break;
    }
    
    setProducts(sortedProducts);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }
  
  const formatCategoryName = (name: string | undefined) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-teal-500">Home</a>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-700">{formatCategoryName(category)}</span>
      </div>
      
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{formatCategoryName(category)}</h1>
        <p className="text-gray-600">Explore our range of {formatCategoryName(category)} products.</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Mobile Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-md"
          >
            <span className="font-medium flex items-center">
              <Filter size={18} className="mr-2" />
              Filters
            </span>
            <ChevronDown size={18} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Filters Sidebar */}
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="font-bold text-lg mb-4">Filters</h2>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="price-1" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="price-1" className="ml-2 text-sm text-gray-700">Under 50 TND</label>
                </div>
                <div className="flex items-center">
                  <input id="price-2" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="price-2" className="ml-2 text-sm text-gray-700">50 - 100 TND</label>
                </div>
                <div className="flex items-center">
                  <input id="price-3" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="price-3" className="ml-2 text-sm text-gray-700">100 - 200 TND</label>
                </div>
                <div className="flex items-center">
                  <input id="price-4" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="price-4" className="ml-2 text-sm text-gray-700">Above 200 TND</label>
                </div>
              </div>
            </div>
            
            {/* Brands */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Brands</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="brand-1" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="brand-1" className="ml-2 text-sm text-gray-700">Nikon</label>
                </div>
                <div className="flex items-center">
                  <input id="brand-2" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="brand-2" className="ml-2 text-sm text-gray-700">Canon</label>
                </div>
                <div className="flex items-center">
                  <input id="brand-3" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="brand-3" className="ml-2 text-sm text-gray-700">Sony</label>
                </div>
                <div className="flex items-center">
                  <input id="brand-4" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="brand-4" className="ml-2 text-sm text-gray-700">Panasonic</label>
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div>
              <h3 className="font-medium mb-3">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="avail-1" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="avail-1" className="ml-2 text-sm text-gray-700">In Stock</label>
                </div>
                <div className="flex items-center">
                  <input id="avail-2" type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="avail-2" className="ml-2 text-sm text-gray-700">Out of Stock</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Sort By */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              Showing <span className="font-medium">{products.length}</span> products
            </div>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm mr-2">Sort by:</label>
              <select 
                id="sort" 
                value={sortOption}
                onChange={(e) => sortProducts(e.target.value)}
                className="border-gray-300 rounded-md text-sm focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Products */}
          {products.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 bg-teal-500 text-white rounded-md text-sm hover:bg-teal-600">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;