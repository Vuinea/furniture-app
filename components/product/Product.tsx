import React from "react";
import Product from "../../data/products/Product";
import Image from "next/image";
import Link from "next/link";
import StyledLink from "../StyledLink";

export default function SaleProduct(props: Product) {
  const pricesMatch = props.currentPrice === props.fullPrice;

  return (
    <div className="h-60 w-60 border border-slate-300 border-b-0 dark:border-none">
      <Image layout="responsive" width={100} height={100} src={props.imgPath} />

      <div className="pt-4 pb-0 dark:bg-slate-800 border border-slate-300 border-t-0 dark:border-none">
        <div className="p-2">
          <h5 className="text-md capitalize">{props.name}</h5>
          <p
            className={`font-light mr-2 inline-block ${
              !pricesMatch && "line-through"
            } before:content-['$']`}
          >
            {props.fullPrice}
          </p>
          {!pricesMatch && (
            <p className="text-primary-500 dark:text-primary-300 inline-block font-lg before:content-['$']">
              {props.currentPrice}
            </p>
          )}
        </div>
        <div className="mt-3">
          <Link href="#" passHref>
            <a className="btn text-center w-full btn-primary-outline rounded-none rounded-t-sm">
              Buy Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
