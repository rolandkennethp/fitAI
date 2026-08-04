"use client";

import { useEffect, useState } from "react";
import { DashboardSummary } from "@/types/workout";
import { getDashboardSummary } from "@/services/dashboardService";

export function useDashboardSummary() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getDashboardSummary().then((data) => {
      if (!cancelled) {
        setSummary(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { summary, isLoading };
}
