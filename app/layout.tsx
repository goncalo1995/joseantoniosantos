import type { Metadata } from 'next'
import { Special_Elite, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const specialElite = Special_Elite({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-typewriter'
})

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Memórias de um Repórter | Jornalista, Escritor e Autor',
  description: 'Biografia e obra de um dos maiores nomes do jornalismo e da literatura portuguesa.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" data-scroll-behavior="smooth">
      <body className={`${specialElite.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
