import { productListTableTHeads } from "@/Constants/TableHeaders";
import ConfirmModal from "@/UI/ConfimModal";
import CustomTable from "@/UI/CustomTable";
import { Button, Chip } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { useRemoveProduct } from "src/hooks/useProducts";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";

const ProductsList = ({ productArrayItem }) => {
  const {mutateAsync} = useRemoveProduct();
  const queryClient = useQueryClient();
  const RemoveProductHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  }
  const renderProductsCell = useCallback((product, columnKey) => {
    const cellValue = product[columnKey];
    switch (columnKey) {
      case "imageLink":
        return (
          <Image
            width={90}
            height={90}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={
              product.imageLink
                ? `/images/products/${product.imageLink}`
                : "/images/noImage/noImage.jpg"
            }
            src={
              product.imageLink
                ? `/images/products/${product.imageLink}`
                : "/images/noImage/noImage.jpg"
            }
          />
        );
      case "title":
        return (
          <Link
            target="_blank"
            href={`/products/${product.slug}`}
            className="font-semibold hover:text-primary transition-colors"
          >
            {product.title}
          </Link>
        );
      case "createdAt":
        return (
          <p className="text-nowrap">
            {ToLocalDateStringShort(product.createdAt)}
          </p>
        );
      case "categoryTitle":
        return <p className="text-nowrap">{product.category.title}</p>;
      case "tags":
        return product.tags.map((tag, index) => {
          return (
            <div key={index}>
              {" "}
              <Chip className="mb-2">{tag}</Chip>
            </div>
          );
        });
      case "price":
        return product.price.toLocaleString();
      case "discount":
        return product.discount > 0 ? (
          <span>{product.discount} %</span>
        ) : (
          <p className="text-nowrap">بدون تخفیف</p>
        );
      case "offPrice":
        return product.offPrice.toLocaleString();
      case "quantity":
        return product.quantity;
      case "act":
        return (
          <div className="flex-between gap-x-1.5">
            <Button isIconOnly color="default" variant="light">
              <Link href={`/dashboard/products/edit/${product._id}`}>
                <BiEditAlt className="size-6 text-sky-500" />
              </Link>
            </Button>
            <ConfirmModal
              btnIcon={<BiTrash className="size-6 text-rose-500" />} titleText="حذف محصول" confirmBtnText="حذف محصول" confirmBtnHandler={() => RemoveProductHandler(product._id)}
            >
              آیا برای حذف محصول <span className="text-rose-400">{product.title}</span> مطمعن هستید؟
            </ConfirmModal>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <CustomTable
      headerItems={productListTableTHeads}
      itemsArray={productArrayItem}
      renderCell={renderProductsCell}
    ></CustomTable>
  );
};

export default ProductsList;
