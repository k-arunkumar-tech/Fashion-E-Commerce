import { motion } from 'framer-motion';
import { useState } from 'react';
import { collections } from '../data/collections';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import FilterSidebar from '../components/FilterSidebar';
import { Select } from '../components/Select';

const Collections = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 bg-neutral-900 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-300"
          >
            Curated styles for every occasion
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xl font-display font-bold mb-6">Filters</h2>
                <FilterSidebar />
              </div>
            </aside>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Sort & Count */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <p className="text-neutral-600">
                  Showing {products.length} products
                </p>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  options={sortOptions}
                  className="w-full sm:w-64"
                />
              </div>

              {/* Product Grid */}
              <ProductGrid>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </ProductGrid>
            </div>
          </div>
        </div>
      </section>

      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
    </div>
  );
};

export default Collections;
