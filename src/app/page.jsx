import Categories from "@/Features/Home/Categories";
import HeroHeader from "@/Features/Home/HeroHeder";


export const metadata = {
 title: "کافه و رستوران میم | Cafe Restaurant mim",
 description: "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
}



const HomePage = async () => {
 
  return (
    <>
      <HeroHeader />
      <Categories />
      {/* <main className="min-h-screen">
        <Slider />
        <section className="container">
          <QuickAccess />
          <Menus />
          <AboutUsItems />
          <BlogsList blogs={blogs} />
        </section>
        <AboutUS />
        <ImageGallery />
      </main> */}
    </>
  );
};

export default HomePage;
