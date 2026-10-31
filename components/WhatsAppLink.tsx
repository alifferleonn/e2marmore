"use client";

import type { ReactNode } from "react";
import { trackLead } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";

type Props = {
  source: string;
  message?: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

export function WhatsAppLink({ source, message, className, children, ...rest }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackLead(source)}
      {...rest}
    >
      {children}
    </a>
  );
}
