'use client'

import { useLanguage } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-800 mb-6">
              <FileText className="w-7 h-7 text-zinc-600 dark:text-zinc-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
              {t.terms.title}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {t.terms.lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {t.terms.sections.map((section, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
