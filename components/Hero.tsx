import { Reveal } from "@/components/ui/Reveal";
import { HeroScene } from "@/components/HeroScene";

export function Hero() {
  return (
    <section
      className="relative box-border flex min-h-[100dvh] w-full max-w-[100vw] flex-col overflow-x-clip bg-cream pt-[var(--nav-offset)]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 dot-grid opacity-[0.28]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[45dvh] bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,rgba(220,234,226,0.5),transparent)]"
        aria-hidden
      />

      <div className="relative z-[1] flex flex-1 flex-col items-center justify-center gap-6 px-4 py-6 sm:gap-8 sm:py-8 md:px-6">
        <Reveal className="flex w-full max-w-2xl shrink-0 flex-col items-center text-center">
          <h1
            id="hero-heading"
            className="font-display text-balance text-[2.5rem] font-normal leading-[1.08] tracking-[-0.02em] text-ink md:text-[3.5rem] lg:text-[4rem]"
          >
            Your whole financial life,{" "}
            <span className="italic">one calm view.</span>
          </h1>
          <p className="font-sans mt-4 max-w-lg text-pretty text-[1.0625rem] font-normal leading-relaxed text-muted md:mt-5 md:text-xl">
            Net worth, goals, and cash flow for people building wealth in India.
          </p>
        </Reveal>

        <Reveal
          className="w-full max-w-[min(100%,980px)] shrink-0 overflow-x-clip pb-2"
          delay={0.05}
        >
          <HeroScene />
        </Reveal>
      </div>
    </section>
  );
}
