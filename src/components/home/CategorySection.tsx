
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategorySection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">Shop by Category</h2>
        <p className="text-gray-600 text-center mb-8">Explore our wide range of products</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.id}`}
              className="bg-white rounded-lg shadow-sm p-4 text-center transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-kirana-light rounded-full flex items-center justify-center mx-auto mb-3">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
