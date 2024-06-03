import { useState } from "react";
import { Chip, Divider } from "@nextui-org/react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
const Drawer = ({ children, textIcon, imageHref, headerText ,  text, chipNumber, icon }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenDrawer((prev) => !prev)}
        className="flex-center gap-x-1 bg-transparent px-0 min-w-11"
      >
        {textIcon ? (
          <>
            <Image
              width={24}
              height={24}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL={imageHref}
              src={imageHref}
              className="mr-1 md:mr-0"
            />
            <span className="hidden md:block">{text}</span>
            <Chip
              color="secondary"
              variant="solid"
              classNames={{ base: "rounded-full py-1.5" , content: "px-1.5" }}
            >
              {chipNumber}
            </Chip>
          </>
        ) : (
          icon
        )}
      </button>
      <section className="relative">
        {/* Backdrop */}
        <div
          onClick={() => setIsOpenDrawer((prev) => !prev)}
          className={`${
            isOpenDrawer ? "block" : "hidden"
          } w-screen h-screen fixed inset-0 bg-primary-200/50 backdrop-opacity-40 z-40`}
        ></div>
        {/* Drawer Body */}
        <div
          className={`${
            isOpenDrawer ? "right-0" : "-right-[30rem]"
          } bg-white w-full max-w-[22rem] h-full fixed top-0 p-6 rounded-tl-lg rounded-bl-lg overflow-auto z-50 transition-all ease-linear duration-500`}
        >
          <div className="flex-between">
          <p> {headerText}</p>
         <div onClick={() => setIsOpenDrawer((prev) => !prev)} className="cursor-pointer">
         <HiXMark className="size-6"/>
         </div>
          </div>
         <Divider className="my-3"/>
          {children}
        </div>
      </section>
    </>
  );
};

export default Drawer;
