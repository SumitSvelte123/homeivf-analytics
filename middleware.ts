import { NextRequest, NextResponse } from "next/server";

const URL_AFTER_LOGOUT = "/";
const REDIRECT_DASHBOARD_URL = "/dashboard"
const PUBLIC_PATHS = ["/", "/api"];

const _getPath = (path: string) => {
  return PUBLIC_PATHS.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const hasAccessToken = request.cookies.has("access_token");

  const isPublicPath = _getPath(path);

  if (!hasAccessToken && !isPublicPath) {
    return NextResponse.redirect(new URL(URL_AFTER_LOGOUT, request.url));
  }

  if (hasAccessToken && isPublicPath) {
    return NextResponse.redirect(new URL(REDIRECT_DASHBOARD_URL, request.url));
  }  
}

export const config = {
  matcher: ["/((?!static|api|.*\\..*|_next|favicon.ico).*)"],
};
