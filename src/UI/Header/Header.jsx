"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MenuItems from "src/constants/MenuItems";
import Search from "./Search";
import { Divider } from "@nextui-org/react";
import { HiOutlineUser } from "react-icons/hi2";
import ShoppingCart from "./ShoppingCart";
const Header = () => {
    const pathname = usePathname();
  return (
    <header>
        <section className="container xl:max-w-screen-xl">
            {/* DesktopNav */}
         <div className="w-full flex-between py-4">
           <nav className="hidden md:flex-center gap-3">
            {
                MenuItems.map(({id, mainNav , mainHref , subNav}) => {
                    return(
                        <React.Fragment key={id}>
                       <Link href={mainHref}   className={
                    pathname === mainHref ? "text-primary font-bold" : "text-zinc-700"
                  }>{mainNav}</Link>
                        </React.Fragment>
                    )
                })
            }
            </nav>
            <Image
              width={79}
              height={85}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL="images/logo/logo.svg"
              src="images/logo/logo.svg"
              objectFit={true}
            />
            {/* Icons */}
            <section className="flex-center gap-3">
                {/* Search */}
               <div className="flex-center h-6 gap-x-2">
                  <Search />
                  <Divider orientation="vertical"/>
               </div>
                {/* Account */}
               <div className="flex-center h-6 gap-x-2">
                <Link href="login" className="flex-center gap-x-2">
                <HiOutlineUser className="size-6"/>
                <span className="hidden md:block">حساب کاربری</span>
                </Link>
                <Divider orientation="vertical" />
               </div>
               {/* Shop Cart */}
                <div className="flex-center gap-x-2">
                  <ShoppingCart />
                </div>
            </section>
         </div>
        </section>
    </header>
  )
}

export default Header