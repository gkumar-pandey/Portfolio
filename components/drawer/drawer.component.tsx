import Link from "next/link";
import React from "react";
import { FC } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

interface DrawerProps {
  links: any;
  open: boolean;
  position: string;
  toggle: () => void;
}

const Drawer: FC<DrawerProps> = ({ links, open, position, toggle }) => {
  return (
    <div
      className={`md:hidden  backdrop-filter backdrop-blur-xl py-2 fixed w-full h-3/5 mx-auto  rounded-t-2xl border border-gray-700 right-0 text-white left-0 bottom-0 ${
        open && "top-full"
      } z-50 transition-transform  transform-none`}
    >
      <button
        onClick={toggle}
        className="flex border-b border-slate-200 flex-col py-2 gap-1 w-full items-center justify-center"
      >
        <span className="w-10 h-1 bg-slate-300 rounded-lg"></span>
        <span>Menu</span>
      </button>
      <div className="flex flex-col gap-1 p-4">
        {links.map((ele: any, idx: any) => {
          return (
            <Link
              className="hover:text-[var(--primary-color)] py-4 font-semibold "
              href={ele?.link}
              key={idx}
              onClick={toggle}
            >
              <button className="flex items-center gap-3">
                {ele?.icon}
                {ele?.text}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Drawer;
