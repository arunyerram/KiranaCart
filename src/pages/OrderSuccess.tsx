
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();
  
  // If no items were in cart, redirect to home
  useEffect(() => {
    if (items.length > 0) {
      // This would be a real order in a production app
      console.log("Order placed with items:", items);
    }
  }, [items]);

  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 text-kirana-primary">
            <CheckCircle size={80} className="mx-auto" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for shopping with KiranaCart. Your order has been placed and will be delivered soon.
            You will receive an order confirmation email shortly.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 text-kirana-primary mb-4">
              <ShoppingBag size={24} />
              <span className="text-lg font-semibold">Order #KIR12345</span>
            </div>
            
            <div className="text-left border-t border-gray-200 pt-4">
              <p className="flex justify-between py-2">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-medium">
                  {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </p>
              <p className="flex justify-between py-2">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium">Credit Card</span>
              </p>
              <p className="flex justify-between py-2">
                <span className="text-gray-600">Order Status</span>
                <span className="text-green-600 font-medium">Processing</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild variant="outline" className="border-kirana-primary text-kirana-primary hover:bg-kirana-light">
              <Link to="/orders">
                View My Orders
              </Link>
            </Button>
            
            <Button asChild className="bg-kirana-primary hover:bg-kirana-dark text-white">
              <Link to="/">
                Continue Shopping
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
