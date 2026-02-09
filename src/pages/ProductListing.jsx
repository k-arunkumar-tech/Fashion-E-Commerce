import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import FilterSidebar from '../components/FilterSidebar';
import { Select } from '../components/Select';

const ProductListing = () => {
  const { category } = useParams();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  const categoryProducts = category ? getProductsByCategory(category) : products;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
  ];

  return (
    <div>
      {/* Breadcrumbs & Hero */}
      <section className="bg-neutral-50 py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="text-sm text-neutral-600 mb-4">
              Home / {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}
            </nav>
            <h1 className="text-4xl font-display font-bold capitalize">
              {category || 'All Products'}
            </h1>
          </motion.div>
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
                  {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'}
                </p>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  options={sortOptions}
                  className="w-full sm:w-64"
                />
              </div>

              {/* Product Grid */}
              {categoryProducts.length > 0 ? (
                <ProductGrid>
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </ProductGrid>
              ) : (
                <div className="text-center py-16">
                  <p className="text-neutral-600 text-lg">
                    No products found in this category
                  </p>
                </div>
              )}
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

export default ProductListing;
