import SectionTitle from "@/UI/SectionTitle";
import categoriesItems from "src/constants/CategoriesItems";
import Image from "next/image";
import Link from "next/link";
const Categories = () => {
  return (
    <section className="container">
      <SectionTitle title="گروه محصولات" />
      <div className="flex flex-col gap-y-4">
        <div className="flex-between gap-4">
          <CategoryItem href="#" image="cat01.jpg" title="کالکشن بهار" />
          <CategoryItem href="#" image="cat02.jpg" title="ست" />
        </div>
        <div className="flex-between gap-4">
        <CategoryItem href="#" image="cat03.jpg" title="کالکشن بهار" />
        <CategoryItem href="#" image="cat04.jpg" title="کالکشن بهار" />
        <CategoryItem href="#" image="cat05.jpg" title="کالکشن بهار" />
        </div>
      </div>
    </section>
  );
};

export default Categories;


const CategoryItem = ({ image, href, title }) =>{
    return(
        <div className="relative group">

         <Link href={href} className="flex flex-1 relative z-10 before:content-[''] before:bg-categories hover:before:bg-primary/35 before:block before:absolute before:inset-0 overflow-hidden rounded-2xl">
                  <Image
                    width={746}
                    height={357}
                    alt="ghorbani-dev.ir"
                    placeholder="blur"
                    blurDataURL={`/images/categories/${image}`}
                    src={`/images/categories/${image}`}
                    title={title}
                    className="rounded-2xl"
                    />
                </Link>
                  <p className="absolute z-30 bottom-3 md:bottom-11 right-12 md:right-28 text-white font-bold text-xs md:text-lg">{title}</p>
                  <p className="size-12 rounded-full bg-secondary opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bottom-3 md:bottom-8 right-3 md:right-8 z-30 transition-all ease-linear duration-300"></p>
                    </div>
    )
}

export {CategoryItem}