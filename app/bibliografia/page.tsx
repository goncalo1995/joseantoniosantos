'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import bookCover1 from '@/public/images/livros/d-albino-cleto.webp'
import bookCover2 from '@/public/images/livros/padre-adelino.webp'
import bookCover3 from '@/public/images/livros/Tesouros-de-Oledo.jpg'
import bookCover4 from '@/public/images/livros/D-Albino-Cleto-Reflexoes-Espirituais-e-Pastorais.jpg'
import antonioRibeiro1 from '@/public/images/livros/Antonio-ribeiro.jpg'
import antonioRibeiro2 from '@/public/images/livros/D-antonio-ribeiro-2.webp'
import agenciasNoticiasPortugal from '@/public/images/livros/Agencias-de-noticias-de-portugal.webp'
import ScrollReveal from '@/components/scroll-reveal'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const books = [
  {
    year: 2022,
    title: "Padre Adelino Américo Lourenço - Uma Biografia",
    description: "Corajoso, mergulhou como ninguém, na humanidade de Idanha-a-Nova, compreendeu a alma do povo e, em nome do Evangelho de Jesus Cristo, resgatou a população dos opróbrios a que a haviam sujeitado. Com a ajuda do padre Adelino, homens e mulheres reconquistaram a honra de serem pessoas, passaram a ser respeitados com dignidade. Sobretudo, os mais pobres compreenderam que, afinal, também contam. Como pároco, contribuiu para a valorização e notoriedade do concelho. Idanha-a-Nova manifestou-se reconhecida e fez dele uma Pessoa feliz.",
    cover: bookCover2,
    alt: "Capa de Padre Adelino Américo Lourenço - Uma Biografia",
    // link: "https://www.paulinas.pt/produto/padre-adelino-americo-lourenco/",
  },
  {
    year: 2021,
    title: "Tesouros de Oledo",
    description: "A compreensão de Oledo requer uma atenta observação à Rua Direita. Na tradição do to-pónimo português, aquele nome, por via de regra, é atribuído à artéria principal, a mais importante da localidade. Em outros casos, até, por ter sido onde tudo começou, a primeira. (...) Está alinhada às vias de comunicação exterior: a este, com Idanha-a-Nova e Proença-a-Velha; a oeste, com São Miguel de Acha. (...) O empedrado da rua é composto por grossos paralelepípedos de granito. Ao longo de linhas paralelas dispõe-se o local de habitação. Entre fileiras do casario, distinguem-se resquícios renascentistas. Em geral, a volumetria não excede dois pisos, rés-do-chão e primeiro andar, como outrora era dado: em baixo, sítio para os animais; em cima, espaço destinado à habitação da família, aonde se acedia pelo exterior, através dos típicos balcões de escadas e lajes da rocha plutónica. ",
    cover: bookCover3,
    alt: "Capa de Tesouros de Oledo - Junta de Freguesia de Oledo",
    // link: "https://www.google.com/search?q=junta+freguesia+oledo&oq=junta+freguesia+oledo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhAuGEDSAQgzMzEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    year: 2021,
    title: "D. António Ribeiro Patriarca de Lisboa",
    description: "Seleção das melhores crónicas semanais publicadas entre 1995 e 2000.",
    cover: antonioRibeiro2,
    alt: "Capa de D. António Ribeiro Patriarca de Lisboa com página de jornal e máquina de escrever",
  },
  {
    year: 2018,
    title: "Dom Albino Cleto Reflexões Espirituais e Pastorais",
    description: "Ensaios sobre o papel do jornalismo na democracia portuguesa pós-25 de Abril.",
    cover: bookCover4,
    alt: "Capa provisória de O Peso das Palavras com páginas envelhecidas e marcas de tinta",
  },
  {
    year: 2016,
    title: "D. Albino Cleto Memórias de Uma Vida Plena",
    description: "Este livro sobre D. Albino Cleto (1935-2012), mais do que uma biografia, é um testemunho de vida plena(mente cristã), escrito com o coração, por um amigo e admirador. Baseia-se no testemunho dos que o conheceram de perto e nos próprios escritos desta figura insigne da Igreja portuguesa. Ao longo dos seus nove capítulos encontrar-se-ão certamente muitos pormenores até agora desconhecidos da vida, ação apostólica e espiritualidade de D. Albino. O traço mais destacado da vida do prelado não será, todavia, o itinerário repleto de tarefas multifacetadas ao serviço da Igreja, mas a sua humanidade simples, serena e humilde, como sublinha o atual bispo de Coimbra, D. Virgílio Antunes, no prefácio do livro: «Na tentativa de definir o traço fundamental da pessoa de D. Albino Cleto, ocorre-me a expressão bíblica \"passou pelo mundo fazendo o bem\".» As mais de 550 páginas, que incluem uma centena de fotografias, abrangem igualmente as ocupações que D. Albino assumiu após ter sido ordenado bispo, terminando com uma coletânea de textos em que se destacam os temas da arte, património, inculturação da fé, liturgia e diálogo inter-religioso.",
    cover: bookCover1,
    alt: "Capa provisória de Retratos a Carvão com retrato monocromático clássico",
  },
  {
    year: 2007,
    title: "Agências de Noticias de Portugal",
    description: "Memórias pessoais e profissionais — cinco décadas de vida e escrita com lucidez e ironia.",
    cover: agenciasNoticiasPortugal,
    alt: "Capa de Agências de Noticias de Portugal",
  },
  {
    year: 1996,
    title: "D. António Ribeiro Patriarca de Lisboa",
    description: "Seleção das melhores crónicas semanais publicadas entre 1995 e 2000.",
    cover: antonioRibeiro1,
    alt: "Capa de D. António Ribeiro Patriarca de Lisboa com página de jornal e máquina de escrever",
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
                              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2 text-justify">
                                {book.description}
                              </p>
                            </AccordionContent>

                            {/* {book.link && (
                              <a
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-ink-faded hover:text-ink transition-colors bg-secondary/80 px-3 py-1.5 rounded"
                              >
                                <span className="text-sm font-typewriter tracking-wider text-right">
                                  Comprar
                                </span>
                                <span className="text-sm">→</span>
                              </a>
                            )} */}
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
