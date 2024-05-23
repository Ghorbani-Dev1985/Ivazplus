import ProductCard from "@/Features/Products/ProductCard";
import { GetCategories } from "@/Services/CategoryService";
import { GetProducts } from "@/Services/ProductServices";
import React from "react";

const Products = async () => {
  const { products } = await GetProducts();
  const { categories } = await GetCategories();
  return (
    <section className="container grid items-start grid-rows-1 grid-cols-4 gap-3.5 sm:gap-5 mt-9 sm:mt-25 my-16">
      <div className="hidden md:grid md:col-span-1">1</div>
      <div className="col-span-4 md:col-span-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map(({ _id, imageLink, title, slug, price , countInStock}) => {
            return (
              <React.Fragment key={_id}>
               <ProductCard imageLink={imageLink} title={title} slug={slug} price={price} countInStock={countInStock}/>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
