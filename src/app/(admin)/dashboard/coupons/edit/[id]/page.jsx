"use client";
import CouponForm from "@/Features/Dashboard/CouponForm";
import Loading from "@/UI/Loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetOneCoupon, useUpdateCoupon } from "src/hooks/useCoupons";
import { useGetProducts } from "src/hooks/useProducts";

const EditCoupon = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data, isPending: isLoadingCoupon } = useGetOneCoupon(id);
  const { coupon } = data || {};
  const { isPending, mutateAsync } = useUpdateCoupon();
  const { data: productsData } = useGetProducts();
  const { products } = productsData || {};
  const [type, setType] = useState("");
  const [couponProducts, setCouponProducts] = useState([]);
  const [exDate, setExDate] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({ mode: "all" });
  const EditCouponHandler = async (data) => {
    const splitIds = data.productIds.split(",");
    try {
      const { message } = await mutateAsync({
        data: {
          ...data,
          expireDate: new Date(data.expireDate).toISOString(),
          productIds: splitIds.map((id) => id),
        },
        id: coupon._id,
      });
      toast.success(message);
      router.push("/dashboard/coupons");
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    if (coupon) {
      reset({
        code: coupon.code,
        amount: coupon.amount,
        usageLimit: coupon.usageLimit,
        type: coupon.type,
      });
      setType(coupon.type);
      setCouponProducts(coupon.productIds);
      setExDate(coupon.expireDate);
    }
  }, [data]);
  if (isLoadingCoupon) return <Loading />;
  return (
    <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
        ویرایش محصول
      </span>
      <CouponForm
        handler={EditCouponHandler}
        isPending={isPending}
        products={products}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        control={control}
        type={type}
        couponProducts={couponProducts}
        exDate={exDate}
      />
    </div>
  );
};

export default EditCoupon;
