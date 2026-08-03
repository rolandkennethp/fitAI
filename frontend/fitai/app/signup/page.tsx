"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";
import { signup } from "@/services/authService";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await signup({ name, email, password });
      // Brand-new accounts always go through Day-One Onboarding first.
      router.push("/onboarding");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell>
      <h1 className="font-display text-3xl text-white sm:text-4xl">
        Create Your Account
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        Start with a plan built around your goals and schedule.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <TextField
          label="Name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <Button type="submit" isLoading={isSubmitting} className="mt-2 w-full">
          Sign Up
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-ink-muted">
        Already have an account?{" "}
        <Link href="/login" className="text-lime hover:underline">
          Log in
        </Link>
      </p>
    </AuthShell>
  );
}
