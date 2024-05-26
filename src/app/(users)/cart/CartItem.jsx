"use client";
import Counter from "@/Features/Products/Counter";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ cartItem }) => {
  const {_id, title, imageLink, quantity, slug, discount, offPrice, price } = cartItem;
  return (
    <div className="flex flex-col lg:flex-row gap-y-6 flex-between border border-gray-200 rounded-3xl p-3 mb-5">
      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center gap-x-2 gap-y-4">
        <Image
          width={114}
          height={152}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL={`/images/products/${imageLink}`}
          src={`/images/products/${imageLink}`}
        />
        <div className="lg:max-w-60 flex flex-col gap-y-4">
          <Link
            href={`/products/${slug}`}
            className="text-base hover:text-primary font-bold transition-colors line-clamp-1"
          >
            {title}
          </Link>
          <ul className="child:list-disc mr-5 text-gray-500 space-y-4">
            <li>تعداد: {quantity}</li>
            <li>تخفیف: {discount > 0 ?  <Chip color="secondary" variant="solid">
                        ٪{discount} تخفیف
                      </Chip> : "بدون تخفیف"}</li>
            <li>قیمت با تخفیف: {offPrice.toLocaleString()} تومان</li>
          </ul>
        </div>
      </div>
      <Counter quantity={quantity} id={_id}/>
      <div>
        <span className="font-bold text-lg">{price.toLocaleString()}</span> تومان
      </div>
    </div>
  );
};

export default CartItem;
