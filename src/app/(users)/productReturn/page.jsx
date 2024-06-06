"use client";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import { BreadcrumbItem } from "@nextui-org/react";
import Image from "next/image";
import useTitle from "src/hooks/useTitle";

const ProductReturn = () => {
  const title = useTitle(" رویه بازگشت کالا | ایواز پلاس");
  return (
    <>
      <AppBreadcrumb>
        <BreadcrumbItem> ‌رویه بازگشت کالا</BreadcrumbItem>
      </AppBreadcrumb>
      <section className="container my-8">
        <div className="flex flex-col items-center gap-y-5 text-primary">
          <h4 className="font-semibold text-xl"> ‌رویه بازگشت کالا</h4>
          <Image
            width={1319}
            height={423}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/1.png"
            src="/images/productReturn/1.png"
            className="rounded-none"
          />
          <p className="text-rose-500 font-semibold">
            نکته : اگر با تلفن همراه وارد شده اید، برای خوانایی بهتر عکس ها لطفا
            دستگاه خود را افقی کنید{" "}
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/2.jpg"
            src="/images/productReturn/2.jpg"
          />
          <p>
            {" "}
            در مرحله اول بعد از وارد شدن به حساب کاربری خودتان باید حساب بانکی
            خودتان را درون سیستم ثبت کنید. نکته: حساب بانکی حتما باید به نام
            صاحب حساب کاربری باشد
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/3.jpg"
            src="/images/productReturn/3.jpg"
          />
          <p>
            در مرحله بعدی تمامی اطلاعات خواسته شده را با دقت پر میکنید. نکته:
            حتما عکس کارت بانکی خودتان را جهت تایید اطلاعات آپلود کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/4.jpg"
            src="/images/productReturn/4.jpg"
          />
          <p>
            بعد از تایید حساب بانکی شما توسط تیم پشتیبانی وضعیت حساب بانکی شما
            به تایید تغییر می کند
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/5.jpg"
            src="/images/productReturn/5.jpg"
          />
          <p>
            برای مرجوع کردن کالا شما می توانید از دو روش لیست سفارشات و بخش
            مرجوعی کالا این کار را انجام دهید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/6.jpg"
            src="/images/productReturn/6.jpg"
          />
          <p>
            اگر از بخش لیست سفارشات جهت مرجوعی وارد شوید، از طریق بخش مشخص شده
            می توانید محصول خود را مرجوع کنید. نکته: مرجوعی کالا فقط تا 7 روز پس
            از اینکه بدستان رسید امکان پذیر می باشد
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/7.jpg"
            src="/images/productReturn/7.jpg"
          />
          <p>
            اگر از طریق بخش مرجوعی کالا وارد شوید، باید کد سفارش مورد نظرتون رو
            توی باکس مشخص شده وارد کنید و روی گزینه ی تکمیل اطلاعات کلیک کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/8.jpg"
            src="/images/productReturn/8.jpg"
          />
          <p>
            در بخش باز شده باید تمامی بخش های خواسته شده را با دقت پر کنید، در
            بخش آپلود فایل شما باید یک عکس با گوشی موبایل خودتان از محصول بگیرید
            و توجه داشته باشید که لیبل به محصول وصل باشد. سپس روی ثبت کلیک کنید
          </p>
          <Image
            width={1340}
            height={609}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/productReturn/9.jpg"
            src="/images/productReturn/9.jpg"
          />
          <p>
            پس از تایید درخواست شما و بررسی اطلاعات مورد نیاز توسط کارشناسان
            ایواز، به شما اطلاع داده میشود
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductReturn;
