import { LogoutUser } from "@/Services/AuthServices";
import { Divider, Link } from "@nextui-org/react";
import Image from "next/image";
import toast from "react-hot-toast";
import { HiOutlineCreditCard, HiOutlineHome, HiOutlineTicket, HiOutlineUser } from "react-icons/hi";
import { HiArrowLeftStartOnRectangle, HiOutlineSquaresPlus } from "react-icons/hi2";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const Sidebar = () => {
  const LogoutHandler = async () => {
    await LogoutUser();
    toast.success("خروج از حساب با موفقیت انجام شد");
    document.location.href = "/";
  };
  return (
    <aside className="col-span-1 overflow-y-auto">
      <section className="bg-gradient-to-t from-primary to-secondary p-3 min-h-screen">
        <ul className="flex flex-col space-y-8">
          <li className="max-w-32 self-center bg-white p-4 rounded-lg">
            <Image
              width={103}
              height={110}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL="/images/logo/logo.svg"
              src="/images/logo/logo.svg"
              className="object-cover"
            />
          </li>
          <Divider className="bg-white" />
          <li>
            <Link
              href="/dashboard"
              className="bg-gradient-to-l from-white via-white/80 font-semibold p-2 rounded-lg flex items-center gap-x-1.5"
            >
              <HiOutlineHome className="size-5" /> صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/users"
              className="bg-gradient-to-l from-white via-white/80 font-semibold p-2 rounded-lg flex items-center gap-x-1.5"
            >
              <HiOutlineUser className="size-5" /> کاربرها
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
              className="bg-gradient-to-l from-white via-white/80 font-semibold p-2 rounded-lg flex items-center gap-x-1.5"
            >
              <MdOutlineProductionQuantityLimits className="size-5" /> محصولات
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/categories"
              className="bg-gradient-to-l from-white via-white/80 font-semibold p-2 rounded-lg flex items-center gap-x-1.5"
            >
              <HiOutlineSquaresPlus className="size-5" /> دسته بندی‌ها
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/coupons"
              className="bg-gradient-to-l from-white via-white/80 font-semibold p-2 rounded-lg flex items-center gap-x-1.5"
            >
              <HiOutlineTicket className="size-5" /> کد تخفیف
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/payment"
              className="bg-gradient-to-l from-white via-white/80 font-semibold p-2 rounded-lg flex items-center gap-x-1.5"
            >
              <HiOutlineCreditCard className="size-5" /> گزارش پرداخت
            </Link>
          </li>
          <li>
            <button
              onClick={LogoutHandler}
              className="w-full bg-gradient-to-l from-white via-white/80 font-semibold text-rose-500 p-2 rounded-lg flex items-center gap-x-1.5"
            >
              <HiArrowLeftStartOnRectangle className="size-5" /> خروج
            </button>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
