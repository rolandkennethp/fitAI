function Block({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-[3px] bg-bg-card ${className}`} />
  );
}

export default function DashboardLoading() {
  return (
    <div className="flex h-screen bg-bg">
      <div className="hidden w-70 shrink-0 flex-col gap-6 border-r border-border px-4 py-5 lg:flex">
        <Block className="h-8 w-28" />
        <div className="flex flex-col gap-2">
          <Block className="h-8 w-full" />
          <Block className="h-8 w-full" />
          <Block className="h-8 w-full" />
        </div>
      </div>

      <div className="flex-1 space-y-8 px-6 py-8 lg:px-10 lg:py-10">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Block className="h-3 w-40" />
            <Block className="h-9 w-72" />
          </div>
          <Block className="h-10 w-36" />
        </div>

        <Block className="h-64 w-full" />
        <Block className="h-28 w-full" />
      </div>

      <div className="hidden w-110 shrink-0 border-l border-border px-6 py-6 lg:block">
        <Block className="h-6 w-32" />
        <Block className="mt-6 h-20 w-full" />
      </div>
    </div>
  );
}
