"use client";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import { BreadcrumbItem } from "@nextui-org/react";
import useTitle from "src/hooks/useTitle";

const ContactUs = () => {
    const title = useTitle("تماس با ما | ایواز پلاس")
    return (
        <>
        <AppBreadcrumb>
            <BreadcrumbItem>تماس با ما</BreadcrumbItem>
        </AppBreadcrumb>
        <section className="container flex-between my-8">
             <div className="flex flex-col gap-y-5">
                <h4 className="font-semibold text-xl">اطلاعات تماس</h4>
                <p>شماره تماس : 01344556091 - 01344521094</p>
                <p>آدرس فروشگاه : استان گیلان ، بندر انزلی ، خیابان سپه ، جنب نمایندگی دوو ، فروشگاه ایواز</p>
                <p>خدمات پس از فروش :</p>
                <p>لطفا کالای مرجوعی خود را پس از ثبت در سایت و تایید نهایی توسط پشتیبان ، به این آدرس ارسال نمایید : استان گیلان ، شهرستان بندرانزلی , خیابان پنجم , نرسیده به دانشگاه علمی کاربردی , جنب مشاور املاک افشار , سالن ورزشی افشار ( ایواز پلاس ) کد پستی : 4319783333 شماره تماس جهت مرجوعی : 09352700860</p>
             </div>
             <div className="flex flex-1">
             <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.3855278428405!2d49.4553436!3d37.4752277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401feb36d5c9f789%3A0x11d5407d8859e1e2!2z2KfbjNmI2KfYsiDZvtmE2KfYsw!5e0!3m2!1sen!2s!4v1717655965598!5m2!1sen!2s" width="700" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
        </section>
        </> 
     );
}
 
export default ContactUs;