"use client";

import { useState } from "react";
import { STONES } from "@/lib/site";
import { StoneTexture } from "./StoneTexture";

export function StoneExplorer() {
  const [i, setI] = useState(0);
  const s = STONES[i];

  function ask() {
    window.dispatchEvent(new CustomEvent("e2:stone", { detail: s.name }));
    document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="explorer">
      <div className="swatches" role="tablist" aria-label="Tipos de pedra">
        {STONES.map((st, k) => (
          <button key={st.id} role="tab" aria-selected={k === i} className={`swatch${k === i ? " on" : ""}`} onClick={() => setI(k)}>
            <StoneTexture kind={st.id} className="swatch-tex" />
            <span>{st.name}</span>
          </button>
        ))}
      </div>
      <div className="preview" key={s.id}>
        <StoneTexture kind={s.id} className="preview-tex" />
        <div className="preview-info">
          <span className="eyebrow">{s.tagline}</span>
          <h3>{s.name}</h3>
          <p>{s.text}</p>
          <ul className="chips">{s.best.map((b) => <li key={b}>{b}</li>)}</ul>
          <button className="btn btn-dark" onClick={ask}>Orçar em {s.name.toLowerCase()}</button>
          <small className="note">Texturas ilustrativas. A aparência real varia de chapa para chapa.</small>
        </div>
      </div>
    </div>
  );
}
