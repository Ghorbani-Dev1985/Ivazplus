"use client";
import Image from "next/image";
import React from "react";
import { useGetProducts } from "src/hooks/useProducts";
import ProductCard from "../Products/ProductCard";
import { SwiperSlide } from "swiper/react";
import { HiOutlineChevronLeft,HiOutlineChevronRight} from "react-icons/hi";
import ProductSlider from "@/UI/ProductSlider";
import Loading from "@/UI/Loading";

const NewProductSlider = () => {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
  const salesProducts = products?.filter((product) => product.discount > 0)
  console.log(salesProducts)
  return (
    <section className="lg:grid lg:grid-cols-12 gap-x-28 my-16 overflow-hidden">
      <div className="lg:col-span-4 flex flex-col items-center justify-center gap-y-4 xl:mr-60">
        <Image
          width={79}
          height={85}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL="/images/logo/logo.svg"
          src="/images/logo/logo.svg"
          className="hidden lg:block h-12 md:h-auto rounded-none"
        />
        <p className="text-secondary font-semibold text-3xl">محصولات جدید</p>
        <div className="flex gap-2">
          <button
            type="button"
            id="NewCoursesSwiperNextBtn"
            className="flex-center size-10 lg:size-14 rounded-full shrink-0 border border-gray-200 hover:text-primary text-gray-400 transition-colors"
          >
            <HiOutlineChevronRight className="size-6 lg:size-8" />
          </button>
          <button
            type="button"
            id="NewCoursesSwiperPrevBtn"
            className="flex-center size-10 lg:size-14 rounded-full shrink-0 border border-gray-200 hover:text-primary text-gray-400 transition-colors"
          >
            <HiOutlineChevronLeft className="size-6 lg:size-8" />
          </button>
        </div>
      </div>
      <div className="lg:col-span-8 flex flex-col justify-center relative py-12 px-2 md:px-0 before:hidden before:lg:block before:content-[''] before:w-full before:h-full before:absolute before:right-24 before:bg-gray-100 before:rounded-tr-3xl before:rounded-br-3xl">
        {
            isLoading ? <Loading /> :  
        <ProductSlider
          SwiperNextBtnID="#NewCoursesSwiperNextBtn"
          SwiperPrevBtnID="#NewCoursesSwiperPrevBtn"
        >
          { 
          products?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 10)
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
    </section>
  );
};

export default NewProductSlider;
