
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { products, categories, getSubCategories, SubCategory } from '@/data/products';
import { Filter, X } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
  const [language, setLanguage] = useState<'en' | 'hi' | 'te'>('en');
  const subCategories = getSubCategories();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    
    const subCategoryParam = searchParams.get('subCategory');
    if (subCategoryParam) {
      setSelectedSubCategories([subCategoryParam]);
    }
    
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }

    const lang = searchParams.get('language');
    if (lang && ['en', 'hi', 'te'].includes(lang)) {
      setLanguage(lang as 'en' | 'hi' | 'te');
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...products];
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.nameHi && product.nameHi.includes(searchTerm)) ||
        (product.nameTe && product.nameTe.includes(searchTerm))
      );
    }
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    if (selectedSubCategories.length > 0) {
      filtered = filtered.filter(product => 
        product.subCategory && selectedSubCategories.includes(product.subCategory)
      );
    }
    
    filtered = filtered.filter(product => {
      const price = product.salePrice || product.price;
      return price >= priceRange.min && price <= priceRange.max;
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategories, selectedSubCategories, priceRange]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleSubCategoryChange = (subCategoryId: string) => {
    setSelectedSubCategories(prev => {
      if (prev.includes(subCategoryId)) {
        return prev.filter(id => id !== subCategoryId);
      } else {
        return [...prev, subCategoryId];
      }
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setPriceRange({ min: 0, max: 300 });
    setSearchParams({});
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchParams.set('search', searchTerm);
    searchParams.set('language', language);
    setSearchParams(searchParams);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleLanguageChange = (lang: 'en' | 'hi' | 'te') => {
    setLanguage(lang);
    searchParams.set('language', lang);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="bg-kirana-light py-6">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
          <p className="text-gray-600 mt-2">Browse our collection of fresh groceries and staples</p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:hidden flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">{filteredProducts.length} products</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleFilters}
              className="flex items-center"
            >
              <Filter size={16} className="mr-2" />
              Filters
            </Button>
          </div>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 lg:w-72 flex-shrink-0`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-kirana-primary"
                >
                  Clear All
                </Button>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Search</h3>
                <form onSubmit={handleSearch}>
                  <div className="flex gap-2 mb-3">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-grow"
                    />
                    <Button type="submit" variant="outline" size="icon">
                      <Filter size={16} />
                    </Button>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <Button 
                      type="button" 
                      size="sm"
                      variant={language === 'en' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('en')}
                      className="flex-1"
                    >
                      English
                    </Button>
                    <Button 
                      type="button" 
                      size="sm"
                      variant={language === 'hi' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('hi')}
                      className="flex-1"
                    >
                      हिन्दी
                    </Button>
                    <Button 
                      type="button" 
                      size="sm"
                      variant={language === 'te' ? 'default' : 'outline'}
                      onClick={() => handleLanguageChange('te')}
                      className="flex-1"
                    >
                      తెలుగు
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Sub Categories</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {subCategories.map((subCategory: SubCategory) => (
                    <div key={subCategory.id} className="flex items-center">
                      <Checkbox
                        id={`subCategory-${subCategory.id}`}
                        checked={selectedSubCategories.includes(subCategory.id)}
                        onCheckedChange={() => handleSubCategoryChange(subCategory.id)}
                      />
                      <label
                        htmlFor={`subCategory-${subCategory.id}`}
                        className="ml-2 text-sm font-medium leading-none"
                      >
                        {subCategory.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Input
                    type="number"
                    min="0"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value) || 0})}
                    className="w-full"
                  />
                  <span>-</span>
                  <Input
                    type="number"
                    min="0"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value) || 0})}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mt-6 md:hidden">
                <Button onClick={toggleFilters} className="w-full">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <>
                <div className="hidden md:flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-500">{filteredProducts.length} products</span>
                  <div className="flex items-center gap-2">
                    {selectedCategories.length > 0 && (
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                        <span className="mr-1">{selectedCategories.length} categories</span>
                        <button onClick={() => setSelectedCategories([])} className="text-gray-500">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                    {selectedSubCategories.length > 0 && (
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                        <span className="mr-1">{selectedSubCategories.length} subcategories</span>
                        <button onClick={() => setSelectedSubCategories([])} className="text-gray-500">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                    {searchTerm && (
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                        <span className="mr-1">"{searchTerm}"</span>
                        <button onClick={() => {
                          setSearchTerm('');
                          searchParams.delete('search');
                          setSearchParams(searchParams);
                        }} className="text-gray-500">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try changing your filters or search term</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
