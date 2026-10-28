"use client";

import { useEffect } from "react";

// Opens `.door` and `.rise` elements as they scroll in, and drives `[data-depth]` parallax.
export default function SiteMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(".door, .rise");

    if (reduced) {
      targets.forEach((el) => el.classList.add("is-open"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-open");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    targets.forEach((el) => io.observe(el));

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        layers.forEach((el) => {
          const rect = el.parentElement!.getBoundingClientRect();
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.transform = `translate3d(0, ${(progress * Number(el.dataset.depth) * -100).toFixed(1)}px, 0)`;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
