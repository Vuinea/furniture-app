import React from "react";
import useProductsByCategory from "../../utils/useProductsByCategory";
import CategoryPage from "../../components/categoryPage/CategoryPage";

export default function LivingRoom() {
  const products = useProductsByCategory("livingRoom");
  return (
    <CategoryPage products={products} header="Living Room" />
  );
}
