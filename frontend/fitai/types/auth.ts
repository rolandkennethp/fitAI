// Mirrors the shape expected from Spring Security's auth endpoints later.

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  hasCompletedOnboarding: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

export interface AuthFormError {
  field?: keyof LoginPayload | keyof SignupPayload;
  message: string;
}
