import { useState } from "react";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
const Drawer = ({ children, textIcon, imageHref, text, chipNumber, icon }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenDrawer((prev) => !prev)}
        className="flex-center bg-transparent px-0 min-w-11"
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
              objectFit={true}
            />
            <span className="hidden md:block">{text}</span>
            <Chip
              color="secondary"
              variant="solid"
              classNames={{ base: "rounded-full" }}
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
          } bg-white w-full max-w-[18rem] h-full fixed top-0 p-6 rounded-tl-lg rounded-bl-lg overflow-auto z-50 transition-all ease-linear duration-500`}
        >
         <div onClick={() => setIsOpenDrawer((prev) => !prev)} className="flex items-center justify-end cursor-pointer">
         <HiXMark className="size-6"/>
         </div>
          {children}
        </div>
      </section>
    </>
  );
};

export default Drawer;
