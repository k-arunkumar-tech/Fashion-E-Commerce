import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-display font-bold">MENU</h2>
              <button onClick={onClose} className="p-2 hover:bg-neutral-100 transition-colors">
                <IoClose size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block text-lg font-medium hover:text-neutral-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections"
                    className="block text-lg font-medium hover:text-neutral-600 transition-colors"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/women"
                    className="block text-lg font-medium hover:text-neutral-600 transition-colors"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/men"
                    className="block text-lg font-medium hover:text-neutral-600 transition-colors"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/accessories"
                    className="block text-lg font-medium hover:text-neutral-600 transition-colors"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/about"
                      className="block text-neutral-600 hover:text-black transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block text-neutral-600 hover:text-black transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="block text-neutral-600 hover:text-black transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t">
                <Link to="/login" className="block w-full btn btn-primary mb-3">
                  Login
                </Link>
                <Link to="/register" className="block w-full btn btn-outline">
                  Register
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
