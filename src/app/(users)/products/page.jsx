import ProductCard from "@/Features/Products/ProductCard";
import { GetCategories } from "@/Services/CategoryService";
import { GetProducts } from "@/Services/ProductServices";
import React from "react";
import CategorySidebar from "./[slug]/CategorySidebar";
import queryString from "query-string";
import ProductsSort from "./[slug]/ProductsSort";
import { cookies } from 'next/headers'
import ProductsBreadcrumb from "@/Features/Products/ProductsBreadcrumb";
import { ToStringCookies } from "src/utils/ToStringCookies";
export const dynamic = "force-dynamic"; // eq to {cache  : "no-store"} or SSR in pages directory

const Products = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookies = ToStringCookies(cookieStore);
  const productsPromise = GetProducts(queryString.stringify(searchParams), strCookies);
  const categoryPromise = GetCategories();
  const [{ products }, { categories }] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);
  return (
    <>
      <ProductsBreadcrumb />
      <section className="container grid items-start grid-rows-1 grid-cols-4 gap-3.5 sm:gap-5 mt-9 sm:mt-25 my-16">
        <div className="hidden md:grid md:col-span-1">
          <CategorySidebar categories={categories} />
        </div>
        <div className="col-span-4 md:col-span-3">
          <ProductsSort />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => {
              return (
                <React.Fragment key={product._id}>
                  <ProductCard product={product} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
