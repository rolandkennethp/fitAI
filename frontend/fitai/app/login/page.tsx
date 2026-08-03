"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";
import { login } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const { user } = await login({ email, password });
      // Existing users go straight to the dashboard; only brand-new
      // accounts (via signup) are routed through onboarding.
      router.push(user.hasCompletedOnboarding ? "/dashboard" : "/onboarding");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell>
      <h1 className="font-display text-3xl text-white sm:text-4xl">
        Welcome Back
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        Log in to pick up your plan where you left off.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <Button type="submit" isLoading={isSubmitting} className="mt-2 w-full">
          Log In
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-ink-muted">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-lime hover:underline">
          Sign up
        </Link>
      </p>
    </AuthShell>
  );
}
