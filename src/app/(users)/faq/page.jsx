"use client";
import { faqItems } from "@/Constants/FaqItems";
import AppBreadcrumb from "@/UI/AppBreadcrumb";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Faq = () => {
    const [faqTitle , setFaqTitle] = useState("")
    console.log(faqTitle)
  return (
    <>
      <AppBreadcrumb>
        <BreadcrumbItem> سوالات متداول</BreadcrumbItem>
      </AppBreadcrumb>
      <div className="container my-12 flex w-full flex-col">
        <p className="text-secondary text-xl font-bold mb-5">{faqTitle}</p>
        <Tabs onSelectionChange={(key) => {setFaqTitle(key)}} aria-label="Options" isVertical={true} classNames={{panel: "w-full px-0 md:px-3" , wrapper: "flex-col gap-y-6 md:flex-row" , tab: "py-6" , cursor: "bg-secondary", tabList: "w-full" , tabContent: "w-full md:w-64 group-data-[selected=true]:text-white group-data-[selected=true]:font-bold"}}>
          {faqItems.map(({ title, faqs }) => {
            return (
              <Tab key={title} title={
                <div className="flex-between">
                <p>{title}</p>
                <HiChevronLeft className="size-5"/> 
            </div>
              }>
                <Card>
                  <CardBody>
                    <Accordion variant="splitted" defaultExpandedKeys="1">
                      {faqs.map(({ id, faqTitle, faqDesc }) => {
                        return (
                          <AccordionItem
                            key={id}
                            aria-label={faqTitle}
                            title={faqTitle}
                            className="text-justify leading-9 text-gray-500"
                            indicator={<HiChevronRight className="size-5"/>}
                          >{faqDesc}</AccordionItem>
                        );
                      })}
                    </Accordion>
                  </CardBody>
                </Card>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default Faq;
