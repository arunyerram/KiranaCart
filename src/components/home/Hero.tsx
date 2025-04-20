
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-kirana-light to-white">
      <div className="container-custom py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-kirana-primary font-medium mb-2">Quality Groceries at Your Doorstep</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Daily Essentials from <span className="text-kirana-primary">Kirana</span><span className="text-kirana-accent">Cart</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Fresh vegetables, groceries, and daily essentials delivered to your home with just a few clicks. Shop smart, save time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-kirana-primary hover:bg-kirana-dark text-white px-6 py-6">
                <Link to="/products">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-kirana-primary text-kirana-primary hover:bg-kirana-light px-6 py-6">
                <Link to="/offers">
                  View Offers
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e" 
              alt="Fresh groceries" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
            <div className="absolute -top-5 -right-5 bg-kirana-accent text-white rounded-full p-4 shadow-lg animate-bounce-light hidden md:block">
              <span className="font-bold">Up to</span><br />
              <span className="text-2xl font-bold">30% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
