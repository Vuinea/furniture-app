import React, { useState } from "react";
import Navbar from "./navbar";
import Searchbar from "./searchbar";

interface BaseAppProps {
  children: React.ReactNode | React.ReactNode[];
  withSearchbar?: boolean;
}

export default function BaseApp(props: BaseAppProps) {
  const [open, setOpen] = useState<boolean>(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-screen h-screen bg-slate-900 text-slate-200 flex flex-row">
      <Navbar open={open} handleClose={handleClose} />
      <div className="ml-4 w-full h-full">
        <div>{props.withSearchbar && <Searchbar />}</div>
        {props.children}
      </div>
    </div>
  );
}
