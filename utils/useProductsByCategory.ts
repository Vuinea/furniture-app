import React from 'react' 
import { categories } from '../data/products/Product';
import useProducts from '../hooks/useProducts'

export default function useProductsByCategory(category: categories) {
  const products = useProducts();
  return products.filter((p) => p.categories.includes(category))
}
