"use client";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import { BreadcrumbItem } from "@nextui-org/react";

const ProductBreadcrumb = ({categoryTitle , categoryEnTitle , title}) => {
    return ( 
        <AppBreadcrumb>
          <BreadcrumbItem href="/products">فروشگاه</BreadcrumbItem>
          <BreadcrumbItem href={`/category/${categoryEnTitle}`}>{categoryTitle}</BreadcrumbItem>
          <BreadcrumbItem>{title}</BreadcrumbItem>
        </AppBreadcrumb>
   
     );
}
 
export default ProductBreadcrumb;