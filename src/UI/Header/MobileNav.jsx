import Image from "next/image";
import Drawer from "../Drawer";
import { BiMenu } from "react-icons/bi";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import MenuItems from "src/constants/MenuItems";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronRight } from "react-icons/hi2";
const MobileNav = () => {
  const pathname = usePathname();
  const itemClasses = {
    base: "py-0 w-full my-5 bg-slate-50 rounded-lg",
    title: "font-normal text-medium",
    trigger: "w-full px-2 py-0 h-14 flex items-center",
    content: "px-2",
  };
  return (
    <section className="block lg:hidden">
      <Drawer textIcon={false} icon={<BiMenu className="size-8" />}>
        <div className="flex items-center flex-col gap-y-4">
          <Image
            width={79}
            height={85}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="images/logo/logo.svg"
            src="images/logo/logo.svg"
            className="h-16"
          />
          <Divider className="mb-8" />
        </div>
        <Accordion showDivider={false} itemClasses={itemClasses}>
          <AccordionItem
            title="صفحه اصلی"
            indicator={<HiChevronRight className="size-5" />}
          >
            <Link
              href="/"
              className={
                pathname === "/" ? "text-primary font-bold" : "text-zinc-700"
              }
            >
              صفحه اصلی
            </Link>
          </AccordionItem>
          {MenuItems.map(({ id, mainNav, mainHref, subNav }) => {
            return subNav.length > 0 ? (
              <AccordionItem
                key={id}
                aria-label={mainNav}
                title={mainNav}
                indicator={<HiChevronRight className="size-5" />}
              >
                <div className="flex flex-col gap-y-5 line-clamp-1">
                  {subNav.map(({ id, title, href }) => {
                    return (
                      <React.Fragment key={id}>
                        <Link
                          href={href}
                          className={
                            pathname === href
                              ? "text-primary font-bold"
                              : "text-zinc-700"
                          }
                        >
                          {title}
                        </Link>
                      </React.Fragment>
                    );
                  })}
                </div>
              </AccordionItem>
            ) : (
              <AccordionItem
                title={mainNav}
                indicator={<HiChevronRight className="size-5" />}
                aria-expanded={mainNav}
              >
                <Link
                  href={mainHref}
                  className={
                    pathname === mainHref
                      ? "text-primary font-bold"
                      : "text-zinc-700"
                  }
                >
                  {mainNav}
                </Link>
              </AccordionItem>
            );
          })}
          <AccordionItem
            title="آدرس فروشگاه"
            indicator={<HiChevronRight className="size-5" />}
          >
            <Link
              href="https://www.google.com/maps/place/%D8%A7%DB%8C%D9%88%D8%A7%D8%B2+%D9%BE%D9%84%D8%A7%D8%B3%E2%80%AD/@37.4752277,49.4553436,17z/data=!3m1!4b1!4m6!3m5!1s0x401feb36d5c9f789:0x11d5407d8859e1e2!8m2!3d37.4752277!4d49.4553436!16s%2Fg%2F11fq4k68s9?entry=ttu"
              target="_blank"
            >
               آدرس فروشگاه
            </Link>
          </AccordionItem>
        </Accordion>
      </Drawer>
    </section>
  );
};

export default MobileNav;
