import React, { useState } from "react";
import Navlink from "./Navlink";
import { FaCouch, FaChair, FaBed } from "react-icons/fa";
import { CloseButton } from "@mantine/core";

interface NavbarProps {
  open?: boolean;
  handleClose: () => void;
}

export default function Navbar(props: NavbarProps) {
  

  return (
    <aside
      className={`${
        props.open || "hidden"
      } h-screen lg:w-48 sm:w-full shadow-xl bg-inherit text-inherit top-0 left-0`}
    >
      <div className="absolute float-right">
        <CloseButton onClick={props.handleClose} variant="transparent" />
      </div>
      <h1 className="p-4 text-center text-2xl">Sahara Furniture</h1>

      <div className="mt-2 flex flex-col gap-2">
        <Navlink href='/living-room' text="Living Room" icon={<FaCouch />} />
        <Navlink href='/living-room' text="Dining Room" icon={<FaChair />} />
        <Navlink href='/living-room' text="Bed Room" icon={<FaBed />} />
      </div>
    </aside>
  );
}
