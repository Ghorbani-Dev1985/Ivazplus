"use client";
import CheckOTPForm from "@/Features/Authentication/CheckOTPForm";
import SendOTPForm from "@/Features/Authentication/SendOTPForm";
import { GetOtp } from "@/Services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useTitle from "src/hooks/useTitle";


const Authentication = () => {
  const title = useTitle("ورود ثبت نام | ایواز پلاس")
  const {getValues , register , errors} = useForm();
  const [step, setStep] = useState(2);
  const {
    isPending: isPendingOtp,
    data: OtpResponse,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: GetOtp,
  });
  const SendOtpHandler = async (data) => {
    try {
      const { message } = await mutateGetOtp(data);
      reset();
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            SendOtpHandler={handleSubmit(SendOtpHandler)}
            isPendingOtp={isPendingOtp}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((s) => s - 1)}
            phoneNumber={getValues("PhoneNumber")}
            onResendOtp={SendOtpHandler}
            otpResponse={OtpResponse}
          />
        );
      default:
        return null;
    }
  };
  return renderSteps();
};

export default Authentication;
