import React from 'react'
import Product from '../../data/products/Product';
import BaseApp from '../BaseApp'
import ProductList from '../productList/ProductList'

interface CategoryPageProps {
  header: string;
  products: Product[];
}

export default function CategoryPage({ header, products }: CategoryPageProps) {
  return (
    <BaseApp withSearchbar header={header}>
      <ProductList products={products} />
    </BaseApp>
  );
}
