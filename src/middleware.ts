import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { IPayload, redirectBasedRole } from "./utils/redirectBasedRole";
import { jwtDecode } from "jwt-decode";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token");

//   if (request.nextUrl.pathname.startsWith("/c-level")) {
//     return NextResponse.rewrite(new URL("/construct", request.url));
//   }

//   if (request.nextUrl.pathname.startsWith("/auth")) {
//     if (token) {
//       const jwt = jwtDecode<IPayload>(token?.value);

//       if (jwt.roles.toLowerCase() !== "superadmin") {
//         return NextResponse.redirect(
//           new URL(redirectBasedRole(token.value), request.url)
//         );
//       } else {
//         return NextResponse.redirect(new URL("/c-level", request.url));
//       }
//     }
//     return NextResponse.rewrite(new URL("/about-2", request.url));
//   } else {
//     if (token) {
//       const jwt = jwtDecode<IPayload>(token?.value);
//       if (!jwt.sub) return NextResponse.redirect(new URL("/auth", request.url));
//       if (jwt.roles.toLowerCase() !== "superadmin") {
//         const targetRedirect = redirectBasedRole(token.value);

//         if ("/" + request.nextUrl.pathname.split("/")[1] !== targetRedirect) {
//           return NextResponse.redirect(new URL(targetRedirect, request.url));
//         }
//       }
//     } else {
//       return NextResponse.redirect(new URL("/auth", request.url));
//     }
//     return NextResponse.rewrite(new URL("/dashboard/user", request.url));
//   }
// }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|construct|assets|_next/image|favicon.ico).*)",
  ],
};
