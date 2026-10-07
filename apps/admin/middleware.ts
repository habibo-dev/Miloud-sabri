import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  if (request.auth?.user?.role !== "ADMIN" && request.auth?.user?.role !== "AGENT") {
    if (request.nextUrl.pathname.startsWith("/api/")) return NextResponse.json({ error: "Non autorisé." }, { status: 403 });
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login).*)"]
};