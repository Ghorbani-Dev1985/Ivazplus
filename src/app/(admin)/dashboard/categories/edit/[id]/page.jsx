"use client"
import CategoryForm from "@/Features/Dashboard/CategoryForm";
import Loading from "@/UI/Loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetCategories, useGetCategoryById, useUpdateCategory } from "src/hooks/useCategories";
import useTitle from "src/hooks/useTitle";

const EditProduct = () => {
    const title = useTitle("ویرایش دسته بندی | ایواز پلاس")
    const {id} = useParams();
    const router = useRouter();
    const {data , isPending : isLoadingCategory} = useGetCategoryById(id);
    const {category} = data || {};
    const { data : categoriesData } = useGetCategories();
    const { isPending, mutateAsync } = useUpdateCategory();
    const [categoryType , setCategoryType] = useState("")
  const { categories } = categoriesData || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm({ mode: "all" });
  const EditCategoryHandler = async (data) => {
    console.log(data.type)
    try {
      const { message } = await mutateAsync({data: {...data} , id: category._id});
      toast.success(message);
      router.push("/dashboard/categories")
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    if(category){
      reset({
         title: category.title,
         englishTitle: category.englishTitle,
         description: category.description,
      });
      setCategoryType(category.type)
    }
  }, [data]);
   if(isLoadingCategory) return <Loading />
    return ( 
        <div className="flex flex-col items-center">
        <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
          ویرایش محصول 
        </span>
        <CategoryForm
        handler={EditCategoryHandler}
        categories={categories}
        isPending={isPending}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        control={control}
        categoryType={categoryType}
      />
        </div>
     );
}
 
export default EditProduct;