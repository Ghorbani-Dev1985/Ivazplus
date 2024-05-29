"use client"
import TextField from "@/UI/TextField";
import { useForm } from "react-hook-form";


const createProduct = () => {
    const {getValues , register , errors , handleSubmit} = useForm({mode : "all"});
    const CreateProductHandler = () => {

    }
    return ( 
        <div className="flex flex-col items-center">
        <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
              افزودن محصول جدید 
             </span>
        <form onSubmit={handleSubmit(CreateProductHandler)}>
        <TextField label=" عنوان" name="title" required register={register}  validationSchema={{
            required: "لطفا عنوان را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 25,
              message: "حداکثر ۲۵ کاراکتر وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا توضیحات را وارد نمایید"/>
          <TextField label=" توضیحات" name="description" required register={register}  validationSchema={{
            required: "لطفا توضیحات را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 50,
              message: "حداکثر ۵۰ کاراکتر وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا لینک را وارد نمایید"/>
          <TextField label=" لینک" name="slug" required register={register}  validationSchema={{
            required: "لطفا لینک را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 15,
              message: "حداکثر ۱۰ کاراکتر وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا نام برند را وارد نمایید"/>
          <TextField label=" نام برند" name="brand" required register={register}  validationSchema={{
            required: "لطفا نام برند را وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 15,
              message: "حداکثر ۱۰ کاراکتر وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا قیمت را وارد نمایید"/>
           <TextField type="number" label=" قیمت (تومان) " name="price" required register={register}  validationSchema={{
            required: "لطفا قیمت را وارد نمایید",
            min: {
              value: 1,
              message: "حداقل ۱ تومان وارد نمایید  ",
            },
            max: {
              value: 10000000,
              message: "حداکثر ۱۰۰۰۰۰۰۰ کاراکتر وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا قیمت را وارد نمایید"/>
          <TextField type="number" label=" درصد تخفیف" name="discount" required register={register}  validationSchema={{
            required: "لطفا درصد تخفیف را وارد نمایید",
            
            min: {
              value: 1,
              message: "حداقل ۱ درصد وارد نمایید  ",
            },
            max: {
              value: 100,
              message: "حداکثر ۱۰۰ درصد وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا درصد تخفیف را وارد نمایید"/>
           <TextField type="number" label=" قیمت با تخفیف (تومان) " name="offPrice" required register={register}  validationSchema={{
            required: "لطفا قیمت با تخفیف را وارد نمایید",
            min: {
              value: 1,
              message: "حداقل ۱ تومان وارد نمایید  ",
            },
            maxLength: {
              value: 10000000,
              message: "حداکثر ۱۰۰۰۰۰۰۰ کاراکتر وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا موجودی را وارد نمایید"/>
           <TextField type="number" label=" موجودی" name="countInStock" required register={register}  validationSchema={{
            required: "لطفا موجودی را وارد نمایید",
            min: {
              value: 1,
              message: "حداقل عدد ۱ وارد نمایید  ",
            },
            maxLength: {
              value: 50,
              message: "حداکثر ۵۰ عدد وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا لینک تصویر را وارد نمایید"/>
          <TextField label=" لینک تصویر" name="imageLink" required register={register}  validationSchema={{
            required: "لطفا لینک تصویر را وارد نمایید",
            minLength: {
                value: 5,
                message: "حداقل ۵ کاراکتر وارد نمایید  ",
              },
              maxLength: {
                value: 25,
                message: "حداکثر ۲۵ کاراکتر وارد نمایید",
              },
          }}
          errors={errors} ltr placeholder=" لطفا  لینک تصویر را وارد نمایید"/>
        </form>
        </div>
     );
}
 
export default createProduct;