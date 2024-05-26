"use client";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { HiMinus, HiOutlinePlus, HiOutlineShoppingCart } from "react-icons/hi";
import useTitle from "src/hooks/useTitle";
import ProductDescription from "./ProductDescription";

const ProductDetails = ({ product }) => {
  const {
    title,
    price,
    offPrice,
    discount,
    countInStock,
    imageLink,
    description,
  } = product;
  const [count, setCount] = useState(1);
  const MinusCountHandler = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const pageTitle = useTitle(`${title} | ایواز پلاس`);
  return (
    <>
      <div className="flex justify-between gap-14 mb-12">
        {/* Details */}
        <div className="flex flex-1 flex-col justify-between">
          <h1 className="text-lg md:text-2xl font-semibold leading-9">
            {title}
          </h1>
          <p className="text-rose-500">
            فقط <span className="font-semibold">{countInStock}</span> عدد در
            انبار موجود می باشد
          </p>
          <div>جدول سایز</div>
          <div className="flex-between">
            {/* Counter */}
            <div className="w-44 h-12 flex-center border border-gray-200 rounded-lg px-1.5">
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="w-10 h-12 flex-center"
              >
                <HiOutlinePlus className="size-5" />
              </button>
              <input
                type="number"
                value={count}
                className="w-full h-12 text-center border-t border-b border-gray-200 outline-none px-10 text-lg"
              />
              <button
                onClick={MinusCountHandler}
                disabled={count === 1 && true}
                className="w-10 h-12 flex-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <HiMinus className="size-5" />
              </button>
            </div>
            {countInStock > 0 ? (
              <>
                <div
                  className={`${
                    discount > 0 ? "flex-between" : "flex-center gap-5"
                  }`}
                >
                  <div className="flex-center gap-1">
                    <span className="text-2xl font-semibold">
                      {price.toLocaleString()}
                    </span>
                    <Image
                      width={20}
                      height={20}
                      alt="ghorbani-dev.ir"
                      placeholder="blur"
                      blurDataURL="/images/toman/toman.svg"
                      src="/images/toman/toman.svg"
                      className="rounded-none"
                    />
                  </div>
                  {discount > 0 && (
                    <>
                      <p className="text-gray-400 line-through">
                        {offPrice.toLocaleString()}
                      </p>
                      <Chip color="secondary" variant="solid">
                        ٪{discount} تخفیف
                      </Chip>
                    </>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <Button
            disabled={countInStock === 0 && true}
            color="primary"
            className="w-full flex-center gap-x-1.5 bg-primary disabled:bg-slate-200 disabled:cursor-not-allowed text-white hover:bg-secondary hover:opacity-100 rounded-lg py-2.5 transition-colors"
          >
            {countInStock > 0 ? (
              <>
                <HiOutlineShoppingCart className="size-6" /> افزودن به سبد خرید{" "}
              </>
            ) : (
              <span className="text-rose-500">اتمام موجودی</span>
            )}
          </Button>
        </div>
        {/* Image */}
        <div className="flex justify-end flex-1">
          <Image
            width={470}
            height={628}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={`/images/products/${imageLink}`}
            src={`/images/products/${imageLink}`}
          />
        </div>
      </div>
      {/* Description */}
     <ProductDescription description={description}/>
    </>
  );
};

export default ProductDetails;
