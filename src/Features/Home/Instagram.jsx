import Image from "next/image";
import Link from "next/link";

const Instagram = () => {
  return (
    <search className="container my-6">
      <div className="flex flex-col items-center gap-y-4">
        <Image
          width={50}
          height={50}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL="/images/icon/instagram.svg"
          src="/images/icon/instagram.svg"
        />
        <p>ما را دنبال کنید</p>
        <Link
          href="https://www.instagram.com/ivaz_plus/"
          target="_blank"
          className="text-base"
        >
          ivaz_plus
        </Link>
      </div>
    </search>
  );
};

export default Instagram;
