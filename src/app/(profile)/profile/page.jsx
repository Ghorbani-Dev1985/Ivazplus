"use client";
import Loading from "@/UI/Loding";
import { useGetUser } from "src/hooks/useAuth";
import useTitle from "src/hooks/useTitle";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";
import OrderList from "./order/OrderList";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

const Profile = () => {
  const title = useTitle("پروفایل کاربری | ایواز پلاس");
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <Loading />;
  return (
    <div>
      <p className="flex flex-col gap-y-2 mb-14">
        <span>
          <span className="text-emerald-500 font-bold">{user.name}</span> ؛ عزیز
          خوش آمدید
        </span>
        <span className="text-gray-400">
          تاریخ پیوستن: {ToLocalDateStringShort(user.createdAt)}
        </span>
      </p>
      <div className="flex flex-col items-center">
        <div className="w-full flex-between">
        <p className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
          آخرین سفارشات
        </p>
        <Link href="/profile/order" className="flex-center gap-x-1 bg-sky-100 hover:bg-sky-200 text-sky-500 p-2 rounded-xl transition-colors"><HiArrowLongLeft className="size-6"/> مشاهده همه سفارشات</Link>
        </div>
        <OrderList
          paymentArrayItem={payments
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 4)}
        />
      </div>
    </div>
  );
};

export default Profile;
