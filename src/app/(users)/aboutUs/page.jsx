"use client";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import { BreadcrumbItem } from "@nextui-org/react";
import Image from "next/image";
import useTitle from "src/hooks/useTitle";

const ContactUs = () => {
    const title = useTitle("داستان ما | ایواز پلاس")
    return (
        <>
        <AppBreadcrumb>
            <BreadcrumbItem>داستان ivaz</BreadcrumbItem>
        </AppBreadcrumb>
        <section className="container my-8">
             <div className="flex mb-5">
              <div className="flex flex-1">
              <Image
            width={1002}
            height={462}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/about/about.webp"
            src="/images/about/about.webp"
            className="rounded-tl-none rounded-bl-none"
          />
              </div>
              <div className="flex-center flex-1 max-w-24 md:max-w-sm bg-primary text-white font-semibold md:text-2xl rounded-tl-xl rounded-bl-xl">داستان ایواز</div>
             </div>
             <div className="flex flex-col gap-y-5">
                <h4 className="font-semibold text-xl">درباره ایواز</h4>
                <p>ما در ایواز پلاس بر این باوریم که سرمایه اصلی، شمایید و هر کدوم از شما عزیزان یک عضو از خانواده بزرگ ایوازید و معتقدیم که می تونیم در کنار شما در بستر یک ارتباط سازنده و دو طرفه تجربه یک دوستی همیشگی و صادقانه را بسازیم. ما در ایواز قصد داریم که فاصله ها رو کم کنیم و صرف نظر از اینکه شما کجای ایران هستید، خدمات یکسانی رو براتون ارائه کنیم، چون ایواز یعنی لمس قلب مشتری.</p>
                <h4 className="font-semibold text-xl">تولد ایواز</h4>
                <p>معمولا همه برندها داستانهای متفاوتی دارند داستان برند ایواز از یک شهر کوچک شمالی(بندرانزلی)شروع میشه به گفته آقای داود سیابی مالک خوش فکر برند ایواز که به تنهایی فعالیت خودشون رو از یک مغازه ۹متری در سال 93  شروع کردند و از اونجایی که همیشه ایشون رویاهای بزرگی در سر دارن،هیچ وقت در هیچ شرایطی متوقف نشدن و با آموزش دیدن و تفکر کارآفرینی و ارزش آفرینی، ایواز رو از یه مغازه کوچک به یک مجموعه بزرگ تبدیل کردند.</p>
                <h4 className="font-semibold text-xl"> مسیر پیشرفت ایواز</h4>
                <p>روزای اول، ایواز پلاس رو با اسم ایواز گالری میشناختید و همه میدونیم که اینقدر بزرگ نبوده. ایواز تو یه فروشگاه 9 متری متولد شد و با پشتیبانی مشتریان خوبش کم کم رشد کرد و امروز به یه مجموعه ای متشکل از یه فروشگاه 250 متری و یه دفتر اداری 200متری و یک کارگاه تولیدی  1000 متری با حدود بیش از 100 پرسنل تبدیل شده.</p>
                <p>هدف ایواز جهانی شدن و ایجاد یک برند ایرانی معتبرِ با کیفیت و طراحی و تولید انواع لباس ها توسط تیم ایواز است. تا قبل از سال 98 راه خرید از طریق پلتفرم اینستاگرام بود اما بعد از سال 98 برای دادنِ خدمات بهتر و سرعت در خرید، سایت ایواز پلاس افتتاح شد. در حال حاضر خرید تمامی محصولات در سایت ایواز پلاس در طول 24 ساعت شبانه روز امکان پذیره.</p>
                <p>اوایل تمرکز مجموعه ایواز روی مانتو بوده ولی  در حال حاضر کنار مانتو که همچنان محصول اصلی ایواز محسوب میشه، شما می تونید طیف گسترده تری از محصولات شامل کیف، کفش،شال،شلوار و کمربند رو از سایت ایواز تهیه کنید.</p>
             </div>
        </section>
        </> 
     );
}
 
export default ContactUs;