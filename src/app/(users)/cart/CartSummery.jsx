import { createPayment } from "@/Services/PaymentService";
import Loading from "@/UI/Loding";
import { Button } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import toast from "react-hot-toast";

const CartSummery = ({ payDetail }) => {
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
  const { isLoading, mutateAsync } = useMutation({ mutationFn: createPayment });
  const queryClient = useQueryClient();

  const CreatePaymentHandler = async () => {
    try {
      const { message } = await mutateAsync();
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["getUser"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <section className="w-full lg:w-1/4 sticky top-2 h-full">
      <div className="bg-primary-500 text-white flex flex-col items-center gap-y-6 rounded-3xl px-3 py-6">
        <p className="text-lg font-bold mb-5">خطاصه صورتحساب</p>
        <div className="w-full flex-between">
          <p>مبلغ کل</p>
          <p>{totalGrossPrice.toLocaleString()} تومان</p>
        </div>
        <div className="w-full flex-between">
          <p>سود شما از خرید</p>
          <p>
            {totalOffAmount.toLocaleString()}  {totalOffAmount > 0 && "- تومان"}
          </p>
        </div>
        <div className="w-full flex-between font-bold">
          <p>مبلغ قابل پرداخت</p>
          <p>{totalPrice.toLocaleString()} تومان</p>
        </div>
        <p className="text-sm">
          هزینه ارسال بر اساس آدرس ، زمان و نحوه ارسال شما محاسبه و به این مبلغ
          اضافه خواهد شد
        </p>
        {
          isLoading ? <Loading /> : <Button
          variant="bordered"
          onPress={CreatePaymentHandler}
          className="border-white text-white hover:bg-white hover:text-primary hover:opacity-100 py-5 transition-colors"
        >
          ادامه ثبت سفارش
        </Button>
        }
      
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
