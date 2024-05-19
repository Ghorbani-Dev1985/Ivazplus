"use client";
import Loading from "@/UI/Loding";
import TextField from "@/UI/TextField";
import { Button, Checkbox, Divider } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  return (
    <>
      <h2 className="text-2xl my-6"> عضویت در فروشگاه </h2>
      <form
        onSubmit={handleSubmit()}
        className="w-full max-w-sm mb-4 space-y-5"
      >
        <TextField
          name="name"
          placeholder="لطفا نام کامل خود را وارد نمایید"
          label="  نام کامل"
          required
          register={register}
          validationSchema={{
            required: "لطفا نام کامل را وارد نمایید",
            minLength: {
              value: 6,
              message: "حداقل ۶ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 30,
              message: "حداکثر ۳۰ کاراکتر وارد نمایید",
            },
            pattern: {
              value: /^[\u0600-\u06FF\s]+$/g,
              message: "لطفا فقط حروف فارسی وارد نمایید",
            },
          }}
          errors={errors}
        />
        <TextField
          name="email"
          placeholder="لطفا ایمیل خود را وارد نمایید"
          label=" ایمیل "
          required
          register={register}
          validationSchema={{
            required: "لطفا ایمیل خود را وارد نمایید",
            minLength: {
              value: 6,
              message: "حداقل ۶ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 30,
              message: "حداکثر ۳۰ کاراکتر وارد نمایید",
            },
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g,
              message: "لطفا ایمیل صحیح وارد نمایید",
            },
          }}
          errors={errors}
        />
        <TextField
          name="phoneNumber"
          type="tel"
          placeholder="لطفا تلفن تماس خود را وارد نمایید"
          label="   تلفن تماس"
          required
          register={register}
          validationSchema={{
            required: "لطفا تلفن تماس خود را وارد نمایید",
            minLength: {
              value: 11,
              message: "حداقل ۱۱ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 11,
              message: "حداکثر ۱۱ کاراکتر وارد نمایید",
            },
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
              message: "لطفا تلفن تماس را صحیح  و با عدد انگلیسی وارد نمایید",
            },
          }}
          errors={errors}
        />
        <TextField
          name="password"
          type={isShowPassword ? "text" : "password"}
          placeholder="لطفا کلمه عبور خود را وارد نمایید"
          label="   کلمه عبور "
          required
          register={register}
          validationSchema={{
            required: "لطفا عبور خود را وارد نمایید",
            minLength: {
              value: 8,
              message: "حداقل ۸ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 20,
              message: "حداکثر ۲۰ کاراکتر وارد نمایید",
            },
            pattern: {
              value:
                /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
              message:
                "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد",
            },
          }}
          errors={errors}
        >
          <button type="button"
            className="absolute h-full left-2 top-0"
            onClick={() => setIsShowPassword((prev) => !prev)}
          >
            {isShowPassword ? (
              <HiOutlineEyeOff className="size-5 stroke-slate-600" />
            ) : (
              <HiOutlineEye className="size-5 stroke-slate-600" />
            )}
          </button>
        </TextField>
        <div>
          <Controller
            control={control}
            {...register("isAcceptRule", {
              required: "لطفا قوانین سایت را مطالعه و بپذیرید",
            })}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                color="secondary"
                onChange={onChange}
                isSelected={value}
                
              >
                <div className="flex-center">
                  <p>با ثبت نام، تمام </p>
                  <Link href="/rule" className="px-1 font-extrabold">
                    قوانین و مقررات
                  </Link>
                  <p>سایت را می پذیرم</p>
                </div>
              </Checkbox>
            )}
          />
          {errors.isAcceptRule && (
            <span className="block text-right text-rose-500 text-base">
              {errors.isAcceptRule.message}
            </span>
          )}
        </div>

        <div className="w-full flex-center my-5">
          {/* {
            loading ? <Loading /> :  <Button
            type="submit"
            color="primary"
            className="w-full hover:bg-secondary hover:opacity-100 py-6"
          >
            عضویت
          </Button>
          }
          */}
        </div>
      </form>
      <Divider />
      <div className="flex-center gap-1 p-4 text-primary text-sm">
        <span>قبلا ثبت نام کرده اید؟</span>
        <Link href="/login" className="font-extrabold">
          ورود
        </Link>
      </div>
    </>
  );
};

export default RegisterPage;
