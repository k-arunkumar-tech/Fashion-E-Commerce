import { Modal } from './Modal';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useWishlist } from '../contexts/WishlistContext';
import { useState } from 'react';

const QuickViewModal = ({ isOpen, onClose, product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              {product.name}
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-neutral-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-neutral-600 mb-6">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Select Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        px-4 py-2 border transition-colors
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

            {/* Actions */}
            <div className="mt-auto space-y-3">
              <Link to={`/product/${product.id}`} className="block">
                <Button variant="primary" className="w-full">
                  View Full Details
                </Button>
              </Link>

              <button
                onClick={() => toggleWishlist(product)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-black hover:bg-neutral-50 transition-colors"
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
            <div className="mt-6 pt-6 border-t text-sm text-neutral-600">
              <p>⭐ {product.rating} / 5.0 ({product.reviews} reviews)</p>
              <p className="mt-2">✓ Free shipping on orders over $100</p>
              <p>✓ Easy returns within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
