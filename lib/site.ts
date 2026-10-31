export const SITE = {
  name: "E2 Mármores",
  tagline: "A Essência da Elegância em Rocha",
  description:
    "E2 Mármores, marmoraria em Sorocaba-SP. Bancadas, lavatórios, escadas e revestimentos em mármore, granito e ônix, da escolha da pedra ao acabamento final.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "(15) 99761-5707",
  phoneE164: "+5515997615707",
  whatsappNumber: "5515997615707",
  address: {
    street: "R. Maria Moron Malzoni, 53 - Parque das Laranjeiras",
    city: "Sorocaba",
    region: "SP",
    zip: "18077-396",
  },
} as const;

export const MAPS_EMBED =
  "https://www.google.com/maps?q=R.+Maria+Moron+Malzoni,+53,+Sorocaba+-+SP,+18077-396&output=embed";

export function whatsappLink(message = "Olá! Vim pelo site e gostaria de um orçamento.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const PROJECTS = [
  { src: "/img/onix-lavatorio.png", w: 827, h: 835, title: "Lavatório em Ônix Iluminado", text: "Translucidez e veios dourados em uma peça única.", ask: "um lavatório em ônix iluminado" },
  { src: "/img/escada-granito.png", w: 837, h: 837, title: "Escada em Granito Preto", text: "Degraus e rodapés com brilho e durabilidade.", ask: "uma escada em granito" },
  { src: "/img/bancada-banheiro.png", w: 508, h: 567, title: "Bancada com Cubas Duplas", text: "Acabamento limpo para banheiros modernos.", ask: "uma bancada de banheiro" },
] as const;

export const SERVICES = ["Cozinhas", "Banheiros e lavabos", "Escadas", "Soleiras e peitoris", "Revestimentos"] as const;

export const REVIEWS = [
  { name: "Mateus Almeida", when: "3 meses atrás", color: "#5f6368", text: "Ótimo atendimento, serviço de qualidade e entregou no prazo combinado, nada a reclamar." },
  { name: "João Gabriel Silva", when: "2 meses atrás", color: "#3c7a4a", text: "Excelente profissional, muitas variedades de produtos, recomendo de olhos fechados!" },
  { name: "GANG SOMBRA", when: "3 meses atrás", color: "#00897b", text: "Muito bom." },
  { name: "Renilda Maria", when: "um mês atrás", color: "#ec407a", text: "Fez toda minha cozinha e meu banheiro, não tenho nada a reclamar e indico de olhos fechados, ótimo atendimento desde o início até a instalação!!" },
  { name: "Heiky Edilson", when: "um mês atrás", color: "#5b3f8c", text: "Muito atenciosos e pontual, serviço dispensa comentários com certeza contrataria novamente." },
  { name: "Lucas Ferreira", when: "2 meses atrás", color: "#7e57c2", text: "Gostei muito do atendimento, muito atencioso e pontual! Recomendo" },
] as const;

export const STEPS = [
  { n: "1", title: "Conversa e orçamento", text: "Você conta o que precisa pelo WhatsApp e recebe o orçamento." },
  { n: "2", title: "Escolha da pedra", text: "Mármore, granito, ônix ou quartzo: a pedra certa para o seu ambiente." },
  { n: "3", title: "Corte e acabamento", text: "Cada peça é cortada e acabada sob medida para o seu projeto." },
  { n: "4", title: "Entrega e instalação", text: "Instalação no prazo combinado, com o acabamento final conferido." },
] as const;

export const FAQ = [
  { q: "Como peço um orçamento?", a: "Pelo WhatsApp (15) 99761-5707 ou pelo formulário do site. Conte o ambiente, o tipo de peça e, se tiver, medidas ou fotos." },
  { q: "Vocês atendem Sorocaba e região?", a: "Estamos em Sorocaba-SP, no Parque das Laranjeiras. Para outras cidades, chame no WhatsApp e confirmamos a região de atendimento." },
  { q: "Quais tipos de pedra e peças vocês trabalham?", a: "Trabalhamos com mármore, granito, ônix, quartzo e outras pedras, em cozinhas, banheiros e lavabos, escadas, soleiras, peitoris e revestimentos." },
  { q: "Posso mandar foto ou projeto para orçar?", a: "Pode. Envie fotos, medidas ou a planta do ambiente pelo WhatsApp que montamos o orçamento a partir delas." },
] as const;

export const STONES = [
  { id: "marmore", name: "Mármore", tagline: "Veios clássicos, brilho nobre", text: "Atemporal e sofisticado. Ótimo para bancadas, lavatórios, pisos e revestimentos que pedem presença.", best: ["Banheiros e lavabos", "Revestimentos", "Bancadas"] },
  { id: "granito", name: "Granito", tagline: "Resistência para o dia a dia", text: "Muito durável e com ótimo custo-benefício. Uma escolha clássica para cozinhas, escadas e áreas de uso intenso.", best: ["Cozinhas", "Escadas", "Soleiras e peitoris"] },
  { id: "onix", name: "Ônix", tagline: "Translúcido e único", text: "Pedra de efeito dramático. Com iluminação por trás, cada peça vira uma obra de arte exclusiva.", best: ["Lavatórios", "Painéis iluminados", "Detalhes de destaque"] },
  { id: "quartzo", name: "Quartzo", tagline: "Acabamento limpo e uniforme", text: "Visual contemporâneo e uniforme, perfeito para bancadas modernas com manutenção simples.", best: ["Cozinhas", "Banheiros", "Bancadas"] },
] as const;

export const AMBIENTES = ["Cozinha", "Banheiro / Lavabo", "Escada", "Soleira / Peitoril", "Revestimento", "Outro"] as const;
