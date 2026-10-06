import Link from "next/link";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "How it works", href: "#how" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Disclosures", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr] md:gap-16">
          <div>
            <p className="font-display text-2xl text-cream">Fermor</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mint/90">
              A calmer way to grow your money. Made in Bengaluru, India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-xs uppercase tracking-widest text-mint/80">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/90 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-cream/10 pt-8 font-mono text-xs leading-relaxed text-mint/70">
          Fermor is a financial technology platform and is not a registered
          investment adviser. Investments are subject to market risks. Please
          read all related documents carefully.
        </p>
        <p className="mt-4 text-sm text-mint/80">
          This work is a demo from{" "}
          <a
            href="https://github.com/lhcee3"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cream underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Sai Aneesh
          </a>
          .
        </p>
        <p className="mt-3 font-mono text-xs text-mint/60">
          © 2025 Fermor.
        </p>
      </Container>
    </footer>
  );
}
