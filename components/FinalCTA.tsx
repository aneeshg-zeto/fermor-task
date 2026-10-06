"use client";

import { Check } from "lucide-react";
import { FormEvent, useCallback, useState, useSyncExternalStore } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STORAGE_KEY = "fermor-waitlist";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function readWaitlistStored(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function subscribeWaitlist(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const storedSubmitted = useSyncExternalStore(
    subscribeWaitlist,
    readWaitlistStored,
    () => false,
  );
  const [sessionSubmitted, setSessionSubmitted] = useState(false);
  const submitted = storedSubmitted || sessionSubmitted;

  const markSubmitted = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* still show success UX */
    }
    setSessionSubmitted(true);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    markSubmitted();
  }

  return (
    <section
      id="cta"
      className="section-anchor py-16 md:py-28"
      aria-labelledby="cta-heading"
    >
      <Container className="max-w-2xl text-center">
        <Reveal>
          <h2
            id="cta-heading"
            className="text-balance font-display text-[2rem] text-ink md:text-[2.75rem]"
          >
            Start seeing your money clearly.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Join the early-access list. Your invite lands when we open the next
            batch.
          </p>

          {submitted ? (
            <div
              className="mt-10 inline-flex items-center gap-3 rounded-[var(--radius-card)] border border-line bg-mint/50 px-6 py-4"
              role="status"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
                <Check className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-left text-sm font-medium text-ink md:text-base">
                You&apos;re on the list. Watch your inbox.
              </p>
            </div>
          ) : (
            <form
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-center"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="w-full flex-1 text-left sm:max-w-md">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-full border border-line bg-white px-5 text-ink placeholder:text-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "email-error" : undefined}
                />
                {error ? (
                  <p id="email-error" className="mt-2 text-sm font-medium text-forest">
                    {error}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-forest px-8 text-sm font-medium text-cream transition-[background-color,transform,box-shadow] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-pine motion-safe:hover:shadow-md"
              >
                Get early access
              </button>
            </form>
          )}

          <p className="mt-6 text-xs text-muted">
            No spam. Unsubscribe anytime.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
