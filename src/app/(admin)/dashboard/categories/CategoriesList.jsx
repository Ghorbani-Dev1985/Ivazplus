import { categoryListTableTHeads, productListTableTHeads} from "@/Constants/TableHeaders";
import CustomTable from "@/UI/CustomTable";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";

const CategoriesList = ({categoryArrayItem}) => {
  const renderCategoriesCell = useCallback((category, columnKey) => {
    const cellValue = category[columnKey];
        switch (columnKey) {
          case "title":
            return <Link target="_blank" href={`/category/${category.englishTitle}`} className="font-semibold hover:text-primary transition-colors">{category.title}</Link>;
            case "createdAt":
                return <p className="text-nowrap">{ToLocalDateStringShort(category.createdAt)}</p>
          case "englishTitle":
            return <p className="text-nowrap">{category.englishTitle}</p>;
          case "type":
            return category.type === "product" ? "محصول" : "خدمات"
          case "description":
            return category.description;
          default:
            return cellValue;
        }
      }, []);
      return(
        <CustomTable
        headerItems={categoryListTableTHeads}
        itemsArray={categoryArrayItem}
        renderCell={renderCategoriesCell}></CustomTable>
      )
}
 
export default CategoriesList;



//createdAt
// : 
// "2024-05-23T13:20:23.210Z"
// description
// : 
// "لباس زنانه ایواز پلاس"
// englishTitle
// : 
// "womenCloth"
// icon
// : 
// {sm: null, lg: null}
// parentId
// : 
// null
// title
// : 
// "لباس زنانه"
// type
// : 
// "product"