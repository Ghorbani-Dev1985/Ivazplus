import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const SearchResultCard = ({ product }) => {
  const { slug, imageLink, title, price, discount, offPrice, countInStock } =
    product;
  return (
    <section className="flex-center gap-x-1.5 border border-slate-100 rounded-lg p-2">
      <div className="w-1/5">
        <Link href={`products/${slug}`} className="min-h-[297px]">
          <Image
            width={90}
            height={90}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={`/images/products/${imageLink}`}
            src={`/images/products/${imageLink}`}
          />
        </Link>
      </div>
      <div className="w-3/4 flex flex-col gap-y-2">
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
    </section>
  );
};

export default SearchResultCard;
