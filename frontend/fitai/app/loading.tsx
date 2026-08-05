export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-10 w-10 animate-pulse items-center justify-center rounded-sm bg-lime font-display text-lg font-bold text-black">
          F
        </span>
        <div className="h-0.75 w-32 overflow-hidden rounded-full bg-border-subtle">
          <div className="h-full w-1/3 animate-[loading-bar_1.1s_ease-in-out_infinite] rounded-full bg-lime" />
        </div>
      </div>
    </div>
  );
}
