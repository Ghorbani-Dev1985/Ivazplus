"use client"
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loding";
import useTitle from "src/hooks/useTitle";
import { useGetProducts } from "src/hooks/useProducts";
import ProductsList from "./ProductsList";
const Products = () => {
  const title = useTitle("محصولات | ایواز پلاس")
   const { data, isLoading } =  useGetProducts();
   const {products} = data || {};
   console.log(products)
   if(isLoading) return <Loading />
   if(products.length === 0) return <Alert alertText="هیچ محصولی یافت نشد"></Alert>
    return ( 
        <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
            همه محصولات
      </span>
       <ProductsList productArrayItem={products.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))}/>
      </div>
     );
}
 
export default Products;
