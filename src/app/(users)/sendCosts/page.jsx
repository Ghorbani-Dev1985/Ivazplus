"use client";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import { BreadcrumbItem, Chip } from "@nextui-org/react";
import Link from "next/link";
import useTitle from "src/hooks/useTitle";

const SendCosts = () => {
  const title = useTitle(" روشهای ارسال و هزینه‌ها | ایواز پلاس");
  return (
    <>
      <AppBreadcrumb>
        <BreadcrumbItem> روشهای ارسال و هزینه‌ها</BreadcrumbItem>
      </AppBreadcrumb>
      <section className="container my-8 space-y-8">
        <h4 className="font-semibold text-xl"> روشهای ارسال و هزینه‌ها</h4>
        <Chip color="primary">روش ارسال سفارشات: </Chip>
        <p>
          ارسال سفارشات در ایواز به دو روش پست پیشتاز شرکت پست جمهوری اسلامی
          ایران و ارسال رایگان (ویژه‌ی بندرانزلی) انجام می پذیرد. بدیهی است
          انتخاب ارسال توسط شرکت پست جمهوری اسلامی به منزله آگاهی کاربر از شرایط
          و قوانین آن شرکت تلقی می‌گردد و مسئولیت تأخیر در ارسال یا بروز هرگونه
          مشکل احتمالی به عهده شرکت مربوطه بوده و ایواز مسئولیتی در این زمینه
          بعهده نخواهد داشت.
        </p>
        <p>
          همچنین لازم به یادآوری است در هنگام تحویل کالا از شرکت‌های پستی ابتدا
          نسبت به سالم بودن بسته‌بندی سفارش اطمینان کامل حاصل نموده، سپس رسید
          دریافت کالا را امضاء نمایید .
        </p>
        <Chip color="primary">مدت زمان تحویل: </Chip>
        <p>
          - پست پیشتاز: زمان ارسال و تحویل سفارش توسط پست پیشتاز در شهرهای نزدیک
          2 الی 4 روز کاری و در سایر شهر‌ها 2 الی 6 روز کاری می باشد.
        </p>
        <p>
          - ارسال رایگان در داخل بندرانزلی تا 24 ساعت بعد از سفارش تحویل داده
          خواهد شد.
        </p>
        <Chip color="primary"> هزینه ارسال: </Chip>
        <p>
          - پست پیشتاز هزینه ارسال سفارشات به سراسر کشور توسط پست پیشتاز مبلغ 48
          هزار تومان می باشد.
        </p>
        <Chip color="primary"> ارسال رایگان: </Chip>
        <p>
          ارسال در محدوده بندرانزلی(میدان انزلی تا کارآموزی و دروازه ماهی)
          رایگان می باشد.
        </p>
        <p>
          جهت پیگیری سفارشاتی که از طریق پست پیشتاز ارسال شده‌اند می توانید با
          استفاده از کد رهگیری مرسوله، از طریق وب‌ سایت
          <Link target="_blank" href="http://tntsearch.post.ir/">
            <Chip color="primary" className="mx-1.5">
              {" "}
              سامانه رهگیری مرسولات پستی
            </Chip>
            شرکت پست نسبت به آگاهی از وضعیت مرسوله خود اقدام نمایید.
          </Link>
        </p>
      </section>
    </>
  );
};

export default SendCosts;
