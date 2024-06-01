"use client";
import ProductForm from "@/Features/Dashboard/ProductForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddProduct, useGetProducts } from "src/hooks/useProducts";
import useTitle from "src/hooks/useTitle";

const CreateCoupon = () => {
  const title = useTitle("افزودن کد تخفیف | ایواز پلاس");
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm({ mode: "all" });
  const { isPending , mutateAsync } = useAddProduct();
  const CreateCouponHandler = async (data) => {
    try {
      const { message } = await mutateAsync({ ...data, tags });
      toast.success(message);
      reset();
    } catch (error) {
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
      <ProductForm
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
