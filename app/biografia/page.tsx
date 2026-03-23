'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const bioSections = [
  {
    id: 'infancia',
    title: 'Infância e Juventude',
    years: '1935 — 1955',
    content: `Nascido em Lisboa, numa manhã fria de Janeiro de 1935, cresceu nas ruas estreitas do Bairro Alto, entre o cheiro a café torrado e o som das conversas dos vizinhos. O seu pai, tipógrafo de profissão, ensinou-lhe desde cedo o respeito pela palavra impressa.

Os primeiros anos foram marcados pela descoberta dos livros na pequena biblioteca municipal, onde passava tardes inteiras perdido entre páginas amarelecidas. Foi ali que nasceu a paixão pela escrita — uma chama que nunca se apagaria.

Na escola, destacava-se pela capacidade de observação e pelo talento natural para contar histórias. Os professores reconheciam nele algo especial: a capacidade de transformar o quotidiano em narrativa.`
  },
  {
    id: 'carreira',
    title: 'O Início da Carreira',
    years: '1958 — 1972',
    content: `Em 1958, aos 23 anos, entrou pela primeira vez numa redação de jornal. O cheiro a tinta de impressão e o ruído constante das máquinas de escrever tornaram-se a banda sonora da sua vida. Começou como aprendiz, fazendo recados e observando os jornalistas mais experientes.

A primeira grande reportagem veio em 1965: uma investigação sobre as condições de vida nas aldeias do interior. O trabalho, publicado em série durante três semanas, causou comoção nacional e estabeleceu a sua reputação como jornalista sério e comprometido.

Durante este período, desenvolveu o seu estilo característico — uma prosa limpa, directa, mas profundamente humana. As suas reportagens não se limitavam a informar; faziam sentir.`
  },
  {
    id: 'consagracao',
    title: 'Anos de Consagração',
    years: '1972 — 1989',
    content: `Os anos 70 trouxeram o reconhecimento nacional. As suas crónicas semanais tornaram-se leitura obrigatória, discutidas nos cafés e citadas em debates. Era a voz de uma geração que procurava entender um país em transformação.

Em 1978, iniciou a transição para a literatura, sem nunca abandonar o jornalismo. O primeiro romance, "Vozes do Silêncio", foi publicado em 1982 e tornou-se um sucesso imediato. A crítica elogiou a sua capacidade de transportar para a ficção a mesma honestidade brutal das suas reportagens.

Os prémios começaram a acumular-se: o Prémio de Jornalismo em 1980, o Grande Prémio de Literatura em 1985. Mas mais do que os galardões, importava-lhe o impacto das suas palavras na consciência colectiva.`
  },
  {
    id: 'legado',
    title: 'Maturidade e Legado',
    years: '1989 — Presente',
    content: `A década de 90 marcou uma viragem para a reflexão. Continuou a escrever, mas com um ritmo mais pausado, privilegiando a qualidade sobre a quantidade. Cada obra tornou-se um acontecimento literário.

Dedicou-se também à formação de jovens jornalistas, partilhando décadas de experiência em workshops e palestras. Para ele, transmitir o ofício era tão importante quanto praticá-lo. "A escrita é uma tocha que deve passar de mão em mão", costumava dizer.

Hoje, as suas obras continuam a ser lidas e estudadas, traduzidas em mais de vinte línguas. O seu legado transcende as páginas: é uma lição viva sobre a importância da verdade, da persistência e do respeito pela palavra.`
  }
]

export default function BiografiaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="min-h-screen bg-background relative">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      <Navigation />
      
      <main className="relative pt-24 md:pt-32" ref={containerRef}>
        {/* Hero Section */}
        <section className="px-4 md:px-6 mb-16 md:mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-[1px] bg-border mx-auto mb-6"
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-4"
            >
              Biografia
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-ink-faded leading-relaxed"
            >
              A história completa de uma vida dedicada às palavras
            </motion.p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="px-4 md:px-6 mb-16">
          <div className="max-w-3xl mx-auto">
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-paper border border-border p-6 md:p-8"
            >
              <h2 className="text-xs text-ink-faded tracking-[0.3em] uppercase mb-6">
                Índice
              </h2>
              <ul className="space-y-4">
                {bioSections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-start gap-4 text-ink hover:text-ink-faded transition-colors"
                    >
                      <span className="text-xs text-ink-faded font-mono min-w-[3rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="block font-serif">{section.title}</span>
                        <span className="text-xs text-ink-faded">{section.years}</span>
                      </div>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>
        </section>

        {/* Biography Content */}
        <section className="relative px-4 md:px-6">
          {/* Progress indicator (desktop) */}
          <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 h-48">
            <div className="relative w-[2px] h-full bg-border">
              <motion.div
                className="absolute top-0 left-0 w-full bg-ink"
                style={{ height: progressHeight }}
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-24 md:space-y-32">
            {bioSections.map((section, index) => (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="scroll-mt-32"
              >
                {/* Section Header */}
                <header className="mb-8 border-b border-border pb-6">
                  <span className="text-xs text-ink-faded tracking-[0.2em] uppercase block mb-2">
                    Capítulo {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-ink mb-2">
                    {section.title}
                  </h2>
                  <span className="text-sm text-ink-faded font-mono">
                    {section.years}
                  </span>
                </header>

                {/* Section Content */}
                <div className="prose-typewriter">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <motion.p
                      key={pIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: pIndex * 0.1, duration: 0.6 }}
                      className="text-ink leading-relaxed mb-6 text-base md:text-lg"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

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
      </main>

      <Footer />
    </div>
  )
}
