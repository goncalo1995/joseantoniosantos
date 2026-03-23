'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import bookCover1 from '@/public/images/livros/d-albino-cleto.webp'
import bookCover2 from '@/public/images/book-cover-2.jpg'
import bookCover3 from '@/public/images/book-cover-3.jpg'
import bookCover4 from '@/public/images/book-cover-4.jpg'
import bookCover5 from '@/public/images/book-cover-5.jpg'
import bookCover6 from '@/public/images/book-cover-6.jpg'
import bookCover7 from '@/public/images/book-cover-7.jpg'
import ScrollReveal from '@/components/scroll-reveal'
import Image from 'next/image'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const books = [
  {
    year: 1978,
    title: "D. Albino Cleto",
    description: "Este livro sobre D. Albino Cleto (1935-2012), mais do que uma biografia, é um testemunho de vida plena(mente cristã), escrito com o coração, por um amigo e admirador. Baseia-se no testemunho dos que o conheceram de perto e nos próprios escritos desta figura insigne da Igreja portuguesa. Ao longo dos seus nove capítulos encontrar-se-ão certamente muitos pormenores até agora desconhecidos da vida, ação apostólica e espiritualidade de D. Albino. O traço mais destacado da vida do prelado não será, todavia, o itinerário repleto de tarefas multifacetadas ao serviço da Igreja, mas a sua humanidade simples, serena e humilde, como sublinha o atual bispo de Coimbra, D. Virgílio Antunes, no prefácio do livro: «Na tentativa de definir o traço fundamental da pessoa de D. Albino Cleto, ocorre-me a expressão bíblica \"passou pelo mundo fazendo o bem\".» As mais de 550 páginas, que incluem uma centena de fotografias, abrangem igualmente as ocupações que D. Albino assumiu após ter sido ordenado bispo, terminando com uma coletânea de textos em que se destacam os temas da arte, património, inculturação da fé, liturgia e diálogo inter-religioso.",
    cover: bookCover1,
    alt: "Capa provisória de Cartas do Silêncio com estética de máquina de escrever sobre papel envelhecido",
    link: "https://www.wook.pt/livro/d-albino-cleto-jose-antonio-santos/17399111",
  },
  {
    year: 1982,
    title: "A Margem do Rio",
    description: "Romance inspirado nas comunidades ribeirinhas do Douro, entrelaçando ficção e jornalismo literário.",
    cover: bookCover2,
    alt: "Capa provisória de A Margem do Rio com paisagem fluvial em tons sépia",
    link: "https://www.amazon.com/A-Margem-Rio-Jose-Antonio-Santos/dp/8418000000",
  },
  {
    year: 1986,
    title: "Fronteiras Invisíveis",
    description: "Crónicas de correspondente internacional — conflitos, revoluções e encontros improváveis em três continentes.",
    cover: bookCover3,
    alt: "Capa provisória de Fronteiras Invisíveis com mapas e referências editoriais vintage",
    link: "https://www.amazon.com/Fronteiras-Invis%C3%ADveis-Jos%C3%A9-Ant%C3%B3nio-Santos/dp/8418000001",
  },
  {
    year: 1991,
    title: "O Peso das Palavras",
    description: "Ensaios sobre o papel do jornalismo na democracia portuguesa pós-25 de Abril.",
    cover: bookCover4,
    alt: "Capa provisória de O Peso das Palavras com páginas envelhecidas e marcas de tinta",
  },
  {
    year: 1996,
    title: "Retratos a Carvão",
    description: "Perfis de figuras anónimas que moldaram a história sem nunca constarem dos livros oficiais.",
    cover: bookCover5,
    alt: "Capa provisória de Retratos a Carvão com retrato monocromático clássico",
  },
  {
    year: 2001,
    title: "Crónicas do Tempo Presente",
    description: "Seleção das melhores crónicas semanais publicadas entre 1995 e 2000.",
    cover: bookCover6,
    alt: "Capa provisória de Crónicas do Tempo Presente com página de jornal e máquina de escrever",
  },
  {
    year: 2005,
    title: "Tinta e Tempo",
    description: "Memórias pessoais e profissionais — cinco décadas de vida e escrita com lucidez e ironia.",
    cover: bookCover7,
    alt: "Capa provisória de Tinta e Tempo com mesa de escrita analógica em preto e bege",
  },
];


export default function BibliografiaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      <Navigation />
      
      <main className="relative pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-4 md:px-6 mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-px bg-border mx-auto mb-6"
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-4"
            >
              Bibliografia
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-ink-faded leading-relaxed max-w-xl mx-auto"
            >
              Obras publicadas ao longo de uma carreira dedicada à escrita
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 md:px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center gap-8 md:gap-16 py-6 border-y border-border">
              <div className="text-center">
                <span className="block font-serif text-3xl md:text-4xl text-ink">9</span>
                <span className="text-xs text-ink-faded tracking-wider uppercase">Obras</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl md:text-4xl text-ink">33</span>
                <span className="text-xs text-ink-faded tracking-wider uppercase">Anos</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl md:text-4xl text-ink">20+</span>
                <span className="text-xs text-ink-faded tracking-wider uppercase">Línguas</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Books Grid */}
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Accordion type="single" collapsible className="space-y-8">
                {books.map((book, index) => (
                  <ScrollReveal key={book.title} delay={index * 0.08}>
                    <AccordionItem value={`item-${index}`} className="border-0">
                      <motion.article
                        className="border border-border bg-card p-6 sm:p-8 relative overflow-hidden group"
                        whileHover={{
                          boxShadow: "0 4px 20px hsl(30 10% 15% / 0.06)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Year badge */}
                        <div className="absolute top-0 right-0 bg-secondary font-typewriter text-xs tracking-wider px-3 py-1.5 text-muted-foreground">
                          {book.year}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-[140px_1fr] sm:items-start">
                          <div className="bg-secondary/50 border border-border p-2 shadow-sm">
                            <Image
                              src={book.cover}
                              alt={book.alt}
                              width={280}
                              height={420}
                              className="w-full aspect-3/4 object-cover grayscale-[0.15] transition-transform duration-300 group-hover:scale-[1.02]"
                              placeholder="blur"
                              quality={75}
                            />
                          </div>

                          <div>
                            <h2 className="font-typewriter text-lg mb-1 pr-16">
                              {book.title}
                            </h2>
                            <div className="w-6 h-px bg-sepia mb-3" />

                            <AccordionTrigger className="p-0 py-2 [&>svg]:text-ink-faded [&>svg]:size-4" onClick={() => setOpenIndex(index === openIndex ? null : index)}>
                              <span className="text-sm font-typewriter tracking-wider text-ink-faded">
                                {index === openIndex ? "Sinopse:" : "Ler sinopse"}
                              </span>
                            </AccordionTrigger>

                            <AccordionContent>
                              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2">
                                {book.description}
                              </p>
                            </AccordionContent>

                            {book.link && (
                              <a
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-ink-faded hover:text-ink transition-colors bg-secondary/80 px-3 py-1.5 rounded"
                              >
                                <span className="text-sm font-typewriter tracking-wider">
                                  Comprar
                                </span>
                                <span className="text-sm">→</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.article>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>

            {books.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-ink-faded">Nenhuma obra encontrada.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-paper">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="font-serif text-xl md:text-2xl text-ink italic">
              {'"Cada livro é uma carta endereçada ao futuro."'}
            </blockquote>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
