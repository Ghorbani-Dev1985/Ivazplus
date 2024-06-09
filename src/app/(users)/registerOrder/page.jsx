"use client";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import { BreadcrumbItem } from "@nextui-org/react";
import Image from "next/image";
import useTitle from "src/hooks/useTitle";

const RegisterOrder = () => {
  const title = useTitle(" نحوه ثبت سفارش | ایواز پلاس");
  return (
    <>
      <AppBreadcrumb>
        <BreadcrumbItem> نحوه ثبت سفارش</BreadcrumbItem>
      </AppBreadcrumb>
      <section className="container my-8">
        <div className="flex flex-col items-center gap-y-5 text-primary">
          <h4 className="font-semibold text-xl self-start my-6"> نحوه ثبت سفارش</h4>
          <Image
            width={1319}
            height={423}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/1.png"
            src="/images/registerOrder/1.png"
            className="rounded-none"
          />
          <p className="text-rose-500 font-semibold mb-6">
            نکته : اگر با تلفن همراه وارد شده اید، برای خوانایی بهتر عکس ها لطفا
            دستگاه خود را افقی کنید
          </p>
          <p>
            {" "}
            در مرحله اول از طریق منوی محصولات و یا جست و جو محصول مورد نظر خود
            را انتخاب میکنید{" "}
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/2.png"
            src="/images/registerOrder/2.png"
          />
          <p>
            کد محصول مورد نظرتون رو داخل باکس جست و جو وارد کنید و روی محصول
            مورد نظر کلیک کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/3.png"
            src="/images/registerOrder/3.png"
          />
          <p>
            بعد از این که وارد صفحه محصول شدید در بخش اول باید رنگ کار مورد
            نظرتون رو انتخاب کنید و سپس سایز اون رو و در نهایت روی افزودن به سبد
            خرید کلیک کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/4.png"
            src="/images/registerOrder/4.png"
          />
          <p>
            اگر باز هم خرید شما ادامه دارد و نیاز به خرید محصولات بیشتری دارید
            روی گزینه ی خرید محصولات دیگرکلیک کنید و اگر دیگر نمیخواهید محصولی
            خریداری کنید روی تسویه حساب کلیک کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/5.png"
            src="/images/registerOrder/5.png"
          />
          <p>
            در مرحله ی بعدی شما می توانید سفارشی که در حال ثبت آن هستید را
            ببینید و در کنار خلاصه ای از صورتحساب و فاکتور پرداختی شما را
            میتوانید ببینید سپس روی ادامه ثبت سفارش کلیک کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/6.png"
            src="/images/registerOrder/6.png"
          />
          <p>
            سپس اگر ثبت نام کرده اید شماره تلفن خود را وارد کنید و روی ورود کلیک
            کنید و اگر ثبت نام نکرده اید روی ثبت نام کلیک کنید
          </p>
          <Image
            width={426}
            height={399}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/7.png"
            src="/images/registerOrder/7.png"
          />
          <p>
            پس از ورود یا ثبت نام آدرس خود را انتخاب کنید و اگر آدرس جدیدی را
            میخواهید که وارد کنید روی افزودن آدرس جدید کلیک کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/8.png"
            src="/images/registerOrder/8.png"
          />
          <p>
            سپس آدرس دقیق محل زندگی خودتان به همراه اطلاعات خواسته شده را وارد
            کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/9.png"
            src="/images/registerOrder/9.png"
          />
          <p>
            سپس روش ارسال را انتخاب کنید و اگر کد تخفیف دارید وارد کنید و روی
            ثبت کد کلیک کلیک و سپس گزینه ادامه خرید را انتخاب کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/10.png"
            src="/images/registerOrder/10.png"
          />
          <Image
            width={399}
            height={206}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/11.png"
            src="/images/registerOrder/11.png"
          />
          <p>
            در این مرحله صورت حساب نهایی فاکتور خرید خودتون رو مشاهده می کنید و
            روش پرداخت را انتخاب می کنید و روی تسویه حساب کلیک میکنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/12.png"
            src="/images/registerOrder/12.png"
          />
          <p>
            پس از پرداخت سفارش شما ثبت می شود و کد پیگیری سفارشتان جهت مرجوع
            کردن کالا و یا پیگیری محل سفارشتون بهتون داده میشه
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/registerOrder/13.png"
            src="/images/registerOrder/13.png"
          />
        </div>
      </section>
    </>
  );
};

export default RegisterOrder;
