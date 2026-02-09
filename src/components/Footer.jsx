import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoPinterest } from 'react-icons/io5';
import { Input } from './Input';
import { Button } from './Button';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-700">
        <div className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-neutral-400 mb-8">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white"
              />
              <Button type="submit" variant="outline" className="sm:w-auto border-white text-white hover:bg-white hover:text-black">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">FASHION</h2>
            <p className="text-neutral-400 mb-6">
              Premium fashion for the modern individual. Timeless pieces that elevate your style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-gold transition-colors">
                <IoLogoFacebook size={24} />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <IoLogoInstagram size={24} />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <IoLogoTwitter size={24} />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <IoLogoPinterest size={24} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/women" className="text-neutral-400 hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/products/men" className="text-neutral-400 hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-neutral-400 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-neutral-400 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} FASHION. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-neutral-400 text-sm">
              <span>We accept:</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white text-black text-xs font-semibold">VISA</span>
                <span className="px-2 py-1 bg-white text-black text-xs font-semibold">MC</span>
                <span className="px-2 py-1 bg-white text-black text-xs font-semibold">AMEX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
