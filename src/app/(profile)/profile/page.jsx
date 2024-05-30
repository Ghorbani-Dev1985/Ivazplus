"use client";
import Loading from "@/UI/Loading";
import { useGetUser } from "src/hooks/useAuth";
import useTitle from "src/hooks/useTitle";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";
import OrderList from "./order/OrderList";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import TitleLink from "@/UI/TitleLink";

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
        <TitleLink
          title=" آخرین سفارشات"
          href="/profile/order"
          icon={<HiArrowLongLeft className="size-6" />}
          linkText="مشاهده همه سفارشات "
        />
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
