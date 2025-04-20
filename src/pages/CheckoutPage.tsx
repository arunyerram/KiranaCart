
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useCartStore } from '@/store/cartStore';
import { ArrowRight, CreditCard, Landmark, Smartphone } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, total } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const totalAmount = total();
  const deliveryCharge = totalAmount > 500 ? 0 : 40;
  const grandTotal = totalAmount + deliveryCharge;
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    navigate('/payment');
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <Layout>
      <div className="bg-kirana-light py-6">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your shipping information</p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Information */}
            <div className="flex-grow space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="fullName">Full Name*</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address*</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="address">Address*</Label>
                  <Textarea 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInputChange} 
                    placeholder="Enter your full address"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City*</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleInputChange} 
                      placeholder="City"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State*</Label>
                    <Input 
                      id="state" 
                      name="state" 
                      value={formData.state} 
                      onChange={handleInputChange} 
                      placeholder="State"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code*</Label>
                    <Input 
                      id="zipCode" 
                      name="zipCode" 
                      value={formData.zipCode} 
                      onChange={handleInputChange} 
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-6">Payment Method</h2>
                
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-4 cursor-pointer hover:border-kirana-primary transition-colors">
                    <RadioGroupItem value="card" id="payment-card" />
                    <Label htmlFor="payment-card" className="flex items-center cursor-pointer">
                      <CreditCard size={18} className="mr-2 text-kirana-primary" />
                      <span>Credit/Debit Card</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-4 cursor-pointer hover:border-kirana-primary transition-colors">
                    <RadioGroupItem value="upi" id="payment-upi" />
                    <Label htmlFor="payment-upi" className="flex items-center cursor-pointer">
                      <Smartphone size={18} className="mr-2 text-kirana-primary" />
                      <span>UPI Payment</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-4 cursor-pointer hover:border-kirana-primary transition-colors">
                    <RadioGroupItem value="cod" id="payment-cod" />
                    <Label htmlFor="payment-cod" className="flex items-center cursor-pointer">
                      <Landmark size={18} className="mr-2 text-kirana-primary" />
                      <span>Cash on Delivery</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="w-full lg:w-96">
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
                    
                    <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <Button 
                    type="submit"
                    className="w-full bg-kirana-primary hover:bg-kirana-dark text-white"
                  >
                    Continue to Payment
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
