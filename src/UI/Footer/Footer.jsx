import { Divider } from "@nextui-org/react";
import PreFooter from "./PreFooter";
import { footerMenusItems } from "src/constants/Footer";
import Link from "next/link";
import Image from "next/image";
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
    return ( 
        <section className="bg-slate-100 p-5">
            <div className="container max-w-screen-xl">
              <PreFooter />
              <Divider className="my-8"/>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-11 gap-x-2 gap-y-5">
                <div className="flex-center col-span-2">
                <Image
                    width={200}
                    height={200}
                    alt="ghorbani-dev.ir"
                    placeholder="blur"
                    blurDataURL="/images/footer/Enamad-logo.png"
                    src="/images/footer/Enamad-logo.png"
                    className="bg-white rounded-xl p-3"
                    />
                </div>
                {
                footerMenusItems.map(({id , title , menuItems}) => {
                    return(
                      <div key={id} className="col-span-2">
                        <h4 className="mb-4 text-lg">{title}</h4>
                        <ul className="flex flex-col gap-y-4">
                            {
                                menuItems.map(({id, title , href}) => {
                                    return(
                                    <li key={id}>
                                       <Link href={href}>{title}</Link>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                      </div>   
                    )
                }) 
                }
               <div className="col-span-3">
                  <div classNam e="flex flex-col">
                  <h4 className="mb-4 text-lg">عضویت در خبرنامه</h4>
                  <div className="w-full flex-between bg-gradient-to-r from-primary to-secondary text-white px-2 py-3.5 rounded-lg">
                     <span>ما را دنبال کنید</span>
                     <Link href="https://www.instagram.com/ivaz_plus/" target="_blank" className="flex-center gap-2"><span className="dir-ltr">@ivaz_plus</span>
                     <BiLogoInstagram className="size-7"/>
                     </Link>
                  </div>
                  </div>
               </div>
              </div>
              <Divider className="my-8"/>
            </div>
        </section>
     );
}
 
export default Footer;