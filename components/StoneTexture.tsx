import { useId } from "react";

export type StoneKind = "marmore" | "granito" | "onix" | "quartzo";

// Texturas procedurais (SVG feTurbulence): imagens de pedra geradas por código, sem arquivos externos.
// "ridge": o ruído vira linhas de contorno (veios). "speck": o ruído vira grãos esparsos.
type Cfg = { bg: string; fg: [number, number, number]; freq: string; oct: number; seed: number } & (
  | { mode: "ridge"; table: string }
  | { mode: "speck"; alpha: string }
);

const CFG: Record<StoneKind, Cfg> = {
  marmore: { bg: "#efece7", fg: [0.42, 0.42, 0.44], freq: "0.0055 0.0095", oct: 5, seed: 14, mode: "ridge", table: "0 0 0 0 .85 0 0 0 0" },
  onix: { bg: "#f3e2b3", fg: [0.66, 0.38, 0.1], freq: "0.0045 0.013", oct: 3, seed: 23, mode: "ridge", table: "0 .9 0 .75 0 .9 0 .6 0 .9 0 .7 0" },
  granito: { bg: "#0f0f11", fg: [0.5, 0.52, 0.53], freq: "1.1", oct: 2, seed: 4, mode: "speck", alpha: "16 0 0 0 -10.6" },
  quartzo: { bg: "#f3f2f0", fg: [0.5, 0.5, 0.52], freq: "0.9", oct: 2, seed: 9, mode: "speck", alpha: "4 0 0 0 -2.3" },
};

export function StoneTexture({ kind, className }: { kind: StoneKind; className?: string }) {
  const id = useId().replace(/:/g, "");
  const c = CFG[kind];
  const [r, g, b] = c.fg;
  const rgb = `0 0 0 0 ${r}  0 0 0 0 ${g}  0 0 0 0 ${b}`;
  return (
    <svg className={className} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id={id} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency={c.freq} numOctaves={c.oct} seed={c.seed} />
          {c.mode === "ridge" ? (
            <>
              <feColorMatrix type="matrix" values={`${rgb}  1 0 0 0 0`} />
              <feComponentTransfer><feFuncA type="table" tableValues={c.table} /></feComponentTransfer>
            </>
          ) : (
            <feColorMatrix type="matrix" values={`${rgb}  ${c.alpha}`} />
          )}
        </filter>
      </defs>
      <rect width="400" height="400" fill={c.bg} />
      <rect width="400" height="400" filter={`url(#${id})`} />
    </svg>
  );
}
