import { GetOneProductBySlug, GetProducts } from "@/Services/ProductServices";
import ProductBreadcrumb from "./ProductBreadcrumb";
import Image from "next/image";
import ProductCounter from "./ProductCounter";
import ProductPrice from "./ProductPrice";
import { HiOutlineShoppingCart } from "react-icons/hi";
export const dynamicParams = false;
export const dynamic = "force-static";

const Page = async ({ params }) => {
  const { slug } = params;
  const { product } = await GetOneProductBySlug(slug);
  console.log(product);
  const {
    title,
    category,
    price,
    offPrice,
    discount,
    countInStock,
    imageLink,
  } = product;
  return (
    <>
      <section className="w-full bg-gray-100 p-4 h-24 flex items-center">
        <div className="container">
          <ProductBreadcrumb
            categoryTitle={category.title}
            categoryEnTitle={category.englishTitle}
            title={title}
          />
        </div>
      </section>
      <section className="container my-8">
        <div className="flex justify-between gap-14">
            {/* Details */}
          <div className="flex flex-1 flex-col justify-between">
            <h1 className="text-lg md:text-2xl font-semibold leading-9">
              {product.title}
            </h1>
            <p className="text-rose-500">
              فقط <span className="font-semibold">{countInStock}</span> عدد در
              انبار موجود می باشد
            </p>
            <div>
              جدول سایز
            </div>
            <div className="flex-between">
                {/* Counter */}
                <ProductCounter />
                <ProductPrice countInStock={countInStock} discount={discount} price={price} offPrice={offPrice}/>
            </div>
             <button
             disabled={countInStock === 0 && true}
            color="primary"
            className="w-full flex-center gap-x-1.5 bg-primary disabled:bg-slate-200 disabled:cursor-not-allowed text-white hover:bg-secondary hover:opacity-100 rounded-lg py-2.5 transition-colors"
          >
            {
                countInStock > 0 ? <><HiOutlineShoppingCart className="size-6"/> افزودن به سبد خرید </>
          : <span className="text-rose-500">اتمام موجودی</span>
            }
            
          </button>
          </div>
          {/* Image */}
          <div className="flex justify-center flex-1">
            <Image
              width={470}
              height={628}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL={`/images/products/${imageLink}`}
              src={`/images/products/${imageLink}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const { products } = await GetProducts();
  return products.map((product) => ({
    slug: encodeURI(product.slug),
  }));
}
