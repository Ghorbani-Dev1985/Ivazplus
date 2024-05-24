import ProductCard from "@/Features/Products/ProductCard";
import { GetCategories } from "@/Services/CategoryService";
import { GetProducts } from "@/Services/ProductServices";
import React from "react";
import CategorySidebar from "./[slug]/CategorySidebar";

const Products = async () => {
  const { products } = await GetProducts();
  const { categories } = await GetCategories();
  return (
    <section className="container grid items-start grid-rows-1 grid-cols-4 gap-3.5 sm:gap-5 mt-9 sm:mt-25 my-16">
      <div className="hidden md:grid md:col-span-1"><CategorySidebar categories={categories}/></div>
      <div className="col-span-4 md:col-span-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => {
            return (
              <React.Fragment key={product._id}>
               <ProductCard product={product}/>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
