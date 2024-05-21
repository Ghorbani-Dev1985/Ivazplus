
export function middleware(req){
    console.log(req.url , req.nextUrl.pathname)
    const url = req.url;
    const pathname = req.nextUrl.pathname;
    if(pathname.startsWith("/profile")){
        console.log("this is profile req!!!")
    }
    if(pathname.startsWith("/dashboard")){
        console.log("this is dashboard req!!!")
    }
}

export const config = {
    matcher: ["/dashboard" , "/profile"],
}