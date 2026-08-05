import Link from "next/link";
import { Home } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <div className="mb-10">
        <Logo />
      </div>

      <p className="font-display text-7xl text-lime sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-2xl text-white sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-sm bg-lime px-6 py-3.5 font-display text-sm text-black transition-colors hover:bg-lime/90"
      >
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
