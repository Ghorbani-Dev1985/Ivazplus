"use client";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import useTitle from "src/hooks/useTitle";
import ProductDescription from "./ProductDescription";
import { useGetUser } from "src/hooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "@/UI/Loading";
import { useAddToCart } from "src/hooks/useCart";
import Link from "next/link";
import Counter from "./Counter";
import { LikeProduct } from "@/Services/ProductServices";

const ProductDetails = ({ product }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    _id,
    title,
    price,
    offPrice,
    discount,
    countInStock,
    imageLink,
    description,
    likes,
  } = product;
  console.log(product);
  const pageTitle = useTitle(`${title} | ایواز پلاس`);
  const { data } = useGetUser();
  const { user, cart } = data || {};
  const filteredQuantity = cart?.productDetail.filter(
    (item) => item._id === _id
  );
  const { isPending, mutateAsync } = useAddToCart();
  const AddToCartHandler = async () => {
    if (!user) {
      toast.error("لطفا ابتدا لاگین کنید");
      router.push("/authentication");
      return;
    }
    try {
      const { message } = await mutateAsync(_id);
      toast.success(message);
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  const LikeHandler = async () => {
    if (!user) {
      toast.error("لطفا ابتدا لاگین کنید");
      return;
    }
    try {
      const { message } = await LikeProduct(_id);
      toast.success(message);

      router.refresh();
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  const isInCart = (user, product) => {
    if (!user) return false;
    return user.cart?.products.some((p) => p.productId === product._id);
  };
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
            <Counter
              quantity={filteredQuantity && filteredQuantity[0]?.quantity}
              id={_id}
              countInStock={countInStock}
            />
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
          {isInCart(user, product) ? (
            <Link
              href="/cart"
              className="w-full flex-center border border-primary hover:bg-primary-50 p-2 rounded-lg text-primary transition-colors"
            >
              ادامه سفارش
            </Link>
          ) : isPending ? (
            <Loading />
          ) : (
            <Button
              disabled={countInStock === 0 && true}
              onPress={AddToCartHandler}
              color="primary"
              className="w-full flex-center gap-x-1.5 bg-primary disabled:bg-slate-200 disabled:cursor-not-allowed text-white hover:bg-secondary hover:opacity-100 rounded-lg py-2.5 transition-colors"
            >
              {countInStock > 0 ? (
                <>
                  <HiOutlineShoppingCart className="size-6" /> افزودن به سبد
                  خرید
                </>
              ) : (
                <span className="text-rose-500">اتمام موجودی</span>
              )}
            </Button>
          )}
        </div>
        {/* Image */}
        <div className="flex justify-end flex-1">
          <div className="relative">
            <div className="absolute left-2 top-2">
              <Button
                onPress={LikeHandler}
                isIconOnly
                color="danger"
                aria-label="Like"
              >
                <HiOutlineHeart
                  className={`${likes.length !== 0 && "fill-white"} size-7`}
                />
              </Button>
            </div>
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
      </div>
      {/* Description */}
      <ProductDescription description={description} />
    </>
  );
};

export default ProductDetails;
