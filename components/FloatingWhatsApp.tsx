"use client";

import { useEffect, useState } from "react";
import { WhatsAppLink } from "./WhatsAppLink";

export function FloatingWhatsApp() {
  const [tip, setTip] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTip(true), 4000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="wa">
      <WhatsAppLink source="floating" className="wa-btn" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.19 1.6 6.02L4 29l8.14-1.56a12 12 0 0 0 3.9.65C22.68 28.09 28 22.7 28 16.06 28 9.4 22.68 3 16.04 3zm0 22.04c-1.2 0-2.38-.2-3.5-.6l-.5-.18-4.83.93.96-4.7-.2-.5a9.9 9.9 0 0 1-1.5-5.3c0-5.5 4.5-10 10.05-10 5.5 0 9.96 4.5 9.96 10.02 0 5.5-4.46 10.33-9.96 10.33zm5.5-7.5c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.4-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.25-.58-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.5.7.3 1.27.5 1.7.62.72.23 1.37.2 1.88.12.58-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35z" />
        </svg>
      </WhatsAppLink>
      <div className={`wa-tip${tip ? " show" : ""}`} role="status">
        Fale conosco! Orçamento sem compromisso
        <button aria-label="Fechar" onClick={() => setTip(false)}>×</button>
      </div>
    </div>
  );
}
