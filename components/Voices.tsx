import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "For the first time, I actually know my net worth, and what to do about it.",
    name: "Ananya S., 29",
    role: "Product designer, Bengaluru",
    featured: true,
  },
  {
    quote:
      "It's the first finance app that doesn't make me feel stupid.",
    name: "Rohit M., 34",
    role: "Software engineer, Pune",
    featured: false,
  },
  {
    quote:
      "I stopped guessing and started following a plan. That changed everything.",
    name: "Meera K., 41",
    role: "Doctor, Mumbai",
    featured: false,
  },
];

export function Voices() {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="py-16 md:py-28" aria-labelledby="voices-heading">
      <Container>
        {/* illustrative placeholders for this assignment */}
        <Reveal className="mb-10 max-w-xl md:mb-14">
          <h2
            id="voices-heading"
            className="text-balance font-display text-[2rem] leading-tight text-ink md:text-[2.5rem]"
          >
            Early members, in their words
          </h2>
        </Reveal>

        <RevealGroup className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <RevealItem>
            <figure className="flex h-full min-h-[280px] flex-col justify-between rounded-[var(--radius-hero)] bg-mint/60 p-8 md:p-10">
              <blockquote className="font-display text-2xl leading-snug text-ink md:text-[1.75rem] md:leading-snug">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-semibold text-ink">{featured.name}</p>
                <p className="mt-1 text-sm text-muted">{featured.role}</p>
              </figcaption>
            </figure>
          </RevealItem>

          <div className="flex flex-col gap-6">
            {rest.map((t) => (
              <RevealItem key={t.name}>
                <figure className="flex flex-1 flex-col rounded-[var(--radius-card)] border border-line bg-white/70 p-6 md:p-7">
                  <blockquote className="flex-1 text-base leading-relaxed text-ink md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 pt-4">
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="mt-1 text-sm text-muted">{t.role}</p>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
