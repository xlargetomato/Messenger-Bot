'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t.cta.title}
          </h2>
          <p className="text-cyan-100 mb-6 max-w-md mx-auto">
            {t.cta.subtitle}
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-600 font-medium rounded-xl hover:bg-cyan-50 transition-colors">
            {t.cta.button}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  )
}
