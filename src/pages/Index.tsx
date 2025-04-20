
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import FeatureSection from '@/components/home/FeatureSection';
import ProductGrid from '@/components/products/ProductGrid';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.filter(product => product.isFeatured);
  const onSaleProducts = products.filter(product => product.isOnSale);

  return (
    <Layout>
      <Hero />
      <CategorySection />
      <div className="container-custom py-12">
        <ProductGrid products={featuredProducts} title="Featured Products" />
        <div className="my-12 border-t border-gray-200"></div>
        <ProductGrid products={onSaleProducts} title="Special Offers" />
      </div>
      <FeatureSection />
    </Layout>
  );
};

export default Index;
