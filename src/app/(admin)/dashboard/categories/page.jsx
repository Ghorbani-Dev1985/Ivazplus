"use client";
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loading";
import useTitle from "src/hooks/useTitle";
import TitleLink from "@/UI/TitleLink";
import { useGetCategories } from "src/hooks/useCategories";
import CategoriesList from "./CategoriesList";
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
    <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
      همه دسته بندی‌ها
    </span>
      <CategoriesList
        categoryArrayItem={categories.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )}
      />
    </div>
  );
};

export default Categories;
