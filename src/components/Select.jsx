export const Select = ({ 
  label, 
  options = [], 
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
      <select
        className={`input cursor-pointer ${className}`}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
