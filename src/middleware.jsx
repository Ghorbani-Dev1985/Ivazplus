import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";


export async function middleware(req){
    const url = req.url;
    const pathname = req.nextUrl.pathname;
    if(pathname.startsWith("/profile")){
        const user = await middlewareAuth(req);
        if(!user) return NextResponse.redirect(new URL("/authentication" , url));
    }
    if(pathname.startsWith("/dashboard")){
        const user = await middlewareAuth(req);
        if(!user) return NextResponse.redirect(new URL("/authentication" , url));
        if(user && user.role !== "ADMIN") return NextResponse.redirect(new URL("/" , url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*" , "/profile/:path*"],
}