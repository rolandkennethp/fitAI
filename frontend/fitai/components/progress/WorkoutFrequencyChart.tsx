"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { WorkoutFrequencyPoint } from "@/types/progress";

type FrequencyTooltipProps = TooltipProps<number, string> & {
  label?: string;
  payload?: { dataKey: string; value: number }[];
};

function FrequencyTooltip({ active, payload, label }: FrequencyTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-[3px] border border-border bg-bg-elevated px-3 py-2 shadow-xl">
      <p className="text-xs font-semibold text-white">{label}</p>
      <p className="text-xs text-lime">{payload[0].value} workouts</p>
    </div>
  );
}

export function WorkoutFrequencyChart({
  data,
}: {
  data: WorkoutFrequencyPoint[];
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-muted">
        Workout Frequency
      </p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
          >
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
              allowDecimals={false}
            />
            <Tooltip
              content={<FrequencyTooltip />}
              cursor={{ fill: "rgba(203,255,61,0.06)" }}
            />
            <Bar
              dataKey="count"
              fill="#cbff3d"
              radius={[2, 2, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
