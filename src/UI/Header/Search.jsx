import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  ModalBody,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useGetProducts } from "src/hooks/useProducts";
import Loading from "../Loading";
import SearchResultCard from "./SearchResultCard";
const Search = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchValue , setSearchValue] = useState("")
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
   
   const searchResult = searchValue ? products?.filter((product) => product.title.toLowerCase().includes(searchValue)) : [];
  console.log(searchResult)
  return (
    <>
      <button
        onClick={onOpen}
        className="flex-center gap-x-1 bg-transparent px-0 min-w-11"
      >
        <Image
          width={24}
          height={24}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL="/images/icon/search.svg"
          src="/images/icon/search.svg"
          objectFit={true}
        />
        <span className="hidden md:block">جستجو</span>
      </button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        radius="lg"
        scrollBehavior="inside"
        classNames={{
          wrapper: "items-center",
          body: "py-6",
          backdrop: "bg-primary-200/70 backdrop-opacity-50",
          closeButton: "hidden",
        }}
      >
        <ModalContent className="w-full bg-transparent shadow-none">
          {(onClose) => (
            <>
            <ModalBody>
              <div className="w-full flex-center gap-x-2">
                <input placeholder="نام محصول مورد نظر خود را وارد نمایید" onChange={(e) => setSearchValue(e.target.value)} className="textField-input h-20 bg-white placeholder:text-xl"/>
                <Button
                  isIconOnly
                  color="primary"
                  aria-label="search"
                  className="h-20 min-w-20"
                >
                  <HiMiniMagnifyingGlass className="size-14" />
                </Button>
              </div>
              {
                isLoading ? <Loading /> : <div className={`${searchResult.length > 0 ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white gap-4 p-2 rounded-lg`}>{searchResult?.map((product) => {
                  return (
                    <React.Fragment key={product._id}>
                      <SearchResultCard product={product} />
                    </React.Fragment>
                  );
                })}</div>
              }
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
