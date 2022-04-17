import React from 'react'
import SaleProduct from './SaleProduct';
import products from '../../data/products/products';

export default function CurrentSales() {
  return (
    <div className="mt-14">
      <h2 className="text-center font-bold text-2xl">Current Sales</h2>
      <div className="flex justify-center mt-7 gap-3">
        {products.map((p, index) => {
          return <SaleProduct key={index} {...p} />;
        })}
      </div>
    </div>
  );
}
