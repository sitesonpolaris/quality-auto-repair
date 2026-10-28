"use client";

import { useEffect, useRef, useState } from "react";

// The <video> is raw HTML so `muted` is server-rendered (React drops it, iOS needs it).
const videoHtml = `<video class="h-full w-full object-cover object-center" autoplay muted loop playsinline preload="metadata" poster="/video/hero-poster.jpg" aria-hidden="true">
  <source src="/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 860px)">
  <source src="/video/hero-1080.mp4" type="video/mp4">
</video>`;

export default function HeroVideo() {
  const wrap = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = wrap.current?.querySelector("video");
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
      video.pause();
      video.removeAttribute("autoplay");
      setPlaying(false);
    }

    const io = new IntersectionObserver(([entry]) => {
      if (userPaused.current) return;
      if (entry.isIntersecting) video.play().catch(() => setPlaying(false));
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const video = wrap.current?.querySelector("video");
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      userPaused.current = true;
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div ref={wrap} className="absolute inset-0" dangerouslySetInnerHTML={{ __html: videoHtml }} />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute right-4 bottom-8 z-20 grid size-11 place-items-center rounded-full border border-paper/40 bg-ink/50 text-paper backdrop-blur-sm transition hover:bg-ink/75 sm:right-6"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
          </svg>
        )}
      </button>
    </>
  );
}
