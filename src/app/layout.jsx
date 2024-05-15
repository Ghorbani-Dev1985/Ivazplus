"use client"
import "@/Styles/globals.css";


import {IranYekan} from '../constants/LocalFonts'
import {YekanBakh} from '../constants/LocalFonts'

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Header from "@/UI/Header/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${IranYekan.variable} ${YekanBakh.variable} font-sans`}>
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
        <NextUIProvider>
        <Toaster />
        <Header />
        <main>{children}</main>
        {/* <PreFooter /> */}
        {/* <Footer /> */}
        </NextUIProvider>
      </body>
    </html>
  );
}
