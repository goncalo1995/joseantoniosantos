'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface PaperCardProps {
  title: string
  description: string
  href: string
  index?: number
}

export function PaperCard({ title, description, href, index = 0 }: PaperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
    >
      <Link href={href} className="group block">
        <div className="relative bg-paper border border-border p-6 md:p-8 key-press overflow-hidden transition-all duration-300 hover:bg-paper-aged">
          {/* Paper corner fold effect */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-border to-transparent opacity-50" />
          
          {/* Content */}
          <div className="relative">
            <h3 className="text-lg md:text-xl font-serif text-ink mb-2 group-hover:text-ink-faded transition-colors">
              {title}
            </h3>
            <p className="text-sm text-ink-faded leading-relaxed">
              {description}
            </p>
            
            {/* Arrow indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-ink-faded group-hover:text-ink transition-colors">
              <span className="tracking-wider">LER MAIS</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
          
          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-border opacity-50" />
        </div>
      </Link>
    </motion.div>
  )
}
