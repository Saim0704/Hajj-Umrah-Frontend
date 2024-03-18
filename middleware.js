import { NextResponse } from "next/server"
import { getRole } from './src/dataProvider/axios/index';
export function middleware (request) {

    const authToken = request.cookies.get("accessToken")?.value
   
    const role = getRole(authToken);//getting role from token
    const adminProtectedRoutes = ["/admin"]

    console.log(authToken,"authToken")
    console.log(request.nextUrl.pathname,"request.nextUrl.pathname")
    console.log((authToken === null && adminProtectedRoutes.includes(request.nextUrl.pathname)),"XXXXXXXXXXXXXX")


    

    // if(!authToken && adminProtectedRoutes.includes(request.nextUrl.pathname)) {
    //     return NextResponse.redirect(new URL("/login?error=Please Login First"));
    // }

    const loggedInNotAccessPaths = request.nextUrl.pathname == "/login" || request.nextUrl.pathname == "/signUp" || request.nextUrl.pathname == "/";

    if(loggedInNotAccessPaths) {
        if(authToken){
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    } else {
        if(!authToken){
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }


    // if (typeof window !== "undefined") {
    //     const token = localStorage.getItem("accessToken");
    //     if (!token && request.url.startsWith("/admin")) {
    //         return NextResponse.redirect("/login");
    //     }
    // }
    // return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/login",
        "/signUp",
        "/admin",
        "/admin/:path*"
    ]
}