import Image from "next/image";
import Link from "next/link";

const ProductCard = ({slug , imageLink , title , price , countInStock}) => {
    return ( 
        <div className="flex flex-col items-center gap-y-5">
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
        <div className="flex-center gap-1.5">
            {
                    countInStock > 0 ? <>
                <span className="text-lg font-semibold">
                  {price.toLocaleString()}
                </span>
                <Image
                  width={25}
                  height={25}
                  alt="ghorbani-dev.ir"
                  placeholder="blur"
                  blurDataURL="/images/toman/toman.svg"
                  src="/images/toman/toman.svg"
                  className="rounded-none"
                /></> : <span className="text-rose-500">اتمام موجودی</span>
            }
        </div>
      </div>
     );
}
 
export default ProductCard;