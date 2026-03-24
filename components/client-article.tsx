'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getArticleBySlug, articles } from '@/lib/articles'
import { TypewriterText } from './typewriter-text'
import ScrollReveal from './scroll-reveal'

type ClientProps = {
  article: NonNullable<ReturnType<typeof getArticleBySlug>>
  prevArticle: typeof articles[number] | null
  nextArticle: typeof articles[number] | null
}

function ClientArticleContent({ article, prevArticle, nextArticle }: ClientProps) {
  const [titleDone, setTitleDone] = useState(false);
  const handleTitleDone = useCallback(() => setTitleDone(true), []);

  const paragraphs = article.content.split('\n\n')

  // Rest of your JSX — header, content with typing effect, navigation, etc.
  return (
    <>
      {/* Back link, header, title, excerpt ... */}
      {/* Back Link */}
        <section className="px-4 md:px-6 my-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link 
                href="/artigos" 
                className="inline-flex items-center gap-2 text-sm text-ink-faded hover:text-ink transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Voltar aos artigos</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Article Header */}
        <section className="px-4 md:px-6 mb-12">
          <h1 className="font-typewriter text-2xl sm:text-3xl leading-snug mb-3 ink-stamp">
          <TypewriterText text={article.title} speed={50} onComplete={handleTitleDone} />
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: titleDone ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <time className="font-typewriter text-xs text-muted-foreground tracking-wider">
            {article.date}
          </time>
          <div className="w-8 h-px bg-sepia mt-4" />
        </motion.div>

        {article.image && (
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: titleDone ? 1 : 0, y: titleDone ? 0 : 16 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 border border-border bg-card p-3"
        >
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full aspect-video object-cover grayscale"
          />
        </motion.figure>
        )}
      </section>

      <article>
        {titleDone && paragraphs.map((para, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <p className="font-body text-sm leading-[1.9] text-foreground mb-5">
              {para}
            </p>
          </ScrollReveal>
        ))}
      </article>

      {/* "FIM" + prev/next navigation when typing is complete */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-4 md:px-6 pb-16 md:pb-24"
      >
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-border pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Previous Article */}
              <div>
                {prevArticle && (
                  <Link 
                    href={`/artigos/${prevArticle.slug}`}
                    className="group block"
                  >
                    <span className="text-xs text-ink-faded tracking-wider uppercase mb-2 block">
                      ← Artigo anterior
                    </span>
                    <span className="font-serif text-ink group-hover:text-ink-faded transition-colors">
                      {prevArticle.title}
                    </span>
                  </Link>
                )}
              </div>

              {/* Next Article */}
              <div className="md:text-right">
                {nextArticle && (
                  <Link 
                    href={`/artigos/${nextArticle.slug}`}
                    className="group block"
                  >
                    <span className="text-xs text-ink-faded tracking-wider uppercase mb-2 block">
                      Próximo artigo →
                    </span>
                    <span className="font-serif text-ink group-hover:text-ink-faded transition-colors">
                      {nextArticle.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ClientArticleContent
