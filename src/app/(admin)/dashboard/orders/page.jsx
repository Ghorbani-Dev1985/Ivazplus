"use client";
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loading";
import useTitle from "src/hooks/useTitle";
import ProductsList from "./OrdersList";
import TitleLink from "@/UI/TitleLink";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { useGetOrders } from "src/hooks/useOrders.";
import OrdersList from "./OrdersList";
const Orders = () => {
  const title = useTitle("سفارشات | ایواز پلاس");
  const { data, isLoading } = useGetOrders();
  const { payments } = data || {};
  console.log(payments)
  if (isLoading) return <Loading />;
  if (payments.length === 0)
    return <Alert alertText="هیچ سفارشی یافت نشد"></Alert>;
  return (
    <div className="flex flex-col items-center">
    <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
       همه سفارشات
    </span>
      <OrdersList
        orderArrayItem={payments.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )}
      />
    </div>
  );
};

export default Orders;

