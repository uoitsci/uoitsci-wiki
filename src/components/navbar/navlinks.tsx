import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { links } from "./linklists";

/* component wrapper for the button area on the main navbar to be clickable only when there is a link. */
const MainNavbarButton: React.FC<{link?: string, className: string, children: ReactNode}> = ({ link, className, children }) => {
  return link ? <Link href={link} className={className}>{children}</Link> : <div className={className}>{children}</div>
}

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.name + link.submenu} className="md:h-full">
          <MainNavbarButton link={link.link} className="md:cursor-pointer group md:h-full">
            {/* Main Navbar list*/}
            <div
            className="md:flex block md:h-full items-center text-white
            md:border-b-4 md:border-l-0 md:border-future-blue group-hover:border-tech-tangerine
            border-l-8 border-tech-tangerine"
            onClick={() => {
              heading !== link.name ? setHeading(link.name) : setHeading("");
              setSubHeading("");
            }}
            >
              {/* Differentiate between link and sublist  */}
              <div className="py-4 px-4 md:py-0 border-b border-darker-blue md:border-b-0">
                {link.link 
                ? <p>{link.name}</p>
                : <div className="flex justify-between items-center">
                    <span className="md:mr-2">{link.name}</span>
                    <span className={`duration-100 ${heading === link.name ? "rotate-90" : ""}
                    md:group-hover:rotate-90 md:text-[10px] md:m-0
                    cursor-pointer text-2xl -my-4`}>❯</span>
                </div>}
              </div>
            </div>
            
            {/* Desktop version of sublists */}
            {link.submenu && (
              <div className="relative">
                <div className="absolute hidden md:cursor-default right-0
                shadow-md rounded-b-2xl bg-white border-b-2 border-x-2 border-future-blue
                group-hover:md:block hover:md:block">
                  <div className="flex py-6 px-4 divide-x-2 divide-future-blue">
                    {/* Single link sublist without sub-sublists */}
                    {link.sublinks?.some(mysublinks => mysublinks.link) && (
                      <div className="flex flex-col gap-y-3 px-8">
                        {link.sublinks.map((mysublinks) => {
                          if (mysublinks.link) {
                            return (
                              <span key={mysublinks.Head + mysublinks.link}>
                                ▸ 
                                <Link href={mysublinks.link} className="text-nowrap ml-2 hover:underline" key={mysublinks.link}>
                                  {mysublinks.Head}
                                </Link>
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                    {/* Dynamic sublists if it's a link or more sub-sublists */}
                    {link.sublinks?.some(mysublinks => mysublinks.sublink) && (
                      <div className="grid grid-rows-[auto_auto] grid-flow-col px-8 gap-x-12 gap-y-6">
                      {/* Generate sub-sublist in a grid */}
                      {link.sublinks?.map((mysublinks) => {
                        if (mysublinks.sublink) {
                          return (
                            <div key={mysublinks.Head + mysublinks.link} className="">
                              {!mysublinks.link && (<span className="text-nowrap">{mysublinks.Head} ▾</span>)}
                              {/* Sub-sublist links */}
                              {mysublinks.sublink?.map((slink) => (
                                <li key={slink.name + slink.link}  
                                className="text-sm text-gray-600 my-2.5 whitespace-nowrap hover:underline">
                                  <Link href={slink.link} className="hover:text-primary">
                                    {slink.name}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          )
                        }
                        return null;
                      })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </MainNavbarButton>

          {/* Mobile menus sublist */}
          <div
          className={`
          ${heading === link.name ? "md:hidden" : "hidden"}`}>
          
            {/* sublinks */}
            {link.sublinks?.map((slinks) => (
                <MainNavbarButton key={slinks.Head + slinks.link} link={slinks.link} className="">
                  <div
                  className="items-center text-white border-simcoe-blue border-l-8 ml-2"
                  onClick={() =>
                    subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                  }>
                    <div className="border-b border-darker-blue p-4">
                      {slinks.link ? 
                      <p>{slinks.Head}</p> 
                      : <div className="flex justify-between items-center">
                          <span>{slinks.Head}</span>
                          <span className={`-my-4 duration-100 text-2xl cursor-pointer ${subHeading === slinks.Head ? "rotate-90" : ""}`}>❯</span>
                        </div>}
                    </div>
                  </div>

                  {/* sub-sub links*/}
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"} ml-4 border-simcoe-blue border-l-8`}>
                    {slinks.sublink?.map((slink) => (
                      <MainNavbarButton key={slink.name + slink.link} link={slink.link} className="flex p-4 text-white border-darker-blue border-b">
                        <p>{slink.name}</p>
                      </MainNavbarButton>
                    ))}
                  </div>
                </MainNavbarButton>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;