'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight, Bot } from 'lucide-react'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-slate-900 border border-slate-700 p-12 overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-azure-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-azure-500/5 blur-3xl" />
          
          <div className="relative text-center">

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">{t.cta.subtitle}</p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold hover:bg-gray-100 transition-all rounded-xl shadow-lg hover:shadow-xl hover:scale-105">
              {t.cta.button}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
