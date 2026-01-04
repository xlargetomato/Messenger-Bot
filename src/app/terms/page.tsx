'use client'

import { useLanguage } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            {t.terms.title}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">
            {t.terms.lastUpdated}
          </p>

          <div className="space-y-8">
            {t.terms.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {section.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
