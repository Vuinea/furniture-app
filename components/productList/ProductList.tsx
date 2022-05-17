import React from 'react'
import ProductInterface from '../../data/products/Product';
import Product from '../product';

interface ProductListProps {
  products: ProductInterface[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className='flex flex-row gap-3 mt-6'>
      {products.map((p) => {
        return <Product {...p} key={p.id} />
      })}
    </div>
  )
}
