"use client";

import Alert from "@/UI/Alert";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import Loading from "@/UI/Loding";
import { BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useGetUser } from "src/hooks/useAuth";
import CartSummery from "./CartSummery";
import CartItem from "./CartItem";
import React from "react";

const CartPage = () => {
  const router = useRouter();
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};
  if (isLoading) return <Loading />;
  if (!user || !data) {
    toast.error("برای مشاهده اطلاعات لطفا لاگین کنید");
    router.push("/authentication");
    return;
  }
  return (
    <>
      <AppBreadcrumb>
        <BreadcrumbItem>سبد خرید</BreadcrumbItem>
      </AppBreadcrumb>
      <div className="container my-8">
        {!user.cart?.products || user.cart?.products.length === 0 ? (
          <>
            <Alert alertText="کاربر گرامی سبد خرید شما خالی می باشد">
              <Link href="/products" className="text-sky-600">
                رفتن به صفحه محصولات
              </Link>
            </Alert>
          </>
        ) : (
          <div className="flex flex-col md:flex-row justify-between gap-5 relative">
            {/* Order Details */}
            <div className="w-full lg:w-3/4">
              {cart &&
                cart.productDetail.map((item) => {
                  return <React.Fragment key={item._id}> <CartItem cartItem={item} /></React.Fragment>;
                })}
            </div>
            {/* Cart Summery */}
            <CartSummery payDetail={cart.payDetail} />
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
