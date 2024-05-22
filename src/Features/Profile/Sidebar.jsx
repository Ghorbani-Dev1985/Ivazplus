import { Divider, Link } from "@nextui-org/react";
import Image from "next/image";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";

const Sidebar = () => {
    return ( 
       <aside className="col-span-1 overflow-y-auto">
       <section className="bg-gradient-to-t from-primary to-secondary p-3 rounded-3xl min-h-screen">
        <ul className="flex flex-col space-y-8">
        <li className="max-w-32 self-center bg-white p-4 rounded-lg">
        <Image
                  width={103}
                  height={110}
                  alt="ghorbani-dev.ir"
                  placeholder="blur"
                  blurDataURL="/images/logo/logo.svg"
                  src="/images/logo/logo.svg"
                  className="object-cover"
                />
        </li>
        <Divider className="bg-white"/>
         <li>
            <Link href="/" className="bg-white p-2 rounded-lg flex items-center gap-x-1.5"><HiOutlineHome className="size-5"/> صفحه اصلی</Link>
         </li>
         <li>
            <Link href="/profile/me" className="bg-white p-2 rounded-lg flex items-center gap-x-1.5"><HiOutlineUser className="size-5"/> اطلاعات کاربری</Link>
         </li>
        </ul>
       </section>
       </aside> 
     );
}
 
export default Sidebar;