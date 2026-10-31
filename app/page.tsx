import Image from "next/image";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Marquee } from "@/components/Marquee";
import { Parallax } from "@/components/Parallax";
import { QuoteWizard } from "@/components/QuoteWizard";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { StoneExplorer } from "@/components/StoneExplorer";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { FAQ, MAPS_EMBED, SITE, STEPS } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneE164,
    image: `${SITE.url}/img/onix-lavatorio.png`,
    logo: `${SITE.url}/img/logo.png`,
    address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.region, postalCode: SITE.address.zip, addressCountry: "BR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

const PILLARS = [
  ["Matéria-prima", "Selecionamos cada chapa pensando no ambiente, no uso e no resultado que você imagina."],
  ["Projeto sob medida", "Cada peça é desenhada e cortada para o seu espaço, sem improviso."],
  ["Acabamento final", "Polimento, detalhes e instalação conferidos até o último milímetro."],
] as const;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="topo">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <span className="eyebrow">Marmoraria · Sorocaba-SP</span>
              <h1>A essência da <em>elegância</em> em rocha.</h1>
              <p className="lead">Na E2 Mármores esculpimos a sofisticação. Cada projeto é a materialização de um sonho, da escolha da pedra ao acabamento final.</p>
              <div className="hero-actions">
                <WhatsAppLink source="hero" className="btn btn-gold">Solicitar orçamento</WhatsAppLink>
                <a href="#projetos" className="btn btn-ghost">Ver projetos</a>
              </div>
              <div className="trust">
                <span className="stars" aria-hidden="true">★★★★★</span>
                <span><b>Avaliações 5 estrelas</b> de clientes no Google</span>
              </div>
            </Reveal>
            <Reveal className="hero-art" delay={150}>
              <Parallax speed={0.05}>
                <div className="arch-ring" aria-hidden="true" />
                <div className="arch">
                  <Image src="/img/onix-lavatorio.png" alt="Lavatório esculpido em ônix com iluminação interna" width={827} height={835} priority sizes="(max-width:1024px) 80vw, 460px" />
                </div>
                <div className="badge"><strong>Ônix iluminado</strong><span>Peça exclusiva sob medida</span></div>
              </Parallax>
            </Reveal>
          </div>
          <span className="scroll-hint" aria-hidden="true" />
        </section>

        <Marquee />

        {/* SOBRE */}
        <section id="sobre" className="section light">
          <div className="container about">
            <Reveal className="head">
              <span className="eyebrow">Sobre a E2</span>
              <h2>Mais que <em>pedras</em>.</h2>
              <p className="big">Na E2 Mármores, não apenas trabalhamos com pedras; esculpimos a sofisticação. Cada projeto é a materialização de um sonho — e dedicamos excelência desde a escolha da matéria-prima até o acabamento final.</p>
            </Reveal>
            <div className="pillars">
              {PILLARS.map(([t, d], i) => (
                <Reveal key={t} delay={i * 100} className="pillar">
                  <span className="n">0{i + 1}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="section">
          <div className="container">
            <Reveal className="head">
              <span className="eyebrow">Projetos</span>
              <h2>Obras que <em>falam</em> por nós.</h2>
              <p className="lead">Toque em uma foto para ampliar e peça um projeto parecido.</p>
            </Reveal>
            <Reveal><Gallery /></Reveal>
          </div>
        </section>

        {/* PEDRAS */}
        <section id="pedras" className="section light">
          <div className="container">
            <Reveal className="head">
              <span className="eyebrow">Escolha a sua pedra</span>
              <h2>Cada pedra, uma <em>personalidade</em>.</h2>
              <p className="lead">Explore os materiais e descubra qual combina com o seu projeto.</p>
            </Reveal>
            <Reveal><StoneExplorer /></Reveal>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="section dark2">
          <div className="container">
            <Reveal className="head">
              <span className="eyebrow">Como funciona</span>
              <h2>Do primeiro contato à <em>instalação</em>.</h2>
            </Reveal>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 120}>
                  <span className="n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="section light">
          <div className="container">
            <Reveal className="rv-top">
              <div className="head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Avaliações</span>
                <h2>Quem contratou, <em>recomenda</em>.</h2>
              </div>
              <div className="score">
                <b>5,0</b>
                <div><span className="stars" aria-label="5 estrelas">★★★★★</span><small>Avaliações de clientes no Google</small></div>
              </div>
            </Reveal>
            <Reveal><Reviews /></Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <Reveal className="head center">
              <span className="eyebrow">Dúvidas</span>
              <h2>Perguntas <em>frequentes</em>.</h2>
            </Reveal>
            <Reveal className="faq">
              {FAQ.map((f) => (
                <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section id="orcamento" className="section light" style={{ paddingTop: 0 }}>
          <div className="container cta-wrap" style={{ paddingTop: "clamp(72px,10vw,140px)" }}>
            <Reveal className="cta-info">
              <span className="eyebrow">Orçamento</span>
              <h2>Vamos começar o seu <em>projeto</em>?</h2>
              <p className="lead">Responda três perguntas rápidas e continue a conversa direto no WhatsApp.</p>
              <ul className="contact-list" id="contato">
                <li><b>WhatsApp</b><a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a></li>
                <li><b>Endereço</b>{SITE.address.street}<br />{SITE.address.city} – {SITE.address.region}, {SITE.address.zip}</li>
              </ul>
              <iframe className="map" title="Mapa da E2 Mármores" loading="lazy" src={MAPS_EMBED} />
            </Reveal>
            <Reveal delay={150}><QuoteWizard /></Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot">
          <div>
            <a href="#topo" className="logo"><Logo size={56} /></a>
            <p>{SITE.tagline}. Marmoraria em Sorocaba-SP.</p>
          </div>
          <div><h4>Navegue</h4><a href="#projetos">Projetos</a><a href="#pedras">Pedras</a><a href="#processo">Processo</a><a href="#avaliacoes">Avaliações</a></div>
          <div><h4>Contato</h4><a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a><a href="#orcamento">Pedir orçamento</a></div>
        </div>
        <p className="legal">© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
      </footer>
      <FloatingWhatsApp />
    </>
  );
}
