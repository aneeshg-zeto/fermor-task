import { Container } from "@/components/ui/Container";
import { CountUpStat } from "@/components/CountUpStat";

export function ProofStrip() {
  return (
    <section className="border-b border-line bg-cream" aria-label="Proof">
      <Container className="py-12 md:py-14">
        {/* placeholder metrics: swap for live numbers before launch */}
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          <CountUpStat value="4,000+" label="People on the waitlist" />
          <CountUpStat value="₹300 Cr+" label="Wealth linked in early access" />
          <CountUpStat value="4.9/5" label="Average early feedback score" />
        </div>
      </Container>
    </section>
  );
}
