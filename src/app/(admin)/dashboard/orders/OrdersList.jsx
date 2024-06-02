import { orderListTableTHeads, orderUserTableTHeads, productsListInPanel } from "@/Constants/TableHeaders";
import CustomTable from "@/UI/CustomTable";
import ModalPlacement from "@/UI/ModalPlacement";
import { Chip, TableCell, TableRow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { BiShow } from "react-icons/bi";

const OrdersList = ({ orderArrayItem }) => {
  const renderOrdersCell = useCallback((order, columnKey) => {
    const cellValue = order[columnKey];
    switch (columnKey) {
      case "invoiceNumber":
        return order.invoiceNumber
      case "user":
        return(
          <ModalPlacement
                icon={<BiShow className="size-5 fill-sky-500" />}
                btnText="مشاهده"
                title="مشخصات کاربر"
              >
                <CustomTable 
                  headerItems={orderUserTableTHeads}
                  itemsArray={order.user}
                >
                        <TableRow>
                          <TableCell>
                           {order.user.name}
                          </TableCell>
                          <TableCell>{order.user.email}</TableCell>
                          <TableCell>{order.user.phoneNumber}</TableCell>
                        </TableRow>
                </CustomTable>
              </ModalPlacement>
        )
      case "description":
        return (
          <ModalPlacement
                icon={<BiShow className="size-5 fill-sky-500" />}
                btnText="مشاهده"
                title="توضیحات"
              >
                {order.description}
              </ModalPlacement>
        );
      case "productDetail": 
        return (
          <ModalPlacement
                icon={<BiShow className="size-5 fill-sky-500" />}
                btnText="لیست"
                title="محصول خریداری شده"
              >
                <CustomTable 
                  headerItems={productsListInPanel}
                  itemsArray={order.cart.productDetail}
                >
                  {order.cart.productDetail.map(
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
        )
      case "paymentDate":
        return <p className="dir-ltr">{order.paymentDate.slice(0 , 4)}/{order.paymentDate.slice(5 , 6)}/{order.paymentDate.slice(7 , 8)} - {order.paymentDate.slice(8 , 10)}: {order.paymentDate.slice(10 , 12)} </p>
      case "amount":
        return order.amount.toLocaleString();
      case "isPaid":
        return order.isPaid ? (
         <Chip color="primary">پرداخت شده</Chip>
        ) : (
          <Chip color="default">پرداخت نشده</Chip>
        );
      case "paymentMethod":
        return order.paymentMethod === "ZARINPAL" ? "زرین پال" : "ملت"
      case "status":
        return order.status === "COMPLETED" ?(
          <Chip color="success" className="text-white"> موفق</Chip>
         ) : (
           <Chip color="danger" className="text-white"> ناموفق</Chip>
         );
      default:
        return cellValue;
    }
  }, []);
  return (
    <CustomTable
      headerItems={orderListTableTHeads}
      itemsArray={orderArrayItem}
      renderCell={renderOrdersCell}
    ></CustomTable>
  );
};

export default OrdersList;
