import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const steps = [
  {
    n: "1",
    title: "Connect your accounts",
    body: "Securely link banks, mutual funds, stocks, EPF and more. Read-only, encrypted, done in minutes.",
  },
  {
    n: "2",
    title: "See the full picture",
    body: "Fermor organizes everything into one net-worth view, with cash-flow insights that finally make sense.",
  },
  {
    n: "3",
    title: "Follow your plan",
    body: "A personal plan built around your goals: clear next steps, gentle check-ins, you always in control.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="section-anchor border-y border-line bg-[#FAF8F3] py-16 md:py-28"
      aria-labelledby="how-heading"
    >
      <Container>
        <Reveal className="max-w-xl">
          <h2
            id="how-heading"
            className="text-balance font-display text-[2rem] leading-tight text-ink md:text-[2.75rem]"
          >
            From scattered to sorted.
          </h2>
        </Reveal>

        <RevealGroup className="relative mt-12 space-y-0 md:mt-14">
          <div
            className="pointer-events-none absolute bottom-8 left-[1.125rem] top-8 hidden w-px bg-line md:block"
            aria-hidden
          />

          {steps.map((step, i) => (
            <RevealItem key={step.n}>
              <article className="relative grid gap-4 border-t border-line py-8 md:grid-cols-[3rem_1fr] md:gap-8 md:py-10">
                <div className="flex items-start gap-4 md:block">
                  <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-cream font-mono text-sm font-medium text-forest md:h-9 md:w-9">
                    {step.n}
                  </span>
                  {i < steps.length - 1 ? (
                    <div
                      className="absolute left-[1.125rem] top-[4.5rem] h-[calc(100%-3rem)] w-px bg-line md:hidden"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
