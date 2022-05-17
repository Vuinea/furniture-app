import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import useProducts from "../../hooks/useProducts";
import Product from "../../data/products/Product";

interface SearchbarProps {
  className?: string;
}

export default function Searchbar(props: SearchbarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [resultsOpen, setResultsOpen] = useState(false);
  const products = useProducts();

  return (
    <div className="my-3 w-100 h-100 flex items-stretch">
      <div className="dark:bg-slate-800 w-9/12 mx-auto rounded-md">
        {/* search bar */}
        <div
          className={` mx-auto px-2 py-1 rounded-md flex items-center group focus-within:ring-1 focus-within:ring-primary-500 border-b border-b-slate-400 dark:border-b-slate-700 ${
            props.className ? props.className : ""
          }`}
        >
          <FaSearch className="h-4 inline text-slate-300 dark:text-slate-600" />
          <input
            onFocus={() => {
              setResultsOpen(true);
            }}
            onBlur={() => {
              setResultsOpen(false);
            }}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            type="text"
            placeholder="Search..."
            className="inline bg-inherit dark:text-slate-300 h-full w-full text-sm font-medium px-3 py-2 rounded-md focus:outline-none"
          />
        </div>
        {/* results */}
        {resultsOpen && (
          <div className="w-9/12 h-70 py-2 z-50 shadow-xl absolute overflow-x-hidden overflow-y-auto bg-white dark:bg-slate-800">
            {filterResults(searchValue, products).map((p) => {
              return <SearchResult key={p.id} product={p} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const filterResults = (text: string, products: Product[]) => {
  return products.filter((p) =>
    p.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(text.toLowerCase().replace(/\s+/g, ""))
  );
};
