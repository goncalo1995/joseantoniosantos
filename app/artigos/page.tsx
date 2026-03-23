'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { articles } from '@/lib/articles'

export default function ArtigosPage() {
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
              Artigos
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-ink-faded leading-relaxed max-w-xl mx-auto"
            >
              Reportagens e crónicas que marcaram o jornalismo português
            </motion.p>
          </div>
        </section>

        {/* Newspaper Header Decoration */}
        <section className="px-4 md:px-6 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="border-t-4 border-b border-ink py-2 flex justify-between items-center">
              <span className="text-xs text-ink-faded tracking-[0.3em] uppercase">
                Arquivo
              </span>
              <span className="text-xs text-ink-faded font-mono">
                1972 — 1983
              </span>
            </div>
          </motion.div>
        </section>

        {/* Articles List */}
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link href={`/artigos/${article.slug}`} className="block">
                    <div className="py-8 border-b border-border hover:bg-paper transition-colors">
                      {/* Article Header */}
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                        {/* Date Column */}
                        <div className="md:w-32 flex-shrink-0">
                          <span className="text-xs text-ink-faded font-mono">
                            {article.date}
                          </span>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1">
                          {/* Category */}
                          <span className="inline-block text-[10px] text-ink-faded tracking-[0.2em] uppercase mb-2 border border-border px-2 py-0.5">
                            {article.category}
                          </span>

                          {/* Title */}
                          <h2 className="font-serif text-xl md:text-2xl text-ink group-hover:text-ink-faded transition-colors mb-3">
                            {article.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-sm text-ink-faded leading-relaxed mb-4">
                            {article.excerpt}
                          </p>

                          {/* Read More */}
                          <span className="text-xs text-ink-faded tracking-wider uppercase group-hover:text-ink transition-colors">
                            Ler artigo completo →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Archive Note */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-paper">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm text-ink-faded leading-relaxed mb-4">
              Este arquivo representa uma selecção das reportagens mais significativas.
              O acervo completo encontra-se depositado na Hemeroteca Municipal de Lisboa.
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-8 h-[1px] bg-border" />
              <span className="text-ink-faded text-xs">FIM DO ARQUIVO</span>
              <div className="w-8 h-[1px] bg-border" />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
