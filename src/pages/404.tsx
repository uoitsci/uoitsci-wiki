"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Header from '../components/navbar/header';

export default function Custom404() {
    const router = usePathname()?.slice(1);

    return (
        <main>
            <Header />
            <div className="flex flex-col h-[calc(100vh-56px)] bg-future-blue text-center text-white">
                <div className="m-auto">
                    <div className="grid md:text-[12rem] text-[8rem] leading-none font-bold select-none">
                        <h1 className="col-start-1 row-start-1
                        text-white"> 404 </h1>
                        <h1 className="col-start-1 row-start-1
                        ml-2 mt-1 text-future-blue"> 404 </h1>
                        <h1 className="col-start-1 row-start-1
                        custom404">404</h1>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold capitalize"> Page not found </h2>
                    <p className="mt-2 px-6 md:px-0">It looks like the page <span className="p-1.5 text-nowrap rounded-md font-mono bg-[#00283C]">{router?.replaceAll("/", " > ")}</span> doesn&apos;t exist.</p>
                    <div className="grid mt-6 md:mx-24 mx-12">
                        <Link className="z-10 inline-block px-6 py-3 col-start-1 row-start-1
                            rounded-xl border-2 border-tech-tangerine bg-future-blue
                            hover:bg-medium-blue active:bg-simcoe-blue" href="/home">
                            Let&apos;s get you back home!
                        </Link>
                        <div className="col-start-1 row-start-1 rounded-xl
                        shadow-lg shadow-tech-tangerine animate-pulse duration-200">

                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}