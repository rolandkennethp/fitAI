import { NextRequest, NextResponse } from "next/server";

// Mock cookie names — must match services/authService.ts.
// Once the backend is connected, AUTH_COOKIE_NAME will be a real httpOnly
// session/JWT cookie set by Spring Security, and this middleware's logic
// doesn't need to change at all — it only cares whether the cookies exist.
const AUTH_COOKIE_NAME = "fitai_session";
const ONBOARDING_COOKIE_NAME = "fitai_onboarded";

const AUTH_ROUTES = ["/login", "/signup"];
const ONBOARDING_PREFIX = "/onboarding";
const PROTECTED_ROUTES = ["/dashboard"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = Boolean(request.cookies.get(AUTH_COOKIE_NAME));
  const hasCompletedOnboarding = Boolean(
    request.cookies.get(ONBOARDING_COOKIE_NAME),
  );

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isOnboardingRoute = pathname.startsWith(ONBOARDING_PREFIX);
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  if (
    isAuthenticated &&
    hasCompletedOnboarding &&
    (isAuthRoute || isOnboardingRoute)
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isAuthenticated && !hasCompletedOnboarding && isAuthRoute) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  if (!isAuthenticated && (isProtectedRoute || isOnboardingRoute)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/onboarding/:path*", "/dashboard/:path*"],
};
