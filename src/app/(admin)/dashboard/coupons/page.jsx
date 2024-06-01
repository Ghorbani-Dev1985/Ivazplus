"use client";
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loading";
import useTitle from "src/hooks/useTitle";
import TitleLink from "@/UI/TitleLink";
import { HiMiniPlusCircle } from "react-icons/hi2";
import CouponsList from "./CouponsList";
import { useGetCoupons } from "src/hooks/useCoupons";
const Coupons = () => {
  const title = useTitle("محصولات | ایواز پلاس");
  const { data, isLoading } = useGetCoupons();
  const { coupons } = data || {};
  if (isLoading) return <Loading />;
  if (coupons.length === 0)
    return <Alert alertText="هیچ کد تخفیفی یافت نشد"></Alert>;
  return (
    <div className="flex flex-col items-center">
      <TitleLink
        title="همه کدهای تخفیف"
        href="/dashboard/coupons/create"
        icon={<HiMiniPlusCircle className="size-6" />}
        linkText="افزودن کد تخفیف جدید"
      />
      <CouponsList
        productArrayItem={coupons.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )}
      />
    </div>
  );
};

export default Coupons;
