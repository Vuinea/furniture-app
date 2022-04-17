import React from "react";
import Link from "next/link";
import Button from '../components/Button';

interface StyledLinkProps {
  href: string;
  children?: React.ReactNode | React.ReactNode[];
  underline?: boolean;
  hoverUnderline?: boolean;
  className?: string;
}

export default function StyledLink(props: StyledLinkProps) {
  return (
    <Link passHref href={props.href}>
      <a
        className={`${props.underline && "underline underline-offset-2"} ${
          props.hoverUnderline && "hover:underline hover:underline-offset-2"
        } ${props.className}`}
      >
        {props.children}
      </a>
    </Link>
  );
}
