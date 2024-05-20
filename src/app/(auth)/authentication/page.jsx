"use client";
import SendOTPForm from "@/Features/Authentication/SendOTPForm";
import { GetOtp } from "@/Services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Authentication = () => {
  const { handleSubmit, register, reset , formState: { errors }} = useForm();
  const [step, setStep] = useState(1);
  const {
     isLoading: isPendingOtp,
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

  return (
    <SendOTPForm
      register={register}
      SendOtpHandler={handleSubmit(SendOtpHandler)}
      isPendingOtp={isPendingOtp}
      errors={errors}
    />
  );
};

export default Authentication;
