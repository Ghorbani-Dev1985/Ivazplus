import Image from "next/image";
import Link from "next/link";

const HeroHeader = () => {
    return (
        <section className="w-full relative">
            <Image
            width={1360}
            height={550}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/images/mainBanner/mainBanner.jpg"
            src="/images/mainBanner/mainBanner.jpg"
            className="w-full rounded-none"
          />
          <Link href="#" className="absolute right-0 left-0 mx-auto bottom-3 md:bottom-32 block max-w-32 md:max-w-40 text-center bg-transparent text-white border border-white md:px-4 py-1 md:py-3 rounded-lg hover:bg-white hover:text-primary transition-colors">
            مشاهده محصول
          </Link>
        </section> 
     );
}
 
export default HeroHeader;