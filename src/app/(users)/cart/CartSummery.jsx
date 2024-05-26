import { Button } from "@nextui-org/react";
import Link from "next/link";

const CartSummery = ({ payDetail }) => {
  console.log(payDetail);
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
  return (
    <section className="w-full lg:w-1/4 sticky top-2 h-full">
      <div className="bg-primary-500 text-white flex flex-col items-center gap-y-6 rounded-3xl px-3 py-6">
        <p className="text-lg font-bold mb-5">خطاصه صورتحساب</p>
        <div className="w-full flex-between">
          <p>مبلغ کل(۱ کالا)</p>
          <p>{totalGrossPrice.toLocaleString()} تومان</p>
        </div>
        <div className="w-full flex-between">
          <p>سود شما از خرید</p>
          <p>
            {totalOffAmount.toLocaleString()} {totalOffAmount > 0 && تومان}
          </p>
        </div>
        <div className="w-full flex-between">
          <p>مبلغ قابل پرداخت</p>
          <p>{totalPrice.toLocaleString()} تومان</p>
        </div>
        <p className="text-sm">
          هزینه ارسال بر اساس آدرس ، زمان و نحوه ارسال شما محاسبه و به این مبلغ
          اضافه خواهد شد
        </p>
        <Button
          variant="bordered"
          className="border-white text-white hover:bg-white hover:text-primary hover:opacity-100 py-5 transition-colors"
        >
          ادامه ثبت سفارش
        </Button>
      </div>
      <div className="flex-center my-4">
        <Link
          href="/products"
          className="text-gray-400 text-xs hover:text-gray-800 transition-colors"
        >
          بازگشت به صفحه اصلی فروشگاه
        </Link>
      </div>
    </section>
  );
};

export default CartSummery;
