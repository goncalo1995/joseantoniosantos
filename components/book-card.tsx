'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface BookCardProps {
  title: string
  year: string
  description: string
  category: string
  index?: number
}

export function BookCard({ title, year, description, category, index = 0 }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="flex gap-4 md:gap-8">
        {/* Book Cover Placeholder */}
        <motion.div
          animate={{ rotateY: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative flex-shrink-0 w-24 md:w-32 h-36 md:h-48 bg-paper-aged border border-border overflow-hidden shadow-sm"
        >
          {/* Book spine effect */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-border to-transparent" />
          
          {/* Decorative text on cover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
            <span className="text-[10px] md:text-xs text-ink-faded tracking-[0.2em] uppercase mb-2">
              {category}
            </span>
            <span className="font-serif text-xs md:text-sm text-ink leading-tight">
              {title}
            </span>
            <span className="mt-2 text-[10px] text-ink-faded font-mono">
              {year}
            </span>
          </div>

          {/* Paper texture lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute left-3 right-3 h-[1px] bg-ink"
                style={{ top: `${20 + i * 10}%` }}
              />
            ))}
          </div>

          {/* Corner fold */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-border to-transparent" />
        </motion.div>

        {/* Book Details */}
        <div className="flex-1 py-2">
          <div className="mb-2 flex items-start justify-between gap-4">
            <h3 className="font-serif text-lg md:text-xl text-ink group-hover:text-ink-faded transition-colors">
              {title}
            </h3>
            <span className="text-sm text-ink-faded font-mono flex-shrink-0">
              {year}
            </span>
          </div>
          
          <span className="inline-block text-[10px] text-ink-faded tracking-[0.2em] uppercase mb-3 border border-border px-2 py-1">
            {category}
          </span>
          
          <p className="text-sm text-ink-faded leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="mt-6 h-[1px] bg-border" />
    </motion.article>
  )
}
