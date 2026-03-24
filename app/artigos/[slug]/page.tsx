import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getArticleBySlug, articles } from '@/lib/articles'
import ClientArticleContent from '@/components/client-article'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // Return EVERY possible slug you want to pre-render
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  return {
    title: article?.title || 'Artigo',
    description: article?.excerpt || 'Artigo do José António Santos',
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-ink mb-4">Artigo não encontrado</h1>
          <Link href="/artigos" className="text-ink-faded hover:text-ink transition-colors">
            ← Voltar aos artigos
          </Link>
        </div>
      </div>
    )
  }

  // Find next and previous articles
  const currentIndex = articles.findIndex(a => a.slug === slug)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  return (
    // <div className="min-h-screen bg-background relative">
    <div className="container max-w-2xl mx-auto px-6 py-16">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      <Navigation />
      
      <ClientArticleContent 
        article={article}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />

      <Footer />
    </div>
  )
}
