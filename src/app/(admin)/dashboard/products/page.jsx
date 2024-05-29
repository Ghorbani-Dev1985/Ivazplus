"use client"
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loding";
import useTitle from "src/hooks/useTitle";
import { useGetProducts } from "src/hooks/useProducts";
import ProductsList from "./ProductsList";
import TitleLink from "@/UI/TitleLink";
import { HiMiniPlusCircle } from "react-icons/hi2";
const Products = () => {
  const title = useTitle("محصولات | ایواز پلاس")
   const { data, isLoading } =  useGetProducts();
   const {products} = data || {};
   console.log(products)
   if(isLoading) return <Loading />
   if(products.length === 0) return <Alert alertText="هیچ محصولی یافت نشد"></Alert>
    return ( 
        <div className="flex flex-col items-center">
      <TitleLink title="همه محصولات" href="/dashboard/products/create" icon={<HiMiniPlusCircle className="size-6"/>} linkText="افزودن محصول جدید" />
       <ProductsList productArrayItem={products.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))}/>
      </div>
     );
}
 
export default Products;
