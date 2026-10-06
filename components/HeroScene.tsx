"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useRef, type PointerEvent } from "react";

const total = 12_480_650;

const assets = [
  { label: "Equity", amount: "₹48,20,000", color: "#0F3D2E", value: 4_820_000 },
  { label: "Mutual funds", amount: "₹32,10,000", color: "#1D5C47", value: 3_210_000 },
  { label: "EPF", amount: "₹18,40,000", color: "#C9A96A", value: 1_840_000 },
  { label: "Cash & FDs", amount: "₹9,80,000", color: "#5B6B62", value: 980_000 },
];

const sparkPoints =
  "4,52 12,48 20,44 28,38 36,40 44,32 52,28 60,24 68,20 76,16 84,12 92,8";

function DashboardCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.75rem] border border-line bg-[#FDFCF8] ${className}`}
    >
      <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-8 md:pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted md:text-xs">
          Total net worth
        </p>
        <span className="rounded-full bg-mint px-3 py-1 font-mono text-[11px] font-medium tabular-nums text-forest md:text-xs">
          +12.4% this year
        </span>
      </div>
      <p className="px-6 font-mono text-[2rem] font-medium tabular-nums tracking-tight text-ink md:px-8 md:text-[2.75rem] lg:text-[3.25rem]">
        ₹1,24,80,650
      </p>

      <svg
        viewBox="0 0 96 56"
        className="mx-6 mt-4 h-16 w-[calc(100%-3rem)] md:mx-8 md:mt-6 md:h-20 md:w-[calc(100%-4rem)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="heroSparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCEAE2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#DCEAE2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          fill="url(#heroSparkFill)"
          points={`${sparkPoints} 92,56 4,56`}
        />
        <polyline
          fill="none"
          stroke="#1D5C47"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={sparkPoints}
        />
      </svg>

      <ul className="space-y-4 px-6 pb-6 pt-6 md:space-y-5 md:px-8 md:pb-8 md:pt-7">
        {assets.map((row) => {
          const pct = Math.round((row.value / total) * 100);
          return (
            <li key={row.label} className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: row.color }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm text-muted md:text-base">
                    {row.label}
                  </span>
                  <span className="font-mono text-xs tabular-nums text-ink md:text-sm">
                    {row.amount}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: row.color,
                    }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-line/80 bg-mint/25 px-6 py-5 md:px-8 md:py-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Goal <span className="text-line">/</span> Home down payment
        </p>
        <div className="mt-3 flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-ink md:text-base">
            68% saved
          </span>
          <span className="font-mono text-xs tabular-nums text-muted md:text-sm">
            ₹34L of ₹50L
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line/80">
          <div className="h-full w-[68%] rounded-full bg-gold" />
        </div>
      </div>
    </div>
  );
}

export function HeroScene() {
  const reduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (reduceMotion || !sceneRef.current) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      sceneRef.current.style.setProperty("--tilt-y", `${x * 10}deg`);
      sceneRef.current.style.setProperty("--tilt-x", `${-y * 8}deg`);
    },
    [reduceMotion],
  );

  const onPointerLeave = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.style.setProperty("--tilt-y", "0deg");
    sceneRef.current.style.setProperty("--tilt-x", "0deg");
  }, []);

  return (
    <div
      className="hero-stage relative mx-auto w-full origin-center scale-[0.9] sm:scale-[0.95] md:scale-100"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] h-[55%] w-[88%] -translate-x-1/2 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(220,234,226,0.95)_0%,rgba(247,245,240,0)_72%)]"
        aria-hidden
      />

      <div ref={sceneRef} className="hero-scene relative mx-auto w-full max-w-full pb-4">
        <div
          className="hero-scene-layer pointer-events-none absolute inset-x-[8%] top-[6%] z-0 rounded-[1.5rem] border border-line/50 bg-cream/80 shadow-[0_32px_64px_-40px_rgba(16,32,26,0.2)]"
          aria-hidden
        >
          <div className="h-full min-h-[320px] opacity-30 md:min-h-[420px]" />
        </div>
        <div
          className="hero-scene-layer pointer-events-none absolute inset-x-[4%] top-[3%] z-[1] rounded-[1.65rem] border border-line/60 bg-[#FAF8F3] shadow-[0_40px_80px_-48px_rgba(16,32,26,0.22)]"
          aria-hidden
        >
          <div className="min-h-[340px] md:min-h-[440px]" />
        </div>

        <div className="hero-scene-layer hero-float relative z-[2] shadow-[0_40px_80px_-36px_rgba(15,61,46,0.22)]">
          <DashboardCard />
        </div>
      </div>
    </div>
  );
}
