import React from 'react'
import Head from 'next/head';
import Product from '../../data/products/Product';
import BaseApp from '../BaseApp'
import ProductList from '../productList/ProductList'

interface CategoryPageProps {
  header: string;
  products: Product[];
}

export default function CategoryPage({ header, products }: CategoryPageProps) {
  return (
    <>
      <Head>
        <title>Oasis Furniture - {header}</title>
      </Head>
      <BaseApp withSearchbar header={header}>
        <ProductList products={products} />
      </BaseApp>
    </>
  );
}
