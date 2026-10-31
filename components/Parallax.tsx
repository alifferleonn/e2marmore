"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Move o conteúdo levemente conforme a rolagem (sutil, desligado com reduced-motion). */
export function Parallax({ children, speed = 0.08, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      el.style.transform = `translate3d(0,${Math.min(window.scrollY, 900) * speed * -1}px,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [speed]);
  return <div ref={ref} className={className}>{children}</div>;
}
