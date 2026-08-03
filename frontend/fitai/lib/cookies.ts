/**
 * Minimal client-side cookie helpers.
 *
 * These exist purely to support the MOCK auth flow (see services/authService.ts).
 * Once the Spring Boot backend is connected, auth will be handled via a real
 * httpOnly session/JWT cookie set by the server, and these helpers can be
 * removed entirely — the middleware only needs to read the cookie name,
 * not know how it got there.
 */

export function setCookie(name: string, value: string, days = 7) {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; samesite=lax`;
}

export function deleteCookie(name: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; max-age=0`;
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}
