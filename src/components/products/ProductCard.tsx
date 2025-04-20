
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      quantity: 1,
      unit: product.unit
    });
  };

  const discountPercentage = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        
        {product.isOnSale && (
          <div className="absolute top-2 left-2 bg-kirana-accent text-white text-xs font-semibold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </div>
        )}
        
        <button 
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-600 hover:text-red-500 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-medium text-gray-900 hover:text-kirana-primary mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="text-sm text-gray-500 mb-2">{product.unit}</div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {product.salePrice ? (
              <>
                <span className="text-lg font-semibold text-kirana-primary">₹{product.salePrice}</span>
                <span className="text-sm text-gray-500 line-through ml-2">₹{product.price}</span>
              </>
            ) : (
              <span className="text-lg font-semibold text-gray-900">₹{product.price}</span>
            )}
          </div>
          
          {product.stock > 0 ? (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">In Stock</span>
          ) : (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Out of Stock</span>
          )}
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-kirana-primary hover:bg-kirana-dark text-white"
          disabled={product.stock <= 0}
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
