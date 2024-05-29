import { productsListInPanel, userListTableHeads } from "@/Constants/TableHeaders";
import CustomTable from "@/UI/CustomTable";
import ModalPlacement from "@/UI/ModalPlacement";
import { TableCell, TableRow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { BiShow } from "react-icons/bi";
import { HiMiniCheckCircle, HiNoSymbol } from "react-icons/hi2";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";


const UsersList = ({userArrayItem}) => {
  const renderUsersCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
        switch (columnKey) {
          case "name":
            return user.name;
          case "biography":
            return user.biography;
          case "email":
            return user.email;
          case "phoneNumber":
            return user.isVerifiedPhoneNumber ? <p className="text-emerald-500 flex-center gap-x-1"><HiMiniCheckCircle className="size-5"/>{user.phoneNumber}</p> : <p className="text-rose-500 flex-center gap-x-1"><HiNoSymbol className="size-5"/>{user.phoneNumber}</p>;
          case "Products":
            return (
              <ModalPlacement
                icon={<BiShow className="size-5 fill-sky-500" />}
                btnText="لیست"
                title="محصول خریداری شده"
              >
                <CustomTable 
                  headerItems={productsListInPanel}
                  itemsArray={user.Products}
                >
                  {user.Products.map(
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
          case "createdAt":
              return ToLocalDateStringShort(user.createdAt);
          case "role":
            return user.role === "ADMIN" ? "ادمین" : "کاربر"
          default:
            return cellValue;
        }
      }, []);
      return(
        <CustomTable
        headerItems={userListTableHeads}
        itemsArray={userArrayItem}
        renderCell={renderUsersCell}></CustomTable>
      )
}
 
export default UsersList;