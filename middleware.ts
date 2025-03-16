import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const url = req.nextUrl;
        const session = req.nextauth.token;
        
        console.log("Session di Middleware:", session);
        console.log("Current pathname:", url.pathname);
        
        // Make sure to use consistent path formats
        if (session && url.pathname === "/Pages/auth") {
            console.log("🔄 Redirect ke Main karena sudah login");
            return NextResponse.redirect(new URL("/Pages/Main", req.url));
        }
        
        if (!session && url.pathname.startsWith("/Pages/") && url.pathname !== "/Pages/auth") {
            console.log("🔒 Akses ditolak, redirect ke Login");
            return NextResponse.redirect(new URL("/Pages/auth", req.url));
        }
        
        console.log("✅ Middleware berhasil dijalankan");
        return NextResponse.next();
    },
    {
        pages: {
            signIn: "/Pages/auth",
        },
    }
);

export const config = {
    matcher: ["/((?!api|public|_next).*)]"],
};