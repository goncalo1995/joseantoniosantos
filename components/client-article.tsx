'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getArticleBySlug, articles } from '@/lib/articles'

type ClientProps = {
  article: NonNullable<ReturnType<typeof getArticleBySlug>>
  prevArticle: typeof articles[number] | null
  nextArticle: typeof articles[number] | null
}

function ClientArticleContent({ article, prevArticle, nextArticle }: ClientProps) {
  const [displayedParagraphs, setDisplayedParagraphs] = useState<string[]>([])
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const paragraphs = article.content.split('\n\n')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < paragraphs.length) {
        setDisplayedParagraphs(prev => [...prev, paragraphs[currentIndex]!])
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [paragraphs.length]) // article is stable

  // Rest of your JSX — header, content with typing effect, navigation, etc.
  return (
    <>
      {/* Back link, header, title, excerpt ... */}
      {/* Back Link */}
        <section className="px-4 md:px-6 mb-8">
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
          <div className="max-w-3xl mx-auto">
            {/* Newspaper-style header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border-t-4 border-b border-ink py-4 mb-8"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-ink-faded tracking-[0.2em] uppercase border border-border px-2 py-0.5">
                  {article.category}
                </span>
                <span className="text-xs text-ink-faded font-mono">
                  {article.date}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-6"
            >
              {article.title}
            </motion.h1>

            {/* Excerpt / Lead */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-ink-faded leading-relaxed font-serif italic border-l-2 border-border pl-4"
            >
              {article.excerpt}
            </motion.p>
          </div>
        </section>

      <section className="px-4 md:px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose-article">
            {displayedParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-ink leading-relaxed mb-6 text-base md:text-lg first-letter:text-4xl …"
                style={{ textIndent: index > 0 ? '2em' : 0 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {!isTypingComplete && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 h-5 bg-ink"
              />
            )}
          </div>
        </div>
      </section>

      {/* "FIM" + prev/next navigation when typing is complete */}
      {isTypingComplete && (
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
      )}
    </>
  )
}

export default ClientArticleContent
