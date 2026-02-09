import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

export const Modal = ({ isOpen, onClose, children, className = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`
                relative bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto
                pointer-events-auto ${className}
              `}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 hover:bg-neutral-100 transition-colors"
              >
                <IoClose size={24} />
              </button>

              {/* Content */}
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
