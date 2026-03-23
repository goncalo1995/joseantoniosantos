'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { TypewriterText } from '@/components/typewriter-text'
import { PaperCard } from '@/components/paper-card'

const sections = [
  {
    title: 'Biografia',
    description: 'A história de uma vida dedicada à verdade e à palavra escrita.',
    href: '/biografia'
  },
  {
    title: 'Bibliografia',
    description: 'Obras publicadas que marcaram gerações de leitores.',
    href: '/bibliografia'
  },
  {
    title: 'Artigos',
    description: 'Reportagens e crónicas que fizeram história.',
    href: '/artigos'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      <Navigation />
      
      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-[1px] bg-border mx-auto mb-8"
            />
            
            {/* Main Title with Typewriter Effect */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ink mb-4 leading-tight">
              <TypewriterText 
                text="José António Santos" 
                speed={80}
                delay={300}
              />
            </h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="text-lg md:text-xl text-ink-faded tracking-wider uppercase mb-8"
            >
              Jornalista
            </motion.p>
            
            {/* Brief Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-base md:text-lg text-ink-faded leading-relaxed max-w-xl mx-auto"
            >
              Uma vida inteira dedicada a contar histórias que precisavam ser contadas, 
              em tempos que exigiam coragem para escrever a verdade.
            </motion.p>

            {/* Featured Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="mt-12 font-serif text-xl md:text-2xl text-ink italic"
            >
              {'"A verdade não tem preço, mas custa tudo para ser contada."'}
            </motion.blockquote>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-ink-faded text-xs tracking-widest"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Cards Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-xs text-ink-faded tracking-[0.3em] uppercase">
                Explorar
              </span>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {sections.map((section, index) => (
                <PaperCard
                  key={section.href}
                  title={section.title}
                  description={section.description}
                  href={section.href}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Preview */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-paper">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
                Marcos de uma Vida
              </h2>
              
              {/* Simple Timeline */}
              <div className="space-y-8 text-left">
                {[
                  { year: '1935', event: 'Nasce em Lisboa, Portugal' },
                  { year: '1958', event: 'Inicia carreira no jornalismo' },
                  { year: '1972', event: 'Publica primeira grande reportagem' },
                  { year: '1989', event: 'Lança obra literária de referência' },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-6 border-l border-border pl-6"
                  >
                    <span className="text-sm text-ink-faded font-mono min-w-[4rem]">
                      {item.year}
                    </span>
                    <span className="text-ink">
                      {item.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
