import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Button } from '../components/Button';

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    // Payment
    paymentMethod: 'card',
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed! (This is a UI demo)');
  };

  const countryOptions = [
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'United Kingdom', label: 'United Kingdom' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-50 py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold">Checkout</h1>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="container-custom">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Shipping & Payment Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 border border-neutral-200"
                >
                  <h2 className="text-xl font-display font-bold mb-6">Shipping Information</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <Input
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="State / Province"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="ZIP / Postal Code"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <Select
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      options={countryOptions}
                      required
                    />
                  </div>
                </motion.div>

                {/* Payment Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-6 border border-neutral-200"
                >
                  <h2 className="text-xl font-display font-bold mb-6">Payment Method</h2>

                  <div className="space-y-4">
                    <label className="flex items-center p-4 border-2 border-neutral-300 cursor-pointer hover:border-black transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span className="font-medium">Credit / Debit Card</span>
                    </label>

                    <label className="flex items-center p-4 border-2 border-neutral-300 cursor-pointer hover:border-black transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="mt-6 p-4 bg-neutral-50 text-sm text-neutral-600">
                      <p>Card payment integration would go here (Stripe, Razorpay, etc.)</p>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-neutral-50 p-6 sticky top-24"
                >
                  <h2 className="text-xl font-display font-bold mb-6">Order Summary</h2>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                        <div className="w-16 h-20 bg-neutral-200 flex-shrink-0 overflow-hidden">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-xs text-neutral-600">
                            {item.selectedSize} / {item.selectedColor}
                          </p>
                          <p className="text-sm">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <Button type="submit" variant="primary" className="w-full py-4">
                    Place Order
                  </Button>

                  {/* Security Info */}
                  <div className="mt-6 pt-6 border-t text-xs text-neutral-600 space-y-2">
                    <p>✓ Secure checkout</p>
                    <p>✓ Your data is protected</p>
                    <p>✓ Easy returns within 30 days</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
