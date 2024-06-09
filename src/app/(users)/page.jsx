import BlogSection from "@/Features/Home/BlogSection";
import Categories from "@/Features/Home/Categories";
import ContactUs from "@/Features/Home/ContactUs";
import HeroHeader from "@/Features/Home/HeroHeader";
import Instagram from "@/Features/Home/Instagram";
import NewProductSlider from "@/Features/Home/NewProductSlider";
import SalesProductSlider from "@/Features/Home/SalesProductSlider";
import SecondCategories from "@/Features/Home/SecondCategories";


export const metadata = {
 title: "فروشگاه اینترنتی پوشاک بانوان | ایواز پلاس",
 description: "خرید آنلاین انواع لباس زنانه شامل مانتو، شلوار، کیف، کفش، شال و روسری از فروشگاه آنلاین ایواز پلاس و ارسال به سراسر ایران با بهترین قیمت و مناسب همه سلیقه‌ها.",
 keywords: "فروشگاه ایواز,ایواز,ایوازپلاس,خرید لباس زنانه"
}



const HomePage = async () => {
 
  return (
    <>
      <HeroHeader />
      <Categories />
      <NewProductSlider />
      <SecondCategories />
      <SalesProductSlider />
      <BlogSection />
      <ContactUs />
      <Instagram />
    </>
  );
};

export default HomePage;
