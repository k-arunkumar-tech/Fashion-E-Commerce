import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoHeart,IoHeartOutline } from 'react-icons/io5';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/collections" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    alert('Added to cart!');
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <section className="bg-neutral-50 py-4">
        <div className="container-custom">
          <nav className="text-sm text-neutral-600">
            <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / {product.name}
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              {/* Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      aspect-[3/4] overflow-hidden border-2 transition-colors
                      ${selectedImage === index ? 'border-black' : 'border-transparent'}
                    `}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {product.badge && (
                <div className="mb-4">
                  <Badge variant={product.badge === 'Sale' ? 'sale' : 'new'}>
                    {product.badge}
                  </Badge>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-semibold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-neutral-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-8 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-neutral-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-neutral-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">
                    Color: {selectedColor && <span className="font-normal text-neutral-600">{selectedColor}</span>}
                  </label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`
                          w-10 h-10 rounded-full border-2 transition-all
                          ${selectedColor === color ? 'border-black scale-110' : 'border-neutral-300'}
                        `}
                        style={{
                          backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                         color.toLowerCase() === 'black' ? '#000000' :
                                         color.toLowerCase() === 'navy' ? '#001f3f' :
                                         color.toLowerCase() === 'blue' ? '#0074D9' :
                                         color.toLowerCase() === 'red' ? '#FF4136' :
                                         color.toLowerCase() === 'brown' ? '#8B4513' :
                                         color.toLowerCase() === 'ivory' ? '#FFFFF0' :
                                         color.toLowerCase() === 'blush' ? '#DE5D83' :
                                         color.toLowerCase() === 'charcoal' ? '#36454F' :
                                         color.toLowerCase() === 'camel' ? '#C19A6B' :
                                         color.toLowerCase() === 'tan' ? '#D2B48C' :
                                         color.toLowerCase() === 'olive' ? '#808000' :
                                         color.toLowerCase() === 'beige' ? '#F5F5DC' : '#CCCCCC'
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-medium">
                      Size: {selectedSize && <span className="font-normal text-neutral-600">{selectedSize}</span>}
                    </label>
                    <button className="text-sm text-neutral-600 underline">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`
                          px-6 py-3 border transition-colors
                          ${selectedSize === size 
                            ? 'border-black bg-black text-white' 
                            : 'border-neutral-300 hover:border-black'
                          }
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-neutral-300 hover:border-black transition-colors"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-neutral-300 hover:border-black transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 mb-8">
                <Button onClick={handleAddToCart} variant="primary" className="w-full py-4">
                  Add to Cart
                </Button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-black hover:bg-neutral-50 transition-colors"
                >
                  {isWishlisted ? (
                    <>
                      <IoHeart size={20} className="text-red-500" />
                      <span>Remove from Wishlist</span>
                    </>
                  ) : (
                    <>
                      <IoHeartOutline size={20} />
                      <span>Add to Wishlist</span>
                    </>
                  )}
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-2 text-sm text-neutral-600">
                <p>✓ Free shipping on orders over $100</p>
                <p>✓ Easy returns within 30 days</p>
                <p>✓ Secure checkout</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className="border-b flex gap-8 mb-8">
              {['description', 'reviews', 'shipping'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    pb-4 text-sm uppercase tracking-wider transition-colors relative
                    ${activeTab === tab ? 'text-black font-semibold' : 'text-neutral-600'}
                  `}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="max-w-3xl">
              {activeTab === 'description' && (
                <div>
                  <h3 className="font-semibold mb-4">Product Description</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Premium quality fabric ensures comfort and durability. Perfect fit for all occasions.
                  </p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="font-semibold mb-4">Customer Reviews</h3>
                  <p className="text-neutral-600">
                    {product.reviews} reviews - Average rating: {product.rating}/5.0
                  </p>
                  <p className="text-neutral-500 mt-4">Review functionality coming soon...</p>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div>
                  <h3 className="font-semibold mb-4">Shipping Information</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Free standard shipping on orders over $100</li>
                    <li>• Express shipping available at checkout</li>
                    <li>• International shipping available</li>
                    <li>• Orders processed within 1-2 business days</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
