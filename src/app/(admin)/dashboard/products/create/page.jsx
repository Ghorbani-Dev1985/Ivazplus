"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetCategories } from "src/hooks/useCategories";
import { useAddProduct } from "src/hooks/useProducts";
import useTitle from "src/hooks/useTitle";
import ProductForm from "@/Features/Dashboard/ProductForm";
import { useRouter } from "next/navigation";

const CreateProduct = () => {
  const title = useTitle("افزودن محصول | ایواز پلاس");
  const router = useRouter()
  const { data } = useGetCategories();
  const { categories } = data || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm({ mode: "all" });
  const { isPending , mutateAsync } = useAddProduct();
  const [tags, setTags] = useState([]);
  const CreateProductHandler = async (data) => {
    try {
      const { message } = await mutateAsync({ ...data, tags });
      toast.success(message);
      reset();
      setTags([]);
      router.push("/dashboard/products")
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
        افزودن محصول جدید
      </span>
      <ProductForm
        handler={CreateProductHandler}
        tags={tags}
        setTags={setTags}
        categories={categories}
        isPending={isPending}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        control={control}
      />
    </div>
  );
};

export default CreateProduct;
