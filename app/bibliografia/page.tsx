'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BookCard } from '@/components/book-card'

const books = [
  {
    title: 'Vozes do Silêncio',
    year: '1982',
    category: 'Romance',
    description: 'O primeiro romance, aclamado pela crítica. Uma narrativa poderosa sobre uma família portuguesa durante os anos do Estado Novo, explorando temas de resistência silenciosa e coragem quotidiana.'
  },
  {
    title: 'Crónicas do Tempo',
    year: '1985',
    category: 'Crónicas',
    description: 'Colectânea das melhores crónicas publicadas ao longo de uma década. Reflexões sobre a sociedade portuguesa em transformação, com a prosa característica do autor.'
  },
  {
    title: 'O Peso das Palavras',
    year: '1988',
    category: 'Romance',
    description: 'Segunda obra de ficção, vencedora do Grande Prémio de Literatura. A história de um jornalista confrontado com dilemas éticos num período turbulento da história.'
  },
  {
    title: 'Memórias de Guerra',
    year: '1991',
    category: 'Reportagem',
    description: 'Compilação de reportagens de guerra realizadas em África. Um testemunho brutal e honesto dos horrores do conflito e da humanidade que persiste mesmo nos momentos mais sombrios.'
  },
  {
    title: 'A Cidade que Fomos',
    year: '1995',
    category: 'Romance',
    description: 'Romance epistolar que traça a evolução de Lisboa ao longo do século XX, através da correspondência entre dois amigos separados pela emigração.'
  },
  {
    title: 'Entrevistas Impossíveis',
    year: '1998',
    category: 'Jornalismo',
    description: 'As entrevistas mais marcantes de uma carreira de quatro décadas. Conversas com figuras que moldaram a história contemporânea portuguesa.'
  },
  {
    title: 'O Último Repórter',
    year: '2003',
    category: 'Romance',
    description: 'Romance semi-autobiográfico sobre o fim de uma era no jornalismo. Uma meditação sobre mudança, memória e o papel da imprensa na sociedade.'
  },
  {
    title: 'Cartas a um Jovem Jornalista',
    year: '2008',
    category: 'Ensaio',
    description: 'Reflexões sobre o ofício de jornalista, dirigidas às novas gerações. Um legado de sabedoria profissional e ética escrito com clareza e paixão.'
  },
  {
    title: 'Fragmentos',
    year: '2015',
    category: 'Poesia',
    description: 'Única incursão na poesia, publicada aos 80 anos. Versos curtos e precisos que condensam uma vida de observação e reflexão sobre a condição humana.'
  }
]

const categories = ['Todos', 'Romance', 'Crónicas', 'Reportagem', 'Jornalismo', 'Ensaio', 'Poesia']

export default function BibliografiaPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredBooks = activeCategory === 'Todos' 
    ? books 
    : books.filter(book => book.category === activeCategory)

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
              className="w-16 h-[1px] bg-border mx-auto mb-6"
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

        {/* Category Filter */}
        <section className="px-4 md:px-6 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 md:px-4 py-2 text-xs tracking-wider uppercase transition-all key-press ${
                    activeCategory === category
                      ? 'bg-ink text-paper border border-ink'
                      : 'bg-transparent text-ink-faded border border-border hover:border-ink hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Books Grid */}
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {filteredBooks.map((book, index) => (
                <BookCard
                  key={book.title}
                  title={book.title}
                  year={book.year}
                  category={book.category}
                  description={book.description}
                  index={index}
                />
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-ink-faded">Nenhuma obra encontrada nesta categoria.</p>
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
