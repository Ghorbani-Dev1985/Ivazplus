"use client";
import { Accordion, AccordionItem, Checkbox, Input, Slider } from "@nextui-org/react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const CategorySidebar = ({categories}) => {
    const [selectedCategories , setSelectedCategories] = useState([])
    const CategorySelectHandler = () => {
        
    }
    return ( 
        <aside className="flex flex-col border border-gray-100 rounded-3xl p-2">
          <Input variant="underlined" color="primary" label="جستجو دسته بندی مورد نظر"  endContent={
            <BiSearchAlt className="size-7 shrink-0 text-primary" />
          }/>
          <Accordion defaultExpandedKeys={["1","2"]}>
      <AccordionItem key="1" aria-label="Accordion 1" title="دسته بندی‌ها">
        <ul className="space-y-5">
          {
            categories.map(({_id , title , englishTitle}) => {
                return(
                    <li key={_id} className="flex items-center gap-x-1">
                    <Checkbox color="primary" value={englishTitle} name="productCategory" isSelected={selectedCategories.includes(englishTitle)} onChange={CategorySelectHandler}>{title}</Checkbox>   
                    </li>
                )
            })
        }  
        </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 1" title=" محدوده قیمت">
      <Slider 
      label=" "
      step={100000} 
      maxValue={2000000} 
      minValue={100000} 
      defaultValue={[100000, 2000000]}
      showSteps={true}
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      formatOptions={{style: "currency", currency: "IRR"}}
      tooltipValueFormatOptions={{style: "currency", currency: "IRR", maximumFractionDigits: 0}}
      classNames={{
        base: "max-w-md overflow-hidden",
        filler: "bg-gradient-to-r from-primary to-secondary",
        labelWrapper: "mb-2",
        label: "font-medium text-default-700 text-medium",
        value: "font-medium text-default-500 text-small",
        thumb: [
          "transition-size",
          "bg-gradient-to-r from-secondary to-primary",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:size-7 data-[dragging=true]:after:size-7"
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-gradient-to-r before:from-primary before:to-secondary",
          ],
          content: [
            "py-2 shadow-xl",
            "text-white bg-gradient-to-r from-primary to-secondary",
          ],
        },
      }}
    />
      </AccordionItem>
    </Accordion>
        </aside>
     );
}
 
export default CategorySidebar;