import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import { products } from '../data/products';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Simple search filter
  const searchResults = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Header */}
      <section className="bg-neutral-50 py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-display font-bold text-center mb-8">
              Search
            </h1>

            {/* Search Input */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-6 py-4 pr-12 border border-neutral-300 focus:border-black focus:outline-none text-lg"
                autoFocus
              />
              <IoSearch size={24} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12">
        <div className="container-custom">
          {searchQuery && (
            <p className="text-neutral-600 mb-8">
              {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{searchQuery}"
            </p>
          )}

          {!searchQuery ? (
            <div className="text-center text-neutral-600 py-16">
              <p>Start typing to search for products</p>
            </div>
          ) : searchResults.length > 0 ? (
            <ProductGrid>
              {searchResults.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </ProductGrid>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg mb-4">
                No products found for "{searchQuery}"
              </p>
              <p className="text-neutral-500">
                Try searching with different keywords
              </p>
            </div>
          )}
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

export default Search;
