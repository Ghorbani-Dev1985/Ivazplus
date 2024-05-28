"use client";
import React from "react";
import Loading from "@/UI/Loding";
import { useGetUser } from "src/hooks/useAuth";
import useTitle from "src/hooks/useTitle";
import Alert from "@/UI/Alert";
import OrderList from "./OrderList";

const Orders = () => {
  const title = useTitle("اطلاعات سفارشات | ایواز پلاس");
  const { data, isLoading } = useGetUser();
  const { payments } = data || {};
  if (isLoading) return <Loading />;
  if(payments.length === 0) return <Alert>سفارشی تاکنون ثبت نشده است.</Alert>
  return (
    <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
        جزییات حساب کاربری
      </span>
      <OrderList paymentArrayItem={payments.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))}/>
    </div>
  );
};

export default Orders;
