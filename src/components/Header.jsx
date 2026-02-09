import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoSearch, IoCart, IoHeart, IoMenu, IoClose } from 'react-icons/io5';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}
        `}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-neutral-100 transition-colors"
            >
              <IoMenu size={24} />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-display font-bold tracking-wider-2">
                FASHION
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/collections" className="link text-sm uppercase tracking-wider">
                Collections
              </Link>
              <Link to="/products/women" className="link text-sm uppercase tracking-wider">
                Women
              </Link>
              <Link to="/products/men" className="link text-sm uppercase tracking-wider">
                Men
              </Link>
              <Link to="/products/accessories" className="link text-sm uppercase tracking-wider">
                Accessories
              </Link>
              <Link to="/about" className="link text-sm uppercase tracking-wider">
                About
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/search" className="p-2 hover:bg-neutral-100 transition-colors">
                <IoSearch size={22} />
              </Link>

              <Link to="/wishlist" className="p-2 hover:bg-neutral-100 transition-colors relative">
                <IoHeart size={22} />
                {getWishlistCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getWishlistCount()}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="p-2 hover:bg-neutral-100 transition-colors relative">
                <IoCart size={22} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
