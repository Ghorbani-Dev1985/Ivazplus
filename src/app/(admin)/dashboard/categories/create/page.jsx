"use client";
import CategoryForm from "@/Features/Dashboard/CategoryForm";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddCategory, useGetCategories } from "src/hooks/useCategories";
import useTitle from "src/hooks/useTitle";

const CreateProduct = () => {
  const title = useTitle("افزودن دسته بندی | ایواز پلاس");
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
  const { isPending , mutateAsync } = useAddCategory();
  const CreateCategoryHandler = async (data) => {
    try {
      const { message } = await mutateAsync({...data});
      toast.success(message);
      router.push("/dashboard/categories")
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
        افزودن دسته بندی جدید
      </span>
      <CategoryForm
        handler={CreateCategoryHandler}
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
