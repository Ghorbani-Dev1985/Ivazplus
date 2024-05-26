"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const AppBreadcrumb = ({children}) => {
    return ( 
        <section className="w-full bg-gray-100 p-4 h-24 flex items-center">
        <div className="container">
        <Breadcrumbs
      separator="/"
      itemClasses={{
        separator: "px-2"
      }}
    >
      <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
    {children}
    </Breadcrumbs> 
        </div>
      </section>
     );
}
 
export default AppBreadcrumb;