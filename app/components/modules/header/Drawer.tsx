"use client";

import Link from "next/link";
import { Button } from "../../common";
import { ListNavigation } from "./header";
import { useState } from "react";

interface NavigationProps {
  listNav: ListNavigation[];
}

const Drawer: React.FC<NavigationProps> = ({ listNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        className="block md:hidden w-auto order-1 sm:order-none"
        onClick={handleToggleDrawer}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </Button>
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 bottom-0 w-[320px] bg-white h-screen overflow-auto shadow-md animate-fadeInDrawer scrollbar-hide z-10">
            <div className="bg-primary flex justify-end py-2">
              <Button
                onClick={handleToggleDrawer}
                className="text-white flex items-center gap-2 px-3 py-2.5 w-auto">
                <span>CLOSE</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="text-xl ml-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </Button>
            </div>
            <nav className="p-5">
              <ul className="flex flex-col gap-3 font-medium">
                {listNav.map(({ key, link, title }) => (
                  <li
                    key={key}
                    className="border-b-[1px] border-solid border-black/[.08] text-sm hover:opacity-70 transition-all">
                    <Link
                      href={link}
                      className="uppercase px-4 py-2 w-full block">
                      {title}
                    </Link>
                  </li>
                ))}
                <li className="border-b-[1px] border-solid border-black/[.08] text-sm hover:opacity-70 transition-opacity block sm:hidden">
                  <Link
                    href="/register"
                    className="uppercase px-4 py-2 w-full block">
                    Register
                  </Link>
                </li>
                <li className="border-b-[1px] border-solid border-black/[.08] text-sm hover:opacity-70 transition-opacity block sm:hidden">
                  <Link
                    href="/login"
                    className="uppercase px-4 py-2 w-full block">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="fixed inset-0 bg-black/50 z-[1] h-screen"
            onClick={handleToggleDrawer}></div>
        </>
      )}
    </>
  );
};

export default Drawer;
