
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { toast } from '@/components/ui/use-toast';
import { CreditCard, Smartphone, ArrowRight } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState('qr');
  
  const totalAmount = total();
  const deliveryCharge = totalAmount > 500 ? 0 : 40;
  const grandTotal = totalAmount + deliveryCharge;
  
  const handlePayment = () => {
    toast({
      title: "Payment Successful!",
      description: "Your order has been placed successfully.",
    });
    
    setTimeout(() => {
      clearCart();
      navigate('/feedback');
    }, 1500);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <Layout>
      <div className="bg-kirana-light py-6">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900">Payment</h1>
          <p className="text-gray-600 mt-2">Complete your purchase</p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Select Payment Method</h2>
              
              <RadioGroup 
                value={paymentMethod} 
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-4 cursor-pointer hover:border-kirana-primary transition-colors">
                  <RadioGroupItem value="qr" id="payment-qr" />
                  <Label htmlFor="payment-qr" className="flex items-center cursor-pointer">
                    <Smartphone size={18} className="mr-2 text-kirana-primary" />
                    <span>QR Code Payment (UPI)</span>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-4 cursor-pointer hover:border-kirana-primary transition-colors">
                  <RadioGroupItem value="card" id="payment-card" />
                  <Label htmlFor="payment-card" className="flex items-center cursor-pointer">
                    <CreditCard size={18} className="mr-2 text-kirana-primary" />
                    <span>Credit/Debit Card</span>
                  </Label>
                </div>
              </RadioGroup>
              
              {paymentMethod === 'qr' && (
                <div className="mt-6 border-t border-gray-200 pt-6 text-center">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Scan the QR code below to pay through any UPI app
                    </p>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 inline-block">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                        alt="Payment QR Code" 
                        className="w-48 h-48 mx-auto"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    UPI ID: kiranastore@upi
                  </p>
                  <p className="text-lg font-semibold mt-4">
                    Amount: ₹{grandTotal.toFixed(2)}
                  </p>
                </div>
              )}
              
              {paymentMethod === 'card' && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    You will be redirected to a secure payment gateway to complete your payment.
                  </p>
                </div>
              )}
              
              <Button 
                onClick={handlePayment}
                className="w-full mt-6 bg-kirana-primary hover:bg-kirana-dark text-white"
              >
                Pay ₹{grandTotal.toFixed(2)}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="bg-white rounded-lg shadow-sm sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                        <div className="text-sm text-gray-500">
                          {item.quantity} × ₹{item.price.toFixed(2)}
                        </div>
                        <div className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 pt-3">
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
                  
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center text-sm text-gray-500">
                <p>Secure payment processed by our payment partners</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">UPI</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Credit Cards</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Debit Cards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
