export const Input = ({ 
  label, 
  error, 
  type = 'text', 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-neutral-700">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`input ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
