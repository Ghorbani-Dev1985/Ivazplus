import { categoryListTableTHeads} from "@/Constants/TableHeaders";
import ConfirmModal from "@/UI/ConfimModal";
import CustomTable from "@/UI/CustomTable";
import { Button, Chip } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { useRemoveCategory } from "src/hooks/useCategories";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";

const CategoriesList = ({categoryArrayItem}) => {
  const {mutateAsync} = useRemoveCategory();
  const queryClient = useQueryClient();
  const RemoveCategoryHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["getCategories"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  }
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
            case "act":
              return <div className="flex-between gap-x-1.5">
                 <Button isIconOnly color="default" variant="light">
              <Link href={`/dashboard/categories/edit/${category._id}`}>
                <BiEditAlt className="size-6 text-sky-500" />
              </Link>
            </Button>
            <ConfirmModal
              btnIcon={<BiTrash className="size-6 text-rose-500" />} titleText="حذف دسته بندی" confirmBtnText="حذف دسته بندی" confirmBtnHandler={() => RemoveCategoryHandler(category._id)}
            >
              آیا برای حذف دسته بندی <span className="text-rose-400">{category.title}</span> مطمعن هستید؟
            </ConfirmModal>
              </div>
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
