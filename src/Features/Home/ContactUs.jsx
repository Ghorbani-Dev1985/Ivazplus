import RippleLink from "@/UI/RippleLink";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
    return ( 
        <section className="container my-16 flex-center">
            <RippleLink href="/contactUs">
                <Image
          width={1280}
          height={150}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL="/images/other/address.jpg"
          src="/images/other/address.jpg"
        />
            </RippleLink>
        </section>
     );
}
 
export default ContactUs;