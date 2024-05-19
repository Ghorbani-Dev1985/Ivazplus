"use client";
import RippleLink from "@/UI/RippleLink";
import Image from "next/image";
import { useEffect, useState } from "react";

const SecondCategories = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <section className="container flex-center gap-4 my-10">
      <RippleLink href="">
        <Image
          width={1052}
          height={370}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL={`${
            innerWidth <= 768
              ? "/images/categories/set-mob.jpg"
              : "/images/categories/set.jpg"
          }`}
          src={`${
            innerWidth <= 768
              ? "/images/categories/set-mob.jpg"
              : "/images/categories/set.jpg"
          }`}
        />
      </RippleLink>
      <RippleLink href="">
        <Image
          width={1052}
          height={370}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL={`${
            innerWidth <= 768
              ? "/images/categories/sale-mob.jpg"
              : "/images/categories/sale.jpg"
          }`}
          src={`${
            innerWidth <= 768
              ? "/images/categories/sale-mob.jpg"
              : "/images/categories/sale.jpg"
          }`}
        />
      </RippleLink>
    </section>
  );
};

export default SecondCategories;
