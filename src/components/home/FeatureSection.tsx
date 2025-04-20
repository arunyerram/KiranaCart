
import React from 'react';
import { Truck, Clock, RefreshCw, BadgePercent } from 'lucide-react';

const features = [
  {
    icon: <Truck size={24} className="text-kirana-primary" />,
    title: 'Free Delivery',
    description: 'Free delivery for orders above ₹500'
  },
  {
    icon: <Clock size={24} className="text-kirana-primary" />,
    title: 'Same Day Delivery',
    description: 'Order before 2 PM for same day delivery'
  },
  {
    icon: <RefreshCw size={24} className="text-kirana-primary" />,
    title: 'Easy Returns',
    description: 'Easy return within 24 hours of delivery'
  },
  {
    icon: <BadgePercent size={24} className="text-kirana-primary" />,
    title: 'Best Prices',
    description: 'We offer competitive prices on all products'
  }
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center transition-all hover:shadow-md hover:border-kirana-primary">
              <div className="bg-kirana-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
