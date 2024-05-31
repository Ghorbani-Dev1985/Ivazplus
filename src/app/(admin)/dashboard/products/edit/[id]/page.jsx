"use client"
import ProductForm from "@/Features/Dashboard/ProductForm";
import Loading from "@/UI/Loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetCategories } from "src/hooks/useCategories";
import { useGetProductById, useUpdateProduct } from "src/hooks/useProducts";

const EditProduct = () => {
    const {id} = useParams();
    const router = useRouter();
    const {data , isPending : isLoadingProduct} = useGetProductById(id);
    const {product} = data || {};
    const { data : categoriesData } = useGetCategories();
    const { isPending, mutateAsync } = useUpdateProduct();
  const { categories } = categoriesData || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm({ mode: "all" });
  const [tags, setTags] = useState([]);
  const [getCategory , setGetCategory] = useState("")
  const EditProductHandler = async (data) => {
    try {
      const { message } = await mutateAsync({data: {...data}, tags , productId: product._id});
      toast.success(message);
      router.push("/dashboard/products")
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    if(product){
      reset({
         title: product.title,
        description: product.description,
        slug: product.slug,
        brand: product.brand,
        price: product.price,
        discount: product.discount,
        offPrice: product.offPrice,
        countInStock: product.countInStock,
        imageLink: product.imageLink,
      });
      setTags(product.tags)
      setGetCategory(product.category.title)
    }
  }, [data]);
   if(isLoadingProduct) return <Loading />
    return ( 
        <div className="flex flex-col items-center">
        <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
          ویرایش محصول 
        </span>
        <ProductForm
        handler={EditProductHandler}
        tags={tags}
        setTags={setTags}
        categories={categories}
        isPending={isPending}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        control={control}
        getCategory={getCategory}
      />
        </div>
     );
}
 
export default EditProduct;