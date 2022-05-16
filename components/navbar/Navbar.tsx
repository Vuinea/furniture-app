import React from "react";
import Navlink from "./Navlink";
import { FaHome, FaCouch, FaChair, FaBed } from "react-icons/fa";
import { CloseButton, MediaQuery } from "@mantine/core";
import Link from "next/link";

interface NavbarProps {
  open?: boolean;
  handleClose: () => void;
}

export default function Navbar(props: NavbarProps) {
  return (
    <aside
      className={`${
        props.open || "hidden"
      } h-screen lg:w-56 sm:w-full shadow-xl bg-inherit text-inherit top-0 left-0`}
    >

      <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
        <div className="absolute float-right">
          <CloseButton onClick={props.handleClose} variant="transparent" />
        </div>
      </MediaQuery>

      <div className="p-4">
        <Link passHref href='/' ><a className="p-4 text-center text-2xl">Oasis Furniture</a></Link>
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <Navlink href="/products" text="All Furniture" icon={<FaHome />} />
        <Navlink
          href="/products/living-room"
          text="Living Room"
          icon={<FaCouch />}
        />
        <Navlink
          href="/products/dining-room"
          text="Dining Room"
          icon={<FaChair />}
        />
        <Navlink href="/products/bed-room" text="Bed Room" icon={<FaBed />} />
      </div>
    </aside>
  );
}
