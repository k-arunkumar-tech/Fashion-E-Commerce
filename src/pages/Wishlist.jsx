import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoTrash, IoCart } from 'react-icons/io5';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/Button';
import ProductGrid from '../components/ProductGrid';
import { Badge } from '../components/Badge';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    // For wishlist, we'll add with default values
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'One Size';
    const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : 'Default';
    addToCart(product, defaultSize, defaultColor, 1);
    alert(`${product.name} added to cart!`);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-display font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-neutral-600 mb-8">
              Save items you love to your wishlist and they'll appear here.
            </p>
            <Link to="/collections">
              <Button variant="primary">Start Shopping</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-50 py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold">My Wishlist</h1>
          <p className="text-neutral-600 mt-2">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="py-12">
        <div className="container-custom">
          <ProductGrid>
            {wishlistItems.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100 mb-4">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge variant={product.badge === 'Sale' ? 'sale' : 'new'}>
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white hover:bg-red-50 text-red-600 transition-colors shadow-md"
                  >
                    <IoTrash size={20} />
                  </button>
                </div>

                <div className="space-y-3">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium hover:text-neutral-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button
                    onClick={() => handleAddToCart(product)}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <IoCart size={18} />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </ProductGrid>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
