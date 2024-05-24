"use client"
import { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import SortOptions from "@/Constants/SortOptions";
import { BiChevronDown } from "react-icons/bi";

const ProductsSort = () => {
    const [selectedKeys, setSelectedKeys] = useState("مرتب سازی: جدیدترین");

    const SortProductHandler = (e) => {
        console.log(e)
    }
    return ( 
        <section className="col-span-4 flex-between">
        <Dropdown>
      <DropdownTrigger className="border-gray-100 py-6 min-w-64 justify-between">
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedKeys}
          <BiChevronDown className="size-6"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="مرتب سازی"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        classNames={{base: "min-w-60"}}
      >
         {
             SortOptions.map(({id , value , label}) => {
                 return(
                    <DropdownItem key={label} selectedKeys={value} onPressChange={SortProductHandler} className="py-3">{label}</DropdownItem>

                )
            })
         }
      </DropdownMenu>
    </Dropdown>
        </section>
     );
}
 
export default ProductsSort;