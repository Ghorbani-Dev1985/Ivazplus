"use client"
import TextField from "@/UI/TextField";
import { Button } from "@nextui-org/react";

const SendOTPForm = ({SendOtpHandler , register}) => {
    return ( 
        <>
         <h2 className="text-2xl my-6"> ورود | ثبت نام</h2>
         <from onSubmit={SendOtpHandler} className="w-full max-w-sm space-y-10 mb-8">
         <TextField label="شماره موبایل" name="phoneNumber" required register={register} ltr placeholder=" لطفا شماره موبایل خود را وارد نمایید"/>
         <Button
            type="submit"
            color="primary"
            className="w-full hover:bg-secondary hover:opacity-100 rounded-lg py-6"
          >
            ارسال کد تایید
          </Button>
         </from>
        </>
     );
}
 
export default SendOTPForm;