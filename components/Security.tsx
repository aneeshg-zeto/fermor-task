import { EyeOff, FileCheck, Lock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Lock,
    title: "256-bit encryption",
    body: "In transit and at rest, the standard banks use.",
  },
  {
    icon: EyeOff,
    title: "Read-only connections",
    body: "We can see; we can never touch. Fermor cannot move your money.",
  },
  {
    icon: ShieldCheck,
    title: "Never sold, ever",
    body: "Your data funds nothing but your experience. No ad networks, no data brokers.",
  },
  {
    icon: FileCheck,
    title: "Regulation-aware",
    body: "Built with Indian regulatory norms and best practices front of mind.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="section-anchor bg-forest py-16 text-cream md:py-28"
      aria-labelledby="security-heading"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <h2
            id="security-heading"
            className="text-balance font-display text-[2rem] leading-tight text-cream md:text-[2.75rem]"
          >
            Your data, treated like your money.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-cream/10 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.title}>
                <article className="h-full bg-forest p-7 md:p-9">
                  <Icon className="h-5 w-5 text-mint" strokeWidth={1.75} aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mint/90 md:text-base">
                    {item.body}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
