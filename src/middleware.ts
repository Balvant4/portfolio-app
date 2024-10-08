import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  // Check the current URL path and token status
  console.log("Token:", token);
  console.log("URL Pathname:", url.pathname);

  // Redirect authenticated users from auth-related pages to the dashboard
  if (
    token &&
    (url.pathname.startsWith("/sign-in") ||
      url.pathname.startsWith("/sign-up") ||
      url.pathname.startsWith("/verify"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users from the /projects page to the sign-in page
  // if (!token && url.pathname === "/projects") {
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }

  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: ["/sign-in", "/sign-up", "/", "/verify/:path*", "/projects"],
};
