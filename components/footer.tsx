'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative bg-paper-aged border-t border-border">
      {/* Paper roll end effect */}
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-border/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Decorative typewriter element */}
          <div className="mb-6 flex justify-center items-center gap-4">
            <div className="w-12 h-[1px] bg-border" />
            <span className="text-ink-faded text-xs tracking-[0.3em]">FIM</span>
            <div className="w-12 h-[1px] bg-border" />
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-lg md:text-xl text-ink italic max-w-xl mx-auto mb-8">
            {'"A escrita é a pintura da voz."'}
          </blockquote>
          <p className="text-xs text-ink-faded tracking-wider mb-8">— Voltaire</p>

          {/* Copyright */}
          <p className="text-xs text-ink-faded tracking-wide">
            Memórias de um Repórter — Todos os direitos reservados
          </p>
        </motion.div>
      </div>

      {/* Bottom decorative line simulating paper tear */}
      <div className="h-2 bg-gradient-to-t from-background to-paper-aged" />
    </footer>
  )
}
