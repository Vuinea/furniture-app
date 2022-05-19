import React from 'react'
import useProductsByCategory from '../../utils/useProductsByCategory';
import CategoryPage from '../../components/categoryPage/CategoryPage';

export default function BedRoom() {
  const products = useProductsByCategory('bedRoom')
  return (
      <CategoryPage products={products} header="Bed Room" />
    );
}
