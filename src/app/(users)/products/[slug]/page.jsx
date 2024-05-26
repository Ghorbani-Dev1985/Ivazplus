import { GetOneProductBySlug, GetProducts } from "@/Services/ProductServices";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductDetails from "@/Features/Products/ProductDetails";
export const dynamicParams = false;
export const dynamic = "force-static";

const Page = async ({ params }) => {
  const { slug } = params;
  const { product } = await GetOneProductBySlug(slug);
  const {title,category} = product;
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
     <ProductDetails product={product}/>
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
