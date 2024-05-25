"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const ProductBreadcrumb = ({categoryTitle , categoryEnTitle , title}) => {
    return ( 
             <Breadcrumbs
      separator="/"
      itemClasses={{
        separator: "px-2"
      }}
    >
      <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
      <BreadcrumbItem href="/products">فروشگاه</BreadcrumbItem>
      <BreadcrumbItem href={`/category/${categoryEnTitle}`}>{categoryTitle}</BreadcrumbItem>
      <BreadcrumbItem>{title}</BreadcrumbItem>
    </Breadcrumbs> 
     );
}
 
export default ProductBreadcrumb;