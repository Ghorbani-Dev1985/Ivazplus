import { productsListInPanel, userPaymentTHeads } from "@/Constants/TableHeaders";
import CustomTable from "@/UI/CustomTable";
import ModalPlacement from "@/UI/ModalPlacement";
import { Chip, TableCell, TableRow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { BiShow } from "react-icons/bi";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";


const OrderList = ({paymentArrayItem}) => {
  const renderPaymentCeLL = useCallback((item, columnKey) => {
        const cellValue = item[columnKey];
        switch (columnKey) {
          case "invoiceNum":
            return item.invoiceNumber;
          case "desc":
            return (
              <ModalPlacement
                icon={<BiShow className="size-5 fill-sky-500" />}
                btnText="مشاهده"
                title="توضیحات"
              >
                {item.description}
              </ModalPlacement>
            );
          case "products":
            return (
              <ModalPlacement
                icon={<BiShow className="size-5 fill-sky-500" />}
                btnText="لیست"
                title="محصول خریداری شده"
              >
                <CustomTable 
                  headerItems={productsListInPanel}
                  itemsArray={item.cart.productDetail}
                >
                  {item.cart.productDetail.map(
                    ({
                      _id,
                      imageLink,
                      title,
                      slug,
                      quantity,
                      price,
                      discount,
                      offPrice,
                    }) => {
                      return (
                        <TableRow key={_id}>
                          <TableCell>
                            <Image
                              width={70}
                              height={70}
                              alt="ghorbani-dev.ir"
                              placeholder="blur"
                              blurDataURL={`/images/products/${imageLink}`}
                              src={`/images/products/${imageLink}`}
                            />
                          </TableCell>
                          <TableCell>
                            <Link href={`/products/${slug}`} className="font-semibold hover:text-primary transition-colors">{title}</Link>
                          </TableCell>
                          <TableCell>{quantity}</TableCell>
                          <TableCell>{price.toLocaleString()}</TableCell>
                          <TableCell>{discount > 0 ? `${discount} %` : "بدون تخفیف"}</TableCell>
                          <TableCell>{offPrice.toLocaleString()}</TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </CustomTable>
              </ModalPlacement>
            );
          case "price":
            return item.amount.toLocaleString();
          case "date":
            return ToLocalDateStringShort(item.createdAt);
          case "paymentWay":
            return item.paymentMethod === "ZARINPAL" && "زرین پال";
          case "status":
            return item.status === "COMPLETED" ? (
              <Chip color="success" variant="solid" className="text-white">
                موفق
              </Chip>
            ) : (
              <Chip color="warning" variant="solid" className="text-white">
                ناموفق
              </Chip>
            );
          default:
            return cellValue;
        }
      }, []);
      return(
        <CustomTable
        headerItems={userPaymentTHeads}
        itemsArray={paymentArrayItem}
        renderCell={renderPaymentCeLL}
      ></CustomTable>
      )
}
 
export default OrderList;