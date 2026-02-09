import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoTrash, IoAdd, IoRemove } from 'react-icons/io5';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/Button';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-display font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-600 mb-8">
              Add some amazing products to your cart and they'll show up here.
            </p>
            <Link to="/collections">
              <Button variant="primary">Continue Shopping</Button>
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
          <h1 className="text-4xl font-display font-bold">Shopping Cart</h1>
          <p className="text-neutral-600 mt-2">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-white border border-neutral-200"
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-32 h-40 bg-neutral-100 overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-neutral-600 transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-neutral-600 text-sm mb-2">
                      Size: {item.selectedSize} | Color: {item.selectedColor}
                    </p>
                    <p className="font-semibold text-lg mb-4">${item.price}</p>

                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-neutral-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="p-2 hover:bg-neutral-100 transition-colors"
                        >
                          <IoRemove size={16} />
                        </button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="p-2 hover:bg-neutral-100 transition-colors"
                        >
                          <IoAdd size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        className="p-2 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <IoTrash size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="font-semibold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 p-6 sticky top-24">
                <h2 className="text-xl font-display font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {subtotal < 100 && (
                  <p className="text-sm text-neutral-600 mb-6">
                    Add ${(100 - subtotal).toFixed(2)} more to get FREE shipping!
                  </p>
                )}

                <Link to="/checkout" className="block">
                  <Button variant="primary" className="w-full py-4 mb-4">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link to="/collections" className="block">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t text-sm text-neutral-600 space-y-2">
                  <p>✓ Secure checkout</p>
                  <p>✓ Free returns within 30 days</p>
                  <p>✓ Customer support 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
