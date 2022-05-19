import React from 'react'
import useProductsByCategory from "../../utils/useProductsByCategory";
import CategoryPage from "../../components/categoryPage/CategoryPage";

export default function DiningRoom() {
  const products = useProductsByCategory("diningRoom")
  return <CategoryPage products={products} header="Dining Room" />;
}
