import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";


const ShoppingCart = () => {
    const [isOpenDrawer , setIsOpenDrawer] = useState(false)
    return ( 
        <>
        <Button onPress={() => setIsOpenDrawer((prev) => !prev)} className="flex-center bg-transparent gap-2">
        <Image
              width={24}
              height={24}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL="images/icon/cart.svg"
              src="images/icon/cart.svg"
              objectFit={true}
            />
            <span className="hidden md:block">سبد خرید</span>
            <Chip color="secondary" variant="solid" classNames={{base: "rounded-full"}}>0</Chip>
             </Button>
          <section className="relative">
            <div onClick={() => setIsOpenDrawer((prev) => !prev)} className={`${isOpenDrawer ? "block" : "hidden"} w-screen h-screen fixed inset-0 bg-primary-200/50 backdrop-opacity-40 z-40`}>

            </div>
            <div className={`${isOpenDrawer ? "right-0" : "-right-[30rem]"} bg-white w-full max-w-screen-xs h-full fixed top-0 p-6 rounded-tl-lg rounded-bl-lg z-50 transition-all ease-linear duration-500`}>
wqwqeewq
            </div>
            </section>  
        </>
     );
}
 
export default ShoppingCart;