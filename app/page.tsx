import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { WhyFermor } from "@/components/WhyFermor";
import { Pillars } from "@/components/Pillars";
import { HowItWorks } from "@/components/HowItWorks";
import { Security } from "@/components/Security";
import { Voices } from "@/components/Voices";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProofStrip />
        <WhyFermor />
        <Pillars />
        <HowItWorks />
        <Security />
        <Voices />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
