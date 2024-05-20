"use client";
import SendOTPForm from "@/Features/Authentication/SendOTPForm";
import { useForm } from "react-hook-form";

const Authentication = () => {
     const {handleSubmit , register } = useForm()
     const SendOtpHandler = async (data) => {
        console.log("data" , data)
        // try {
        // const {message} = await mutateAsync(data)
        // setStep(2)
        // toast.success(message)
        // }catch (error) {
        //     console.log(error)
        //   toast.error(error?.response?.data?.message)
        // }
      }
  
 return <SendOTPForm register={register} SendOtpHandler={handleSubmit(SendOtpHandler)}/>
}
 
export default Authentication;
