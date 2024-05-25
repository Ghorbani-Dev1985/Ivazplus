import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const Search = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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
              <div className="w-full flex-center gap-x-2">
                <TextField
                  name="identifier"
                  placeholder="نام محصول مورد نظر خود را وارد نمایید"
                  required
                  register={register}
                  customStyle="h-20 bg-white placeholder:text-xl"
                  validationSchema={{
                    required: "نام محصول مورد نظر خود را وارد نمایید",
                  }}
                  errors={errors}
                />
                <Button
                  isIconOnly
                  color="primary"
                  aria-label="search"
                  className="h-20 min-w-20"
                >
                  <HiMiniMagnifyingGlass className="size-14" />
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
