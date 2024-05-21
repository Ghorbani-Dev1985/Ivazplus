"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MenuItems from "src/constants/MenuItems";
import Search from "./Search";
import { Divider } from "@nextui-org/react";
import { HiMiniUserCircle, HiOutlineUser } from "react-icons/hi2";
import ShoppingCart from "./ShoppingCart";
import MobileNav from "./MobileNav";
import { BiCaretUp, BiChevronDown, BiChevronLeft } from "react-icons/bi";
import { useGetUser } from "src/hooks/useAuth";
const Header = () => {
  const pathname = usePathname();
  const [submenuImg, setSubmenuImg] = useState("");
  const {data , error , isPending} = useGetUser()
  const {user , cart} = data || {}
  console.log({data , error , isPending})
  return (
    <header>
      <section className="container xl:max-w-screen-xl relative">
        {/* DesktopNav */}
        <div className="w-full flex-between py-4">
          <nav className="hidden lg:flex-center gap-x-3 text-xs font-bold">
            <ul className="flex items-center gap-1.5">
               {MenuItems.map(({ id, mainNav, mainHref, subNav }) => {
              return (
                <React.Fragment key={id}>
                  <li className="flex items-center group"><Link
                    href={mainHref}
                    onMouseEnter={() => setSubmenuImg("")}
                    className={`
                    ${
                      pathname === mainHref
                        ? "text-primary font-bold"
                        : "text-zinc-700"
                    } inline-flex items-center `}
                  >
                    
                    {mainNav} </Link>
                    {subNav.length >= 1 && (
                      <>
                        <BiChevronDown className="size-5" />
                        <p className="relative">
                          <BiCaretUp className="size-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-11 top-11" />
                        </p>
                        <div className="absolute right-0 top-full min-h-[414px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-full px-6 space-y-8 bg-white shadow-lg tracking-normal border-t border-primary rounded-br-xl rounded-bl-xl transition-all delay-75 child:flex child:justify-between child:transition-colors child-hover:text-orange-300">
                          <div>
                            <div className="w-1/5 flex flex-col gap-y-2.5 border-l min-h-[414px] py-5 pl-6">
                              {subNav.map(({ id, title, href, image }) => {
                                return (
                                  <React.Fragment key={id}>
                                    <Link
                                      href={href}
                                      onMouseEnter={() => setSubmenuImg(image)}
                                      className={`
                                    ${
                                      pathname === href
                                        ? "text-primary font-bold"
                                        : "text-zinc-700"
                                    } hover:bg-primary hover:text-white py-3 px-2 rounded-xl flex-between group/arrow transition-colors`}
                                    >
                                      {title}
                                      <BiChevronLeft className="size-5 hidden group-hover/arrow:block" />
                                    </Link>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                            <p className="w-3/4 flex justify-end child:rounded-2xl py-5">
                              {submenuImg && (
                                <Image
                                  width={302}
                                  height={414}
                                  alt="ghorbani-dev.ir"
                                  placeholder="blur"
                                  blurDataURL={`/images/mainMenu/${submenuImg}`}
                                  src={`/images/mainMenu/${submenuImg}`}
                                  className=""
                                />
                              )}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                 </li>
                </React.Fragment>
              );
            })}
            </ul>
           
            <Link
              href="https://www.google.com/maps/place/%D8%A7%DB%8C%D9%88%D8%A7%D8%B2+%D9%BE%D9%84%D8%A7%D8%B3%E2%80%AD/@37.4752277,49.4553436,17z/data=!3m1!4b1!4m6!3m5!1s0x401feb36d5c9f789:0x11d5407d8859e1e2!8m2!3d37.4752277!4d49.4553436!16s%2Fg%2F11fq4k68s9?entry=ttu"
              target="_blank"
            >
              آدرس فروشگاه
            </Link>
          </nav>
          <Image
            width={79}
            height={85}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="images/logo/logo.svg"
            src="images/logo/logo.svg"
            className="h-12 md:h-auto"
          />
          {/* Icons */}
          <section className="flex-center gap-x-1.5 md:gap-x-3">
            {/* MobileNav */}
            <MobileNav />
            {/* Search */}
            <div className="flex-center h-6 md:gap-x-2">
              <Search />
              <Divider orientation="vertical" />
            </div>
            {/* Account */}
            <div className={`${isPending ? "blur-sm opacity-70" : "blur-0 opacity-100"} flex-center h-6 gap-x-2`}>
              {
                user ? <Link href="/profile" className="flex-center gap-x-1 text-xs md:text-base"><HiMiniUserCircle className="hidden md:block md:size-8 fill-primary"/>{user.name}</Link> :
              <Link href="/authentication" className="flex-center">
                <HiOutlineUser className="size-6" />
                <span className="hidden md:block">حساب کاربری</span>
              </Link>
              }
              <Divider orientation="vertical" />
            </div>
            {/* Shop Cart */}
            <div className="flex-center gap-x-2">
              <ShoppingCart cartItemCount={cart ? cart.payDetail.productIds.length : 0}/>
            </div>
          </section>
        </div>
      </section>
    </header>
  );
};

export default Header;
