import { CompleteProfile } from "@/Services/AuthServices";
import Loading from "@/UI/Loading";
import TextField from "@/UI/TextField";
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CompleteProfileForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { mutateAsync: completeProfile, isPending } = useMutation({
    mutationFn: CompleteProfile,
  });
  const CompleteProfileHandler = async (data) => {
    try {
      const { message } = await completeProfile(data);
      toast.success(message);
      router.replace("/");
      toast("پروفایل شما با موفقیت تکمیل گردید");
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <h2 className="text-2xl my-6"> تکمیل پروفایل کاربری</h2>
      <form
        onSubmit={handleSubmit(CompleteProfileHandler)}
        className="w-full max-w-sm space-y-10 mb-8"
      >
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
          ltr
          placeholder="لطفا ایمیل را وارد نمایید"
        />
        <TextField
          label="ایمیل"
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
              value: 30,
              message: "حداکثر ۳۰ کاراکتر وارد نمایید",
            },
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g,
              message: "لطفا ایمیل صحیح وارد نمایید",
            },
          }}
          errors={errors}
          ltr
          placeholder="لطفا ایمیل را وارد نمایید"
        />
        {isPending ? (
          <Loading />
        ) : (
          <Button
            type="submit"
            color="primary"
            className="w-full hover:bg-secondary hover:opacity-100 rounded-lg py-6"
          >
            ثبت
          </Button>
        )}
      </form>
    </>
  );
};

export default CompleteProfileForm;
