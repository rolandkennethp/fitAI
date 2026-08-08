"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { WeeklyVolumePoint } from "@/types/progress";

type VolumeTooltip = TooltipProps<number, string> & {
  label?: string;
  payload?: { dataKey: string; value: number }[];
};

function VolumeTooltip({ active, payload, label }: VolumeTooltip) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-[3px] border border-border bg-bg-elevated px-3 py-2 shadow-xl">
      <p className="text-xs font-semibold text-white">{label}</p>
      <p className="text-xs text-lime">{payload[0].value}t volume</p>
    </div>
  );
}

export function WeeklyVolumeChart({ data }: { data: WeeklyVolumePoint[] }) {
  return (
    <div>
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-muted">
        Weekly Training Volume
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
          >
            <defs>
              <linearGradient id="volumeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#cbff3d" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#cbff3d" stopOpacity={0} />
              </linearGradient>
            </defs>
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
              tickFormatter={(v) => `${v}t`}
            />
            <Tooltip
              content={<VolumeTooltip />}
              cursor={{ stroke: "#262626", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="volumeTons"
              stroke="#cbff3d"
              strokeWidth={2}
              fill="url(#volumeFill)"
              activeDot={{
                r: 4,
                fill: "#cbff3d",
                stroke: "#0a0a0a",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
