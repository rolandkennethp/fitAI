import {
  AuthResponse,
  AuthUser,
  LoginPayload,
  SignupPayload,
} from "@/types/auth";
import { deleteCookie, getCookie, setCookie } from "@/lib/cookies";

// ---------------------------------------------------------------------------
// MOCK IMPLEMENTATION
//
// Every function here has the exact signature it will have once it's calling
// the real Spring Boot + Spring Security API. When the backend is ready,
// replace the body of each function with a fetch()/axios call to:
//   POST /api/auth/login
//   POST /api/auth/signup
//   POST /api/auth/logout
//   GET  /api/auth/me
// The backend should set an httpOnly session/JWT cookie named AUTH_COOKIE_NAME
// directly — at that point deleteCookie/setCookie below can be removed, since
// the server sets/clears the cookie instead of the client.
// ---------------------------------------------------------------------------

export const AUTH_COOKIE_NAME = "fitai_session";
const ONBOARDING_COOKIE_NAME = "fitai_onboarded";
const MOCK_LATENCY_MS = 600;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  await wait(MOCK_LATENCY_MS);

  if (!payload.email || !payload.password) {
    throw new Error("Email and password are required.");
  }

  // Mock: any credentials succeed, and an existing user is treated as having
  // already completed onboarding, so they land straight on the dashboard.
  const user: AuthUser = {
    id: "mock-user-1",
    name: payload.email.split("@")[0],
    email: payload.email,
    hasCompletedOnboarding: true,
  };

  setCookie(AUTH_COOKIE_NAME, "mock-jwt-token");
  setCookie(ONBOARDING_COOKIE_NAME, "true");

  return { user, token: "mock-jwt-token" };
}

export async function signup(payload: SignupPayload): Promise<AuthResponse> {
  await wait(MOCK_LATENCY_MS);

  if (!payload.name || !payload.email || !payload.password) {
    throw new Error("Name, email, and password are required.");
  }
  if (payload.password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  // Mock: a brand new user has NOT completed onboarding yet.
  const user: AuthUser = {
    id: "mock-user-new",
    name: payload.name,
    email: payload.email,
    hasCompletedOnboarding: false,
  };

  setCookie(AUTH_COOKIE_NAME, "mock-jwt-token");
  deleteCookie(ONBOARDING_COOKIE_NAME);

  return { user, token: "mock-jwt-token" };
}

export async function logout(): Promise<void> {
  await wait(200);
  deleteCookie(AUTH_COOKIE_NAME);
  deleteCookie(ONBOARDING_COOKIE_NAME);
}

export function isAuthenticated(): boolean {
  return Boolean(getCookie(AUTH_COOKIE_NAME));
}

export function hasCompletedOnboarding(): boolean {
  return Boolean(getCookie(ONBOARDING_COOKIE_NAME));
}

export function markOnboardingComplete() {
  setCookie(ONBOARDING_COOKIE_NAME, "true");
}
