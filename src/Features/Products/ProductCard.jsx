"use client";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { slug, imageLink, title, price, countInStock, discount, offPrice } =
    product;
  return (
    <div className="flex flex-col gap-y-5">
      <Link href={`products/${slug}`} className="min-h-[297px]">
        <Image
          width={222}
          height={297}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL={`/images/products/${imageLink}`}
          src={`/images/products/${imageLink}`}
        />
      </Link>
      <Link
        href={`products/${slug}`}
        className="text-center font-semibold leading-7 line-clamp-2 min-h-16"
      >
        {title}
      </Link>
      {countInStock > 0 ? (
        <>
          <div className={`${discount > 0 ? "flex-between" : "flex-center"}`}>
            {discount > 0 && (
              <>
                <p className="text-gray-400 line-through">
                  {offPrice.toLocaleString()}
                </p>
                <Chip color="secondary" variant="solid">
                  %{discount}
                </Chip>
              </>
            )}
            <div className="flex-center gap-1">
              <span className="text-lg font-semibold">
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
          </div>
        </>
      ) : (
        <p className="text-rose-500 flex-center">اتمام موجودی</p>
      )}
    </div>
  );
};

export default ProductCard;
