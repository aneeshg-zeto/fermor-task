import { Compass, Eye, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { LucideIcon } from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
};

const pillars: Pillar[] = [
  {
    icon: Eye,
    title: "See the whole picture",
    body: "Net worth, cash flow, assets and goals, connected automatically and explained in plain English.",
    bullets: [
      "Unified net worth",
      "Cash-flow insights",
      "Plain-English summaries",
    ],
  },
  {
    icon: Compass,
    title: "Move with confidence",
    body: "Guided decisions, curated options and plans that adapt when life changes. No cold feet, no pressure.",
    bullets: [
      "Goal-based planning",
      "Curated investments",
      "Scenario modelling",
    ],
  },
  {
    icon: TrendingUp,
    title: "Let compounding work",
    body: "Track progress, rebalance automatically, and let time do the heavy lifting while you live your life.",
    bullets: [
      "Progress tracking",
      "Auto-rebalancing",
      "Nudges, not noise",
    ],
  },
];

export function Pillars() {
  return (
    <section
      id="product"
      className="section-anchor py-16 md:py-28"
      aria-labelledby="pillars-heading"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <h2
            id="pillars-heading"
            className="text-balance font-display text-[2rem] leading-tight text-ink md:text-[2.75rem]"
          >
            Understand. Act. Grow.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Everything Fermor does maps to one of three jobs: see clearly, decide
            calmly, stay on course.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 divide-y divide-line border-y border-line">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={pillar.title}>
                <article className="grid gap-6 py-10 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10 md:py-12 lg:grid-cols-[minmax(0,16rem)_1fr]">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-forest">
                      <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-xl font-semibold leading-snug text-ink md:text-2xl">
                      {pillar.title}
                    </h3>
                  </div>
                  <div>
                    <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                      {pillar.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink">
                      {pillar.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
