// middleware.js
import { NextResponse } from "next/server";

const IS_MAINTENANCE = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
const MAINTENANCE_URL = process.env.NEXT_PUBLIC_MAINTENANCE_URL; 

export function middleware(request) {
  // allow Next.js internal & static files
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||      // remove this line if you also want to block APIs
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  if (IS_MAINTENANCE && MAINTENANCE_URL) {
    // redirect every route to external maintenance page
    return NextResponse.redirect(MAINTENANCE_URL);
  }

  return NextResponse.next();
}

export const config = {
  // run middleware for all routes
  matcher: ["/:path*"],
};
