"use client";
import Image from "next/image";
import React from "react";
import { useGetProducts } from "src/hooks/useProducts";
import ProductCard from "../Products/ProductCard";
import { SwiperSlide } from "swiper/react";
import { HiOutlineChevronLeft,HiOutlineChevronRight} from "react-icons/hi";
import ProductSlider from "@/UI/ProductSlider";
import Loading from "@/UI/Loading";

const SalesProductSlider = () => {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
  const salesProducts = products?.filter((product) => product.discount > 0)
  console.log(salesProducts)
  return (
    <section className="bg-gray-100 my-16 relative z-10 p-6">
      <div className="flex-center my-10">
        <p className="text-primary font-semibold text-3xl "> محصولات با تخفیفی ایواز</p>
      </div>
      <div className="flex flex-col justify-center mb-8">
        {
            isLoading ? <Loading /> :  
        <ProductSlider
          SwiperNextBtnID="#NewCoursesSwiperNextBtn"
          SwiperPrevBtnID="#NewCoursesSwiperPrevBtn"
        >
          { 
          salesProducts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 15)
            .map((product) => {
              return (
                <SwiperSlide className="rounded-2xl" key={product._id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            }) }
        </ProductSlider>
        }
      </div>
      <div className="flex-center absolute -bottom-7 right-0 left-0 z-20">
      <div className="flex gap-2">
          <button
            type="button"
            id="NewCoursesSwiperNextBtn"
            className="flex-center size-10 lg:size-14 rounded-full shrink-0 bg-white border border-gray-200 hover:text-primary text-gray-400 transition-colors"
          >
            <HiOutlineChevronRight className="size-6 lg:size-8" />
          </button>
          <button
            type="button"
            id="NewCoursesSwiperPrevBtn"
            className="flex-center size-10 lg:size-14 rounded-full shrink-0 bg-white border border-gray-200 hover:text-primary text-gray-400 transition-colors"
          >
            <HiOutlineChevronLeft className="size-6 lg:size-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalesProductSlider;
