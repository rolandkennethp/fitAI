import { Logo } from "@/components/ui/Logo";

interface AuthShellProps {
  children: React.ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <header className="px-6 py-5 md:px-10">
        <Logo />
      </header>

      <main className="flex items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
