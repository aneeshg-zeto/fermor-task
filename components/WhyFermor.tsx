import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function WhyFermor() {
  return (
    <section className="section-anchor py-16 md:py-28" aria-labelledby="why-heading">
      <Container>
        <RevealGroup className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <RevealItem>
            <h2
              id="why-heading"
              className="text-balance font-display text-[2rem] leading-[1.12] text-ink md:text-[2.75rem]"
            >
              Your money is scattered. Your advice is conflicted.
            </h2>
            <p className="mt-6 text-base text-muted md:text-lg">
              For working professionals in India who already save and invest, but
              still lack one place to see the full picture.
            </p>
          </RevealItem>

          <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <RevealItem>
              <p>
                Five apps. Three advisors. A spreadsheet you&apos;re a little
                afraid to open. Personal finance today makes you feel behind,
                even when you&apos;re doing fine.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                Fermor starts from a different place: showing you the truth
                about your money, clearly and calmly, with nothing to sell you in
                the background.
              </p>
            </RevealItem>
            <Reveal>
              <blockquote className="max-w-md font-display text-xl italic leading-snug text-ink md:text-2xl">
                <span className="mr-1 text-gold not-italic" aria-hidden>
                  &ldquo;
                </span>
                Finance doesn&apos;t need more noise. It needs a clearer signal.
              </blockquote>
            </Reveal>
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
