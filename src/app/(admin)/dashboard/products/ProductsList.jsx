import { productListTableTHeads} from "@/Constants/TableHeaders";
import CustomTable from "@/UI/CustomTable";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";

const ProductsList = ({productArrayItem}) => {
  const renderProductsCell = useCallback((product, columnKey) => {
    const cellValue = product[columnKey];
        switch (columnKey) {
          case "imageLink":
            return <Image
            width={90}
            height={90}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={`/images/products/${product.imageLink}`}
            src={`/images/products/${product.imageLink}`}
          />
          case "title":
            return <Link target="_blank" href={`/products/${product.slug}`} className="font-semibold hover:text-primary transition-colors">{product.title}</Link>;
            case "createdAt":
                return <p className="text-nowrap">{ToLocalDateStringShort(product.createdAt)}</p>
          case "categoryTitle":
            return <p className="text-nowrap">{product.category.title}</p>;
          case "price":
            return product.price.toLocaleString();
          case "discount":
            return product.discount > 0 ? <span>{product.discount} %</span> : <p className="text-nowrap">بدون تخفیف</p>
          case "offPrice":
            return product.offPrice.toLocaleString();
          case "quantity":
            return product.quantity
          case "act":
            return ""
          default:
            return cellValue;
        }
      }, []);
      return(
        <CustomTable
        headerItems={productListTableTHeads}
        itemsArray={productArrayItem}
        renderCell={renderProductsCell}></CustomTable>
      )
}
 
export default ProductsList;