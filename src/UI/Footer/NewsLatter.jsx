import Link from "next/link";
import { BiLogoInstagram } from "react-icons/bi";
import TextField from "../TextField";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const NewsLatter = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    return ( 
        <div className="col-span-3">
                  <div className="flex flex-col gap-y-8">
                  <h4 className="mb-4 text-lg">عضویت در خبرنامه</h4>
                  {/* Form */}
                  <div className="flex-center relative">
                  <TextField
                  name="identifier"
                  placeholder="شماره همراه یا ایمیل خود را وارد نمایید"
                  required
                  register={register}
                  customStyle="bg-white rounded-xl"
                  validationSchema={{
                    required: "شماره همراه یا ایمیل خود را وارد نمایید",
                  }}
                  errors={errors}
                />
                <Button
                  isIconOnly
                  color="primary"
                  aria-label="search"
                  className="hover:bg-secondary transition-colors px-7 py-6 absolute left-0"
                >
                  ثبت
                </Button>
                  </div>
                  {/* Instagram */}
                  <div className="w-full flex-between bg-gradient-to-r from-primary to-secondary text-white px-2 py-3.5 rounded-lg">
                     <span>ما را دنبال کنید</span>
                     <Link href="https://www.instagram.com/ivaz_plus/" target="_blank" className="flex-center gap-2"><span className="dir-ltr">@ivaz_plus</span>
                     <BiLogoInstagram className="size-7"/>
                     </Link>
                  </div>
                  </div>
               </div>
     );
}
 
export default NewsLatter;