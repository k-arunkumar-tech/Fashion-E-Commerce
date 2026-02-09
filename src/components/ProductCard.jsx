import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoHeart, IoHeartOutline, IoEye } from 'react-icons/io5';
import { useState } from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import { Badge } from './Badge';

const ProductCard = ({ product, onQuickView }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="product-card group"
    >
      {/* Image Container */}
      <div className="product-card-image relative">
        <Link to={`/product/${product.id}`}>
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={product.images[currentImage]}
            alt={product.name}
            className="w-full h-full object-cover"
            onMouseEnter={() => setCurrentImage(1)}
            onMouseLeave={() => setCurrentImage(0)}
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <Badge variant={product.badge === 'Sale' ? 'sale' : 'new'}>
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-4 right-4 p-2 bg-white hover:bg-neutral-100 transition-colors shadow-md"
        >
          {isWishlisted ? (
            <IoHeart size={20} className="text-red-500" />
          ) : (
            <IoHeartOutline size={20} />
          )}
        </button>

        {/* Quick View - Show on Hover */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          onClick={() => onQuickView && onQuickView(product)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                     px-6 py-2 bg-white text-black text-sm font-medium uppercase tracking-wider
                     opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <IoEye size={18} />
            <span>Quick View</span>
          </div>
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium mb-2 hover:text-neutral-600 transition-colors">
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

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1 mt-3">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border border-neutral-300"
                style={{
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                 color.toLowerCase() === 'black' ? '#000000' :
                                 color.toLowerCase() === 'navy' ? '#001f3f' :
                                 color.toLowerCase() === 'blue' ? '#0074D9' :
                                 color.toLowerCase() === 'red' ? '#FF4136' :
                                 color.toLowerCase() === 'brown' ? '#8B4513' :
                                 color.toLowerCase() === 'beige' ? '#F5F5DC' : '#CCCCCC'
                }}
                title={color}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
