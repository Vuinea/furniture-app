import React from 'react'
import Product from '../product'
import products from '../../data/products/products';

export default function CurrentSales() {
  const saleProducts = products.filter(p => p.currentPrice !== p.fullPrice);
  return (
    <div className="mt-14">
      <h2 className="text-center font-bold text-2xl">Current Sales</h2>
      <div className="flex justify-center mt-7 gap-3">
        {saleProducts.map((p, index) => {
          return <Product key={index} {...p} />;
        })}
      </div>
    </div>
  );
}
