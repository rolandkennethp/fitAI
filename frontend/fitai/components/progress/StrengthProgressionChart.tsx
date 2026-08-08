"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { StrengthProgressionPoint } from "@/types/progress";
import { cn } from "@/lib/utils";

const SERIES = [
  { key: "bench" as const, label: "Bench", color: "#cbff3d" },
  { key: "squat" as const, label: "Squat", color: "#8a8a8a" },
  { key: "deadlift" as const, label: "Deadlift", color: "#5c5c5c" },
];

type StrengthTooltipProps = TooltipProps<number, string> & {
  label?: string;
  payload?: { dataKey: string; value: number }[];
};

function StrengthTooltip({ active, payload, label }: StrengthTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-[3px] border border-border bg-bg-elevated px-4 py-3 shadow-xl">
      <p className="text-sm font-semibold text-white">{label}</p>

      <div className="mt-2 space-y-1">
        {SERIES.map((s) => {
          const entry = payload.find((p) => p.dataKey === s.key);

          if (!entry) return null;

          return (
            <p
              key={s.key}
              className={cn(
                "text-xs",
                s.key === "bench"
                  ? "font-semibold text-lime"
                  : "text-ink-muted",
              )}
            >
              {s.label.toLowerCase()} : {entry.value}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function StrengthProgressionChart({
  data,
}: {
  data: StrengthProgressionPoint[];
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-muted">
        Strength Progression · Top Set
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#1a1a1a" />
            <XAxis
              dataKey="week"
              tick={{ fill: "#5c5c5c", fontSize: 11 }}
              axisLine={{ stroke: "#262626" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#5c5c5c", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 120]}
            />
            <Tooltip
              content={<StrengthTooltip />}
              cursor={{ stroke: "#262626", strokeWidth: 1 }}
            />
            {SERIES.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: s.color,
                  stroke: "#0a0a0a",
                  strokeWidth: 2,
                }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center gap-5">
        {SERIES.map((s) => (
          <div
            key={s.key}
            className="flex items-center gap-1.5 text-xs text-ink-muted"
          >
            <span
              className="h-0.5 w-4 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
