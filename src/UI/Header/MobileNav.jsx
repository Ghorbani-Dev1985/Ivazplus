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
    <section className="block md:hidden">
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
        <div className="px-2">
        <Link
          href="/"
          className={`
            ${pathname === "/" ? "text-primary font-bold" : "text-zinc-700"} w-full bg-slate-50 h-12 px-2 flex items-center rounded-lg`
          }
        >
          صفحه اصلی
        </Link>
        </div>
        <Accordion showDivider={false} itemClasses={itemClasses}>
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
                as={Link}
                href={mainHref}
                title={mainNav}
                indicator=" "
                className={
                    pathname === mainHref
                      ? "text-primary font-bold"
                      : "text-zinc-700"
                  }
                classNames={{
                  heading: "py-0 w-full my-5 bg-slate-50 rounded-lg",
                  content: "hidden",
                }}
                aria-expanded={mainNav}
              ></AccordionItem>
            );
          })}
        </Accordion>
      </Drawer>
    </section>
  );
};

export default MobileNav;
