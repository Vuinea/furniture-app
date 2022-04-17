import React from 'react'
import Product from '../../data/products/Product'
import Image from 'next/image'
import Button from '../Button';
import StyledLink from '../StyledLink';

export default function SaleProduct(props: Product) {
  return (
    <div className=' h-60 w-60'>
      <Image layout='responsive' width={100} height={100} src={props.imgPath} />

      <div className="p-4 bg-slate-800">
        <h5 className="text-md capitalize">{props.name}</h5>
        <p className="font-light mr-2 inline-block line-through before:content-['$']">
          {props.fullPrice}
        </p>
        <p className="text-primary-300 inline-block font-lg before:content-['$']">{props.currentPrice}</p>
        <div className='mt-3'>
          <StyledLink hoverUnderline href='#'>Learn More</StyledLink>
        </div>
      </div>
    </div>
  );
}
