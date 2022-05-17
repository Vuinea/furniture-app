import React from 'react'
import useProducts from "../../hooks/useProducts";
import BaseApp from '../../components/BaseApp'
import ProductList from '../../components/productList/ProductList';

export default function Products() {
  const products = useProducts();
  return (
    <BaseApp withSearchbar header='all products'>
      <ProductList products={products} />
    </BaseApp>
  )
}
