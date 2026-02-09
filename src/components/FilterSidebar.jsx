import { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const categories = ['Dresses', 'Tops', 'Jeans', 'Jackets', 'Accessories'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Brown', 'Beige'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4 uppercase tracking-wider">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="mr-2"
                value={cat}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, cat]);
                  } else {
                    setSelectedCategories(selectedCategories.filter(c => c !== cat));
                  }
                }}
              />
              <span className="text-neutral-700 group-hover:text-black transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="font-semibold mb-4 uppercase tracking-wider">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-neutral-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="font-semibold mb-4 uppercase tracking-wider">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => {
                if (selectedColors.includes(color)) {
                  setSelectedColors(selectedColors.filter(c => c !== color));
                } else {
                  setSelectedColors([...selectedColors, color]);
                }
              }}
              className={`
                w-8 h-8 rounded-full border-2 transition-all
                ${selectedColors.includes(color) ? 'border-black scale-110' : 'border-neutral-300'}
              `}
              style={{
                backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                               color.toLowerCase() === 'black' ? '#000000' :
                               color.toLowerCase() === 'blue' ? '#0074D9' :
                               color.toLowerCase() === 'red' ? '#FF4136' :
                               color.toLowerCase() === 'brown' ? '#8B4513' :
                               color.toLowerCase() === 'beige' ? '#F5F5DC' : '#CCCCCC'
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="font-semibold mb-4 uppercase tracking-wider">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                if (selectedSizes.includes(size)) {
                  setSelectedSizes(selectedSizes.filter(s => s !== size));
                } else {
                  setSelectedSizes([...selectedSizes, size]);
                }
              }}
              className={`
                px-3 py-2 border transition-colors
                ${selectedSizes.includes(size) 
                  ? 'border-black bg-black text-white' 
                  : 'border-neutral-300 hover:border-black'
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <button className="w-full btn btn-outline text-sm">
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
