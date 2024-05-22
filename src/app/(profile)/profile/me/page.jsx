"use client";
import Loading from "@/UI/Loding";
import TextField from "@/UI/TextField";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetUser } from "src/hooks/useAuth";
import useTitle from "src/hooks/useTitle";

const Me = () => {
  const title = useTitle("اطلاعات کاربری | ایواز پلاس");
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
     let userInfos = {}
   if(user){
       userInfos = {
         name: user.name,
         phoneNumber: user.phoneNumber,
         email: user.email,
         biography: user.biography
       };
   }
  useEffect(() => {
  
 }, [user]);
  console.log(userInfos)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: userInfos , mode: "all" });

  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
        جزییات حساب کاربری
      </span>
      <form className="w-full max-w-xl space-y-9">
        <TextField
          label=" نام و نام خانوادگی"
          name="name"
          required
          register={register}
          validationSchema={{
            required: "لطفا نام و نام خانوادگی را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 25,
              message: "حداکثر ۲۵ کاراکتر وارد نمایید",
            },
            pattern: {
              value: /^[\u0600-\u06FF\s]+$/g,
              message: "لطفا فقط حروف فارسی وارد نمایید",
            },
          }}
          errors={errors}
          placeholder=" لطفا نام و نام خانوادگی خود را وارد نمایید"
        />

        <TextField
          label=" تلفن تماس"
          name="phoneNumber"
          required
          register={register}
          validationSchema={{
            required: "لطفا تلفن تماس را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 35,
              message: "حداکثر ۳۵ کاراکتر وارد نمایید",
            },
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
              message: "لطفا فقط عدد انگلیسی وارد نمایید",
            },
          }}
          errors={errors}
          ltr
          placeholder=" لطفا تلفن تماس خود را وارد نمایید"
        />
        <TextField
          label=" ایمیل"
          name="email"
          required
          register={register}
          validationSchema={{
            required: "لطفا ایمیل را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 35,
              message: "حداکثر ۳۵ کاراکتر وارد نمایید",
            },
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g,
              message: "لطفا ایمیل صحیح وارد نمایید",
            },
          }}
          errors={errors}
          ltr
          placeholder=" لطفا ایمیل خود را وارد نمایید"
        />

        <TextField
          label=" بایوگرافی "
          name="biography"
          required
          register={register}
          validationSchema={{
            required: "لطفا بایوگرافی را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 35,
              message: "حداکثر ۳۵ کاراکتر وارد نمایید",
            },
          }}
          errors={errors}
          placeholder=" لطفا بایوگرافی خود را وارد نمایید"
        />
         {
          isLoading ? <Loading /> :
         <Button
            type="submit"
            color="primary"
            className="w-full hover:bg-secondary hover:opacity-100 rounded-lg py-6"
          >
            ثبت اطلاعات
          </Button>
         }
      </form>
    </div>
  );
};

export default Me;
