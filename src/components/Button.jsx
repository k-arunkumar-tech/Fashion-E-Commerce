import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '',
  disabled = false,
  ...props 
}) => {
  const variants = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    outline: 'btn btn-outline',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
