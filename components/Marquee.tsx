import { SERVICES } from "@/lib/site";

export function Marquee() {
  const items = [...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((s, i) => <span key={i}>{s}<i>✦</i></span>)}
      </div>
    </div>
  );
}
