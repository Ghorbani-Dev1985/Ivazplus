"use client";
import {
  Select,
  SelectItem,
} from "@nextui-org/react";
import SortOptions from "@/Constants/SortOptions";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const ProductsSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const CreateQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const SortProductHandler = (e) => {
    const value = e.target.attributes.value.nodeValue;
    router.push(pathname + "?" + CreateQueryString("sort" , value))
  };
  console.log(searchParams.get("sort"))
  return (
    <section className="flex-between mb-6">
              <Select
          color="default"
          label=" مرتب سازی"
          placeholder="یکی از موارد را انتخاب نمایید"
          defaultSelectedKeys={["مرتب سازی: جدیدترین"]}
          className="max-w-60"
          >

      {SortOptions.map(({value, label }) => {
        return (
          <SelectItem
          key={label}
          value={value}
          className="py-3"
          onPress={SortProductHandler}
              >
                {label}
              </SelectItem>
            );
          })}
        </Select>
    </section>
  );
};

export default ProductsSort;
