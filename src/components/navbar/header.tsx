"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"


import NavLinks from "./navlinks";

import "../../app/globals.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  {/* Have to use this otherwise the navbar on the phone won't hide if the user clicks on the link */}
  useEffect(() => {setOpen(false)}, [pathname])

  return (
    <nav className="sticky top-0 bg-future-blue">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-4 md:px-12 h-14">
        <Link href="/home" className="">
          <Image src="/OTSU_logo.png" width="125" height="32" alt="Ontario Tech Science" />
        </Link>

        <button className="text-white p-2 md:hidden rounded-xl focus:ring-2 focus:ring-tech-tangerine" onClick={()=> setOpen(!open)}>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <ul className="md:flex hidden items-center h-full">
          <NavLinks />
        </ul>

        {/* Mobile nav */}

        <ul
        className={`fixed top-0 bottom-0
        md:hidden bg-future-blue w-full overflow-y-auto mt-14
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
        </ul>
      </div>
    </nav>

  );
}