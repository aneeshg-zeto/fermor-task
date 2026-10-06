"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-line bg-cream/95 shadow-[0_1px_0_rgba(16,32,26,0.06)] backdrop-blur-sm"
          : "border-line/80 bg-cream"
      }`}
    >
      <div className="mx-auto flex h-[var(--nav-height)] max-w-[1200px]">
        <Link
          href="/"
          className="flex shrink-0 items-center bg-forest px-6 text-cream md:px-10"
        >
          <span className="font-display text-xl tracking-[-0.02em] md:text-2xl">
            Fermor
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-6 px-4 md:justify-between md:px-8">
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted underline-offset-[6px] transition-colors hover:text-ink hover:underline hover:decoration-forest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line bg-cream text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id={menuId}
          className="border-t border-line bg-cream md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav
            className="mx-auto flex max-w-[1200px] flex-col px-4 py-3"
            aria-label="Mobile primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line/60 py-3.5 text-base font-medium text-ink last:border-b-0"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
