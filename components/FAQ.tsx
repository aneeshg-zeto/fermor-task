"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "What exactly is Fermor?",
    a: "A platform that brings all your money (investments, savings, EPF, goals) into one clear view, and gives you a plan to grow it. Built for working professionals in India who want clarity, not sales pitches.",
  },
  {
    q: "Is it safe to connect my accounts?",
    a: "Connections are read-only and encrypted. Fermor can never move your money, and never sells your data.",
  },
  {
    q: "Is Fermor an investment app or an advisor?",
    a: "It's a platform for understanding and planning. When you act, Fermor surfaces curated, low-conflict options, and is transparent about how it makes money.",
  },
  {
    q: "How much does it cost?",
    a: "Free during early access. Paid tiers will be simple and transparent, with no hidden commissions.",
  },
  {
    q: "When can I start?",
    a: "We're onboarding in batches. Join the early-access list and your invite will land when the next batch opens.",
  },
];

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-anchor border-t border-line py-16 md:py-28"
      aria-labelledby="faq-heading"
    >
      <Container className="max-w-3xl">
        <Reveal>
          <h2
            id="faq-heading"
            className="font-display text-[2rem] leading-tight text-ink md:text-[2.75rem]"
          >
            FAQ
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={item.q}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink md:text-lg"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? null : index))
                    }
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 motion-reduce:transition-none ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="accordion-panel"
                  data-open={open}
                >
                  <div className="accordion-panel-inner">
                    <p className="pb-5 text-sm leading-relaxed text-muted md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
