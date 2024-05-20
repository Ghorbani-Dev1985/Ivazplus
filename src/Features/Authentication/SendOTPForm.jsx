import Loading from "@/UI/Loding";
import TextField from "@/UI/TextField";
import { Button } from "@nextui-org/react";

const SendOTPForm = ({SendOtpHandler , register , isPendingOtp , errors}) => {
 
    return ( 
        <>
         <h2 className="text-2xl my-6"> ورود | ثبت نام</h2>
         <form onSubmit={SendOtpHandler} className="w-full max-w-sm space-y-10 mb-8">
         <TextField type="tel" label="شماره موبایل" name="phoneNumber" required register={register}  validationSchema={{
            required: "لطفا شماره موبایل را وارد نمایید",
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
              message: "لطفا شماره موبایل صحیح وارد نمایید",
            },
          }}
          errors={errors} ltr placeholder=" لطفا شماره موبایل خود را وارد نمایید"/>
         {
          isPendingOtp ? <Loading /> :
         <Button
            type="submit"
            color="primary"
            className="w-full hover:bg-secondary hover:opacity-100 rounded-lg py-6"
          >
            ارسال کد تایید
          </Button>
         }
         </form>
        </>
     );
}
 
export default SendOTPForm;