"use client";

import { useEffect, useRef, useState } from "react";
import { formatIndianNumber, parseStatValue } from "@/lib/format";

type CountUpStatProps = {
  value: string;
  label: string;
};

export function CountUpStat({ value, label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        if (reduced) {
          setDisplay(value);
          return;
        }

        const { prefix, suffix, numeric, decimals } = parseStatValue(value);
        if (numeric === 0) {
          setDisplay(value);
          return;
        }

        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = numeric * eased;
          const formatted =
            decimals > 0
              ? current.toFixed(decimals)
              : formatIndianNumber(current);
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="font-mono text-2xl font-medium tracking-tight text-ink md:text-3xl">
        {display}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
