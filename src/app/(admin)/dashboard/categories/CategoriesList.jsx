import { categoryListTableTHeads, productListTableTHeads} from "@/Constants/TableHeaders";
import CustomTable from "@/UI/CustomTable";
import { Chip } from "@nextui-org/react";
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
            return <Chip color="primary">{category.type === "product" ? "محصول" : category.type === "comment" ? "نظر" : category.type === "post" ? "مقاله" : "تیکت"}</Chip>
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
