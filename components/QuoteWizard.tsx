"use client";

import { useEffect, useState, type FormEvent } from "react";
import { trackLead } from "@/lib/analytics";
import { AMBIENTES, STONES, whatsappLink } from "@/lib/site";

const PEDRAS = [...STONES.map((s) => s.name), "Ainda não sei"];

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [amb, setAmb] = useState("");
  const [pedra, setPedra] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const on = (e: Event) => { setPedra((e as CustomEvent<string>).detail); };
    window.addEventListener("e2:stone", on);
    return () => window.removeEventListener("e2:stone", on);
  }, []);

  function send(e: FormEvent) {
    e.preventDefault();
    const msg =
      `Olá! Me chamo ${name.trim()} e vim pelo site.\n` +
      `Gostaria de um orçamento para: ${amb || "meu projeto"}.\n` +
      `Pedra: ${pedra || "ainda não sei"}.` +
      (details.trim() ? `\nDetalhes: ${details.trim()}` : "");
    trackLead("wizard");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  const pick = (set: (v: string) => void, v: string) => { set(v); setTimeout(() => setStep((s) => s + 1), 180); };

  return (
    <form className="wizard" onSubmit={send}>
      <div className="wiz-progress" aria-hidden="true"><span style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>
      <p className="wiz-step">Passo {step + 1} de 3</p>

      {step === 0 && (
        <fieldset key="s0">
          <legend>Para qual ambiente?</legend>
          <div className="options">
            {AMBIENTES.map((a) => <button type="button" key={a} className={`opt${amb === a ? " on" : ""}`} onClick={() => pick(setAmb, a)}>{a}</button>)}
          </div>
        </fieldset>
      )}
      {step === 1 && (
        <fieldset key="s1">
          <legend>Qual pedra te interessa?</legend>
          <div className="options">
            {PEDRAS.map((p) => <button type="button" key={p} className={`opt${pedra === p ? " on" : ""}`} onClick={() => pick(setPedra, p)}>{p}</button>)}
          </div>
        </fieldset>
      )}
      {step === 2 && (
        <fieldset key="s2">
          <legend>Quase lá! Como podemos te chamar?</legend>
          <label>Seu nome<input required minLength={2} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
          <label>Detalhes (opcional)<textarea rows={3} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Medidas, prazo desejado, observações…" /></label>
          <button className="btn btn-wa" type="submit">Enviar pelo WhatsApp</button>
        </fieldset>
      )}

      <div className="wiz-foot">
        {step > 0 && <button type="button" className="link" onClick={() => setStep(step - 1)}>‹ Voltar</button>}
        {step < 2 && <button type="button" className="link" onClick={() => setStep(step + 1)}>Pular ›</button>}
      </div>
    </form>
  );
}
