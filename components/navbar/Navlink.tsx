import React from "react";
import Link from 'next/link';

interface NavLinkProps {
  text: string;
  icon: React.ReactNode;
  href: string
}

export default function Navlink(props: NavLinkProps) {
  return (

    <Link href={props.href} passHref>
      <a className="bg-gray-100 dark:bg-slate-800 w-11/12 rounded-r-full p-2 flex flex-row gap-2 items-center dark:hover:bg-slate-700 hover:bg-gray-200 transition-colors cursor-pointer">
        <div>{props.icon}</div>
        <div className='select-none capitalize'>
          {props.text}
        </div>
      </a>
    </Link>

  );
}
