interface SuggestedPromptChipProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function SuggestedPromptChip({
  label,
  onClick,
  disabled,
}: SuggestedPromptChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-[3px] border border-border px-3 py-2 text-left text-xs text-ink-muted transition-colors hover:border-lime/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      {label}
    </button>
  );
}
