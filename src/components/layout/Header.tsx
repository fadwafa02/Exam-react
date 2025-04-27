import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, ShoppingCart, User, Search, Phone, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import NavBar from './NavBar';

const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 hover:text-blue-500">Se connecter</button>
          <button className="text-gray-600 hover:text-blue-500">Compte</button>
        </div>
        <div className="hidden md:flex items-center text-gray-600">
          <Phone size={16} className="mr-2 text-teal-500" />
          <span className="font-semibold">70 287 775</span>
          <span className="ml-2 text-xs text-gray-500">24/7 Support Online</span>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="bg-teal-500 rounded-full p-2 mr-2">
              <Camera size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Splash</span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Search Bar */}
        <div className="order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0 md:mx-4 lg:flex-1 lg:max-w-xl">
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Rechercher dans notre catalogue" 
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-teal-500">
              <Search size={20} />
            </button>
          </div>
        </div>
        
        {/* Cart */}
        <div className="order-2 md:order-3 flex items-center">
          <Link to="/cart" className="flex items-center p-2 hover:text-teal-500 relative">
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
            <div className="ml-2 hidden md:block">
              <div className="text-xs">PANIER</div>
              <div className="text-sm font-semibold">{cartItemsCount} article - {cartTotal} TND</div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Navigation */}
      <NavBar isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;