"use client";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

const ProductPrice = ({countInStock , discount , price , offPrice}) => {
    return ( 
        countInStock > 0 ? (
            <>
              <div className={`${discount > 0 ? "flex-between" : "flex-center gap-5"}`}>
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
          )
     );
}
 
export default ProductPrice;