"use client"
import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = () => {
    const [otp , setOtp] = useState("")
    const CheckOtpHandler = async (event) => {
        event.preventDefault()
        try {
        const {message , user } = await mutateAsync({phoneNumber , otp})
         toast.success(message)
            if(user.status !== 2) {
                navigate("/")
                toast("پروفایل شما در انتظار تایید می باشد" , {icon: "⏳"})
                return
            }
         if(user.role === "OWNER") return navigate("/owner")
         if(user.role === "FREELANCER") return navigate("/freelancer")
         if(user.role === "ADMIN") return navigate("/admin")
        }catch(error) {
          
          toast.error(error?.response?.data?.message)
        }
      }
    return ( 
        <>
         <h2 className="text-2xl my-6"> ورود به حساب کاربری</h2>
      <form onSubmit={CheckOtpHandler} className="w-full max-w-sm mb-4">
      <OTPInput value={otp} onChange={setOtp} numInputs={6} renderInput={(props) => <input type='number' className='appearance-none' {...props} />} renderSeparator={<span> - </span>} containerStyle="flex flex-row-reverse justify-center mb-7" inputStyle={{width: '2.5rem', padding: "0.5rem", borderRadius: ".5rem" , margin: "0 .3rem" , border: "1px solid #6d2c88" , outline: "none"}}/>
      </form>
        </>
     );
}
 
export default CheckOTPForm;