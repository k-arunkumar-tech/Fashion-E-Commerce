export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-black text-white',
    sale: 'bg-red-600 text-white',
    new: 'bg-accent-gold text-white',
  };

  return (
    <span 
      className={`
        inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
};
