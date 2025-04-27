import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 10 : 0; // Example shipping cost
  const total = subtotal + shipping;
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-8 text-gray-600">Add some products to your cart and come back here to check out.</p>
        <Link 
          to="/"
          className="inline-block px-8 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 bg-gray-50 p-4 text-sm font-medium text-gray-500">
              <div className="md:col-span-6">Product</div>
              <div className="md:col-span-2 text-center">Price</div>
              <div className="md:col-span-2 text-center">Quantity</div>
              <div className="md:col-span-2 text-center">Total</div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 md:grid md:grid-cols-12 md:items-center">
                  {/* Product */}
                  <div className="md:col-span-6 flex">
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Category: {item.category}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 flex items-center text-sm text-red-500 md:hidden"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="md:col-span-2 mt-4 md:mt-0 md:text-center">
                    <p className="text-sm font-medium text-gray-900 md:hidden">Price:</p>
                    <p className="text-sm font-medium text-gray-900">{item.price.toFixed(2)} TND</p>
                  </div>
                  
                  {/* Quantity */}
                  <div className="md:col-span-2 mt-4 md:mt-0 md:text-center">
                    <p className="text-sm font-medium text-gray-900 md:hidden">Quantity:</p>
                    <div className="flex justify-start md:justify-center">
                      <div className="flex border border-gray-300 rounded-md">
                        <button 
                          className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-12 text-center focus:outline-none"
                          min="1"
                        />
                        <button 
                          className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="md:col-span-2 mt-4 md:mt-0 md:text-center">
                    <p className="text-sm font-medium text-gray-900 md:hidden">Total:</p>
                    <p className="text-sm font-medium text-gray-900">{(item.price * item.quantity).toFixed(2)} TND</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="hidden md:inline-flex mt-2 items-center text-xs text-red-500"
                    >
                      <Trash2 size={12} className="mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 px-4 py-6">
              <div className="flex justify-between">
                <Link 
                  to="/"
                  className="flex items-center text-teal-600 hover:text-teal-700"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Continue Shopping
                </Link>
                <button 
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{subtotal.toFixed(2)} TND</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{shipping.toFixed(2)} TND</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>{total.toFixed(2)} TND</span>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="w-full py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600">
                Proceed to Checkout
              </button>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              <p>We accept:</p>
              <div className="mt-2 flex space-x-2">
                <span className="px-2 py-1 border border-gray-200 rounded">Visa</span>
                <span className="px-2 py-1 border border-gray-200 rounded">Mastercard</span>
                <span className="px-2 py-1 border border-gray-200 rounded">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;