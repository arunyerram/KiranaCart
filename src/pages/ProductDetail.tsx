
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft, Truck, Shield, RefreshCw, Star, Plus, Minus, Heart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import ProductGrid from '@/components/products/ProductGrid';
import { toast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === id));
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  
  useEffect(() => {
    // Update product if URL parameter changes
    setProduct(products.find(p => p.id === id));
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      quantity,
      unit: product.unit
    });
    
    toast({
      title: "Added to Cart",
      description: `${quantity} × ${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const discountPercentage = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100) 
    : 0;

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-kirana-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-kirana-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/categories/${product.category}`} className="hover:text-kirana-primary capitalize">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium line-clamp-1">{product.name}</span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Product Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover aspect-square"
              />
              
              {product.isOnSale && (
                <Badge className="absolute top-4 left-4 bg-kirana-accent text-white px-3 py-1.5">
                  {discountPercentage}% OFF
                </Badge>
              )}
              
              <button 
                className="absolute top-4 right-4 bg-white p-2 rounded-full text-gray-600 hover:text-red-500 transition-colors shadow-sm"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="w-full lg:w-3/5">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={16} 
                    className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">4.0 (24 reviews)</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              {product.salePrice ? (
                <>
                  <span className="text-2xl font-bold text-kirana-primary">₹{product.salePrice}</span>
                  <span className="text-lg text-gray-500 line-through">₹{product.price}</span>
                  <Badge className="bg-kirana-accent text-white">Save ₹{product.price - product.salePrice}</Badge>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  Category: <span className="font-medium capitalize">{product.category}</span>
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  Unit: <span className="font-medium">{product.unit}</span>
                </span>
                <span className={`px-3 py-1 rounded-full ${
                  product.stock > 10 
                    ? 'bg-green-100 text-green-800' 
                    : product.stock > 0 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-red-100 text-red-800'
                }`}>
                  {product.stock > 10 
                    ? 'In Stock' 
                    : product.stock > 0 
                      ? `Only ${product.stock} left` 
                      : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <Input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-16 text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-kirana-primary hover:bg-kirana-dark text-white py-6"
                  disabled={product.stock <= 0}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
              
              <div className="text-sm space-y-3">
                <div className="flex items-center text-gray-700">
                  <Truck size={16} className="text-kirana-primary mr-2" />
                  <span>Free delivery on orders above ₹500</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Shield size={16} className="text-kirana-primary mr-2" />
                  <span>100% Authentic Products</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <RefreshCw size={16} className="text-kirana-primary mr-2" />
                  <span>Easy returns within 24 hours of delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
