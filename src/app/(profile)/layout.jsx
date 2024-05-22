"use client";
import "@/Styles/globals.css";
import { IranYekan } from "@/Constants/LocalFonts";
import { YekanBakh } from "@/Constants/LocalFonts";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import  ReactQueryProvider  from "../Providers";
import Sidebar from "@/Features/Profile/Sidebar";
export default function ProfileLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${IranYekan.variable} ${YekanBakh.variable} font-sans`}
    >
      <head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
          `,
          }}
        />
        <link rel="icon" href="images/logo/logo.svg" type="image/svg" />
      </head>
      <body> 
        <ReactQueryProvider>
        <NextUIProvider>
          <Toaster />
          <main className="grid grid-cols-4 gap-x-3 bg-primary-50 h-screen p-4">
            <Sidebar />
            <section className="col-span-3 overflow-y-auto p-4 bg-gray-50 rounded-3xl">
           {children}
            </section>
          </main>
        </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
