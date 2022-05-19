import React from 'react'
import useProducts from "../../hooks/useProducts";
import CategoryPage from '../../components/categoryPage/CategoryPage';

export default function Products() {
  const products = useProducts();
  return (
    <CategoryPage products={products} header='all products' />
  )
}
