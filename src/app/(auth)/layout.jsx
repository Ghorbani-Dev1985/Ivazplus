"use client";
import "@/Styles/globals.css";
import { IranYekan } from "../../constants/LocalFonts";
import { YekanBakh } from "../../constants/LocalFonts";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Image from "next/image";
import { Providers } from "../Provisers";
export default function AuthLayout({ children }) {
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
        <NextUIProvider>
          <Toaster />
          <main className="w-full h-screen bg-gradient-to-t from-primary to-secondary">
            <section className="container h-screen flex-center">
              <div className="w-full max-w-2xl flex flex-col items-center bg-white rounded-xl p-5">
                <Image
                  width={103}
                  height={110}
                  alt="ghorbani-dev.ir"
                  placeholder="blur"
                  blurDataURL="/images/logo/logo.svg"
                  src="/images/logo/logo.svg"
                  className="object-cover"
                />
                <Providers>
                {children}
                </Providers>
              </div>
            </section>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
