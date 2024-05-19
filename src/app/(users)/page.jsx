import Categories from "@/Features/Home/Categories";
import ContactUs from "@/Features/Home/ContactUs";
import HeroHeader from "@/Features/Home/HeroHeder";
import Instagram from "@/Features/Home/Instagram";
import SecondCategories from "@/Features/Home/SecondCategories";


export const metadata = {
 title: "کافه و رستوران میم | Cafe Restaurant mim",
 description: "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
}



const HomePage = async () => {
 
  return (
    <>
      <HeroHeader />
      <Categories />
      <SecondCategories />
      <ContactUs />
      <Instagram />
    </>
  );
};

export default HomePage;
