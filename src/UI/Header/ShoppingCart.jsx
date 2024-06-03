import Link from "next/link";
import Drawer from "../Drawer";
import Image from "next/image";
import { Chip, Divider } from "@nextui-org/react";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useDecrementFromCart } from "src/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ShoppingCart = ({ cartItemCount, cart }) => {
  const { mutateAsync: DecFromCartAsync } = useDecrementFromCart();
  const queryClient = useQueryClient();
  const { productDetail } = cart || "";
  const DecrementHandler = async (id) => {
    try {
      const { message } = await DecFromCartAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["getUser"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  console.log(cart);
  return (
    <>
      <Drawer
        textIcon
        headerText="سبد خرید"
        imageHref="/images/icon/cart.svg"
        text="سبد خرید"
        chipNumber={cartItemCount}
      >
        <section className="flex flex-col justify-between min-h-screen">
          <div>
            {productDetail?.map(
              ({
                _id,
                imageLink,
                slug,
                quantity,
                title,
                price,
                offPrice,
                discount,
              }) => {
                return (
                  <React.Fragment key={_id}>
                    <section className="flex-center gap-x-1.5">
                      <div className="w-1/5">
                        <Link
                          href={`products/${slug}`}
                          className="min-h-[297px]"
                        >
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
                          className="text-right text-xs font-semibold leading-7 line-clamp-1"
                        >
                          {title}
                        </Link>
                        <p>تعداد: {quantity}</p>
                        <p
                          onClick={() => DecrementHandler(_id)}
                          className="cursor-pointer"
                        >
                          <HiOutlineTrash className="size-5 text-rose-500" />
                        </p>
                        <div
                          className={`${
                            discount > 0 ? "flex-between" : "flex-center"
                          }`}
                        >
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
                      </div>
                    </section>
                    <Divider className="my-1.5" />
                  </React.Fragment>
                );
              }
            )}
          </div>
          <div className="w-full">
          <Divider className="my-1.5" />
            <div className="flex-between">
              <p>جمع کل خرید</p>
              <div className="flex-center gap-x-1 font-bold text-lg">
                {cart?.payDetail.totalPrice.toLocaleString()}
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
          <Link href="/cart" className="w-full flex-center bg-primary hover:bg-secondary text-white my-3 py-3 rounded-xl transition-colors">تسویه حساب</Link>
          </div>
        </section>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
