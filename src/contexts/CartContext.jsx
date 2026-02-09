import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prevItems, { ...product, selectedSize, selectedColor, quantity }];
    });
  };

  const removeFromCart = (productId, selectedSize, selectedColor) => {
    setCartItems(prevItems =>
      prevItems.filter(
        item => !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (productId, selectedSize, selectedColor, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize, selectedColor);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
