"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { WhatsAppLink } from "./WhatsAppLink";

const LINKS = [
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Pedras", "#pedras"],
  ["Processo", "#processo"],
  ["Avaliações", "#avaliacoes"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <span className="progress" ref={bar} aria-hidden="true" />
      <div className="bar">
        <a href="#topo" className="logo" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav aria-label="Principal" className="nav">
          {LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="bar-cta">
          <a href="#orcamento" className="btn btn-gold btn-sm">Orçamento</a>
          <button className="burger" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
      <div className="mobile-menu" aria-hidden={!open}>
        {LINKS.map(([label, href], i) => (
          <a key={href} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: `${i * 50}ms` }}>{label}</a>
        ))}
        <WhatsAppLink source="menu" className="btn btn-wa">Chamar no WhatsApp</WhatsAppLink>
      </div>
    </header>
  );
}
