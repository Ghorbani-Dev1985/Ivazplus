"use client";
import CouponForm from "@/Features/Dashboard/CouponForm";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddNewCoupon } from "src/hooks/useCoupons";
import { useGetProducts } from "src/hooks/useProducts";
import useTitle from "src/hooks/useTitle";

const CreateCoupon = () => {
  const title = useTitle("افزودن کد تخفیف | ایواز پلاس");
  const router = useRouter();
  const { data } = useGetProducts();
  const { products } = data || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm({ mode: "all" });
  const { isPending , mutateAsync } = useAddNewCoupon();
  const CreateCouponHandler = async (data) => {
    const splitIds = data.productIds.split(',')
    try {
      const { message } = await mutateAsync({...data , expireDate: new Date(data.expireDate).toISOString() , productIds: splitIds.map((id) => id)});
      toast.success(message);
      router.push("/dashboard/coupons");
      reset();
    } catch (error) {
      console.log(error)
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
        افزودن کدتخفیف جدید
      </span>
      <CouponForm
        handler={CreateCouponHandler}
        products={products}
        isPending={isPending}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        control={control}
      />
    </div>
  );
};

export default CreateCoupon;
