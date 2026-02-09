export const categories = [
  {
    id: 1,
    name: 'Men',
    slug: 'men',
    description: 'Discover our latest men\'s collection',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800',
    subcategories: ['Shirts', 'Pants', 'Jackets', 'Sweaters', 'Accessories'],
  },
  {
    id: 2,
    name: 'Women',
    slug: 'women',
    description: 'Explore timeless women\'s fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    subcategories: ['Dresses', 'Tops', 'Jeans', 'Jackets', 'Accessories'],
  },
  {
    id: 3,
    name: 'Accessories',
    slug: 'accessories',
    description: 'Complete your look with perfect accessories',
    image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800',
    subcategories: ['Bags', 'Jewelry', 'Shoes', 'Watches', 'Belts'],
  },
];

export const getCategoryBySlug = (slug) => categories.find(c => c.slug === slug);
