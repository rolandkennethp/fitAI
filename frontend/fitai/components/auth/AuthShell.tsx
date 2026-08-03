import { Logo } from "@/components/ui/Logo";

interface AuthShellProps {
  children: React.ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="h-dvh bg-bg">
      <header className="px-6 py-5 md:px-10">
        <Logo />
      </header>

      <main className="flex items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-md border px-6 py-8 rounded border-white/10">
          {children}
        </div>
      </main>
    </div>
  );
}
