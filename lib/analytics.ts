type DL = { push: (e: Record<string, unknown>) => void };

/** Dispara evento no dataLayer (GTM) se existir. Usado para medir cliques no WhatsApp por origem. */
export function trackLead(source: string) {
  if (typeof window === "undefined") return;
  const dl = (window as unknown as { dataLayer?: DL }).dataLayer;
  dl?.push({ event: "whatsapp_click", source });
}
