"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.length > 1) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ block: "start", behavior: "auto" });
        });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
