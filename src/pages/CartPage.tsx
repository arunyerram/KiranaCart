
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCartStore();
  
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const totalAmount = total();
  const deliveryCharge = totalAmount > 500 ? 0 : 40;
  const grandTotal = totalAmount + deliveryCharge;
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild className="bg-kirana-primary hover:bg-kirana-dark text-white px-6">
              <Link to="/products">
                Start Shopping <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-kirana-light py-6">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          <p className="text-gray-600 mt-2">Review and checkout your items</p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Cart Items ({items.length})
                </h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearCart}
                  className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash size={14} className="mr-1" />
                  Clear Cart
                </Button>
              </div>
              
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.unit}</p>
                      <p className="font-semibold text-kirana-primary">₹{item.price}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="text-right sm:text-center min-w-[80px]">
                        <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remove item"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <Link to="/products" className="text-kirana-primary hover:text-kirana-dark inline-flex items-center">
                  <ArrowRight size={16} className="mr-2 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-lg shadow-sm sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Charge</span>
                    <span>
                      {deliveryCharge === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `₹${deliveryCharge.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {deliveryCharge > 0 && (
                    <div className="text-sm text-gray-500">
                      Add ₹{(500 - totalAmount).toFixed(2)} more for free delivery
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <Button asChild className="w-full bg-kirana-primary hover:bg-kirana-dark text-white mb-4">
                  <Link to="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  <p>We accept:</p>
                  <div className="flex justify-center space-x-2 mt-2">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">Credit Card</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">Debit Card</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">UPI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
