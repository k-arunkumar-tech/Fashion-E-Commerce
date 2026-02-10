import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import { Button } from '../components/Button';
import ServiceFeatures from '../components/ServiceFeatures';
import Testimonials from '../components/Testimonials';
import { getFeaturedProducts, getNewArrivals, getBestSellers } from '../data/products';
import { collections } from '../data/collections';
import { products } from '../data/products';

const Home = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'New Collection',
      subtitle: 'Spring/Summer 2026',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600',
      link: '/collections',
    },
    {
      title: 'Premium Quality',
      subtitle: 'Timeless Elegance',
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1600',
      link: '/products/men',
    },
  ];

  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            className={`absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl tracking-wider-2 mb-4"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8"
                >
                  {slide.title}
                </motion.h1>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to={slide.link}>
                    <Button variant="secondary" className="px-8 py-4">
                      Shop Now
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-12 h-1 transition-all
                ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'}
              `}
            />
          ))}
        </div>
      </section>

      {/* Service Features */}
      <ServiceFeatures />

      {/* Featured Collections */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Collections
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover our carefully curated collections for every occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm mb-4">{collection.description}</p>
                  <Link to="/collections" className="text-sm uppercase tracking-wider underline">
                    Explore
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              New Arrivals
            </h2>
            <p className="text-neutral-600">
              Fresh styles just landed
            </p>
          </motion.div>

          <ProductGrid>
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </ProductGrid>

          <div className="text-center mt-12">
            <Link to="/collections">
              <Button variant="outline">
                View All New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-wider-2 mb-4">LIMITED TIME OFFER</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Get 25% Off Your First Order
            </h2>
            <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
              Sign up for our newsletter and receive an exclusive discount on your first purchase
            </p>
            <Link to="/register">
              <Button variant="secondary">
                Sign Up Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Best Sellers
            </h2>
            <p className="text-neutral-600">
              Our most loved pieces
            </p>
          </motion.div>

          <ProductGrid>
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </ProductGrid>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
    </div>
  );
};

export default Home;
