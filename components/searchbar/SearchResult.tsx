import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Product from '../../data/products/Product';

interface SearchResultProps {
  product: Product
}

export default function SearchResult({ product }: SearchResultProps) {
  const { name, imgPath } = product;
  return (
    <Link href="#" passHref>
      <a className="flex gap-3 items-center w-full p-3 hover:bg-slate-700 text-md font-semibold">
        <Image
          width={70}
          height={70}
          src={imgPath}
          className="rounded-sm"
        />

        {name}
      </a>
    </Link>
  );
}
