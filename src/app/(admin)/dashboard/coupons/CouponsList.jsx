import { couponsListTableTHeads, productListTableTHeads } from "@/Constants/TableHeaders";
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

const CouponsList = ({ couponArrayItem }) => {
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
  const renderCouponsCell = useCallback((coupon, columnKey) => {
    const cellValue = coupon[columnKey];
    switch (columnKey) {
      case "code": coupon.code
        return 
      case "createdAt":
        return (
          <p className="text-nowrap">
            {ToLocalDateStringShort(coupon.createdAt)}
          </p>
        ); 
      case "expireDate":
        return (
          <p className="text-nowrap">
            {ToLocalDateStringShort(coupon.expireDate)}
          </p>
        );
      case "type":
        return <p className="text-nowrap">{coupon.type === "fixedProduct" ? "قیمت ثابت" : "درصد"}</p>
      case "productIds":
        return coupon.productIds.map(({title, slug}) => {
          return (
            <Link href={slug} key={title}>
              <Chip color="default" className="mb-2">{title}</Chip>
            </Link>
          );
        });
      case "amount" : 
      return coupon.amount.toLocaleString()
      case "usageLimit":
        return coupon.usageLimit;
      case "usageCount":
        return coupon.usageCount;
      case "isActive":
        return coupon.isActive ? <Chip color="success" className="text-white">فعال</Chip> : <Chip color="danger" className="text-white">غیرفعال</Chip>
      case "act":
        return (
          <div className="flex-between gap-x-1.5">
            <Button isIconOnly color="default" variant="light">
              <Link href={`/dashboard/coupons/edit/${coupon._id}`}>
                <BiEditAlt className="size-6 text-sky-500" />
              </Link>
            </Button>
            <ConfirmModal
              btnIcon={<BiTrash className="size-6 text-rose-500" />} titleText="حذف کد تخفیف" confirmBtnText="حذف کد تخفیف" confirmBtnHandler={() => RemoveProductHandler(coupon._id)}
            >
              آیا برای حذف کد تخفیف <span className="text-rose-400">{coupon.title}</span> مطمعن هستید؟
            </ConfirmModal>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <CustomTable
      headerItems={couponsListTableTHeads}
      itemsArray={couponArrayItem}
      renderCell={renderCouponsCell}
    ></CustomTable>
  );
};

export default CouponsList;
