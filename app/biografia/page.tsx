"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const phases = [
  {
    id: "origens",
    title: "Origens (1935–1955)",
    content: `António Manuel Rodrigues nasceu a 14 de março de 1935, numa pequena aldeia do interior beirão, onde o silêncio era apenas quebrado pelo sino da igreja e pelas conversas na praça. Filho de um professor primário e de uma costureira, cresceu rodeado de livros e de histórias orais que moldaram a sua imaginação.

Desde cedo mostrou fascínio pela palavra escrita. Aos doze anos, já redigia pequenos contos que entregava ao pai para revisão. Na escola secundária em Viseu, destacou-se nas letras, sendo premiado num concurso literário regional com uma crónica sobre a vida rural portuguesa.

A infância modesta ensinou-lhe o valor da observação. Anos mais tarde, diria: «Aprendi a ouvir antes de aprender a escrever. É a única ordem que faz sentido.»`,
  },
  {
    id: "formacao",
    title: "Formação e Primeiros Passos (1955–1965)",
    content: `Em 1955, muda-se para Lisboa para frequentar a Faculdade de Letras. A capital abre-lhe os olhos para um mundo em ebulição. Frequenta cafés literários, debate política em tertúlias semiclandestinas e começa a colaborar com jornais estudantis.

A sua primeira reportagem profissional é publicada no Diário de Lisboa em 1958 — um retrato dos pescadores de Peniche que impressiona pela maturidade descritiva e pela empatia com os seus protagonistas. O editor-chefe nota-o e convida-o para a redação.

Nos anos seguintes, aprende o ofício na trincheira: cobre tribunais, visita bairros degradados, entrevista políticos e intelectuais. A sua escrita ganha uma voz própria — direta, límpida, sem adornos desnecessários, mas com uma humanidade que a distingue.`,
  },
  {
    id: "consagracao",
    title: "Consagração (1965–1985)",
    content: `A década de 1960 marca a afirmação de António Rodrigues como um dos grandes repórteres da imprensa portuguesa. As suas reportagens sobre a guerra colonial, escritas com rigor e sem concessões ao poder, custam-lhe problemas com a censura e duas detenções breves pela PIDE.

Com o 25 de Abril, a sua caneta ganha finalmente liberdade plena. Torna-se correspondente internacional, cobrindo conflitos em África, América Latina e Médio Oriente. As suas crónicas de guerra são lidas com avidez — não pela descrição da violência, mas pela capacidade de encontrar humanidade nos cenários mais desoladores.

Em 1978, publica o seu primeiro livro, «Cartas do Silêncio», uma coletânea de reportagens que se torna num sucesso de crítica e público. Seguem-se mais seis obras ao longo das duas décadas seguintes, consolidando a sua reputação como escritor-jornalista.`,
  },
  {
    id: "maturidade",
    title: "Maturidade e Legado (1985–2010)",
    content: `Nos anos 80 e 90, António Rodrigues assume o papel de mestre. Dirige secções de grandes jornais, forma jovens repórteres e leciona em universidades. A sua exigência é lendária — mas também a generosidade com que partilha o saber.

Publica ensaios sobre o papel do jornalismo na democracia, alertando para os perigos da superficialidade e da pressa. «O jornalismo está doente», escreve em 1997, «não por falta de meios, mas por excesso de ruído.»

Recebe o Prémio Nacional de Jornalismo em 1992 e o Grande Prémio de Literatura em 2003 pelo conjunto da obra. Em 2005, publica as suas memórias, «Tinta e Tempo», um olhar sereno e por vezes irónico sobre cinco décadas de vida e escrita.

Retira-se progressivamente da vida pública, mantendo apenas uma crónica semanal onde comenta o mundo com a lucidez e a elegância que sempre lhe foram próprias.`,
  },
];

const Biography = () => {
  const [activeSection, setActiveSection] = useState("origens");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    phases.forEach((phase) => {
      const el = document.getElementById(phase.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container min-h-screen bg-background relative max-w-5xl mx-auto px-6 py-16">

      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      <Navigation />

      <ScrollReveal>
        <h1 className="font-typewriter text-3xl sm:text-4xl mt-8 mb-2 ink-stamp">Biografia</h1>
        <div className="w-12 h-px bg-sepia mb-12" />
      </ScrollReveal>

      <main className="flex gap-12">
        {/* Sidebar nav */}
        <aside className="hidden lg:block w-48 shrink-0">
          <nav className="sticky top-24 space-y-1">
            {phases.map((phase) => (
              <a
                key={phase.id}
                href={`#${phase.id}`}
                className={`block font-typewriter text-xs py-2 px-3 transition-all duration-300 border-l-2 ${
                  activeSection === phase.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(phase.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {phase.title.split("(")[0].trim()}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <section className="flex-1 max-w-2xl">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.id} delay={i * 0.05}>
              <section id={phase.id} className="mb-16 scroll-mt-8">
                <h2 className="font-typewriter text-xl mb-1">{phase.title}</h2>
                <div className="w-8 h-px bg-border mb-6" />
                {phase.content.split("\n\n").map((para, j) => (
                  <motion.p
                    key={j}
                    className="font-body text-sm leading-[1.85] text-foreground mb-4 max-w-[90ch]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: j * 0.08 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </section>
            </ScrollReveal>
          ))}
        </section>
      </main>

      {/* End Section */}
        <section className="py-24 md:py-32 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-border" />
              <span className="text-ink-faded text-xs tracking-[0.3em]">***</span>
              <div className="w-12 h-[1px] bg-border" />
            </div>
            
            <blockquote className="font-serif text-xl md:text-2xl text-ink italic">
              {'"Escrevo para não esquecer. Escrevo para que outros lembrem."'}
            </blockquote>
          </motion.div>
        </section>
    </div>
  );
};

export default Biography;
