"use client";
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loading";
import useTitle from "src/hooks/useTitle";
import TitleLink from "@/UI/TitleLink";
import { useGetCategories } from "src/hooks/useCategories";
import CategoriesList from "./CategoriesList";
import { HiMiniPlusCircle } from "react-icons/hi2";
const Categories = () => {
  const title = useTitle("دسته بندی‌ها | ایواز پلاس");
  const { data , isPending} = useGetCategories();
const { categories } = data || {};
  console.log(categories);
  if (isPending) return <Loading />;
  if (categories.length === 0)
    return <Alert alertText="هیچ دسته بندی یافت نشد"></Alert>;
  return (
    <div className="flex flex-col items-center">
     <TitleLink
        title="همه دسته بندی‌ها"
        href="/dashboard/categories/create"
        icon={<HiMiniPlusCircle className="size-6" />}
        linkText="افزودن دسته بندی جدید"
      />
      <CategoriesList
        categoryArrayItem={categories.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )}
      />
    </div>
  );
};

export default Categories;
