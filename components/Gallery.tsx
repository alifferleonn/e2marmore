"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PROJECTS } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppLink";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const n = PROJECTS.length;
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, go]);

  const cur = open === null ? null : PROJECTS[open];

  return (
    <>
      <div className="bento">
        {PROJECTS.map((p, i) => (
          <button key={p.title} className={`tile tile-${i}`} onClick={() => setOpen(i)} aria-label={`Ampliar: ${p.title}`}>
            <Image src={p.src} alt={p.title} width={p.w} height={p.h} sizes="(max-width:800px) 100vw, 50vw" />
            <span className="tile-cap"><strong>{p.title}</strong><small>{p.text}</small></span>
            <span className="tile-zoom" aria-hidden="true">+</span>
          </button>
        ))}
      </div>

      {cur && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={cur.title} onClick={() => setOpen(null)}>
          <button className="lb-close" aria-label="Fechar" onClick={() => setOpen(null)}>×</button>
          <button className="lb-nav prev" aria-label="Anterior" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Image src={cur.src} alt={cur.title} width={cur.w} height={cur.h} sizes="90vw" priority />
            <figcaption>
              <div><strong>{cur.title}</strong><span>{cur.text}</span></div>
              <WhatsAppLink source={`lightbox-${cur.title}`} message={`Olá! Vi no site ${cur.ask} e gostaria de um orçamento parecido.`} className="btn btn-gold btn-sm">Quero um assim</WhatsAppLink>
            </figcaption>
          </figure>
          <button className="lb-nav next" aria-label="Próximo" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
        </div>
      )}
    </>
  );
}
