"use client";

import { useRef } from "react";
import { REVIEWS } from "@/lib/site";

export function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * 360, behavior: "smooth" });
  return (
    <div className="reviews-wrap">
      <div className="reviews" ref={track} tabIndex={0} aria-label="Avaliações de clientes">
        {REVIEWS.map((r) => (
          <figure className="review" key={r.name}>
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <span className="avatar" style={{ background: r.color }}>{r.name[0]}</span>
              <span><strong>{r.name}</strong><small><span className="stars" aria-label="5 estrelas">★★★★★</span> · {r.when}</small></span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="rv-nav">
        <button aria-label="Anterior" onClick={() => scroll(-1)}>‹</button>
        <button aria-label="Próximo" onClick={() => scroll(1)}>›</button>
      </div>
    </div>
  );
}
