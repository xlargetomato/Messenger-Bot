'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            {t.faq.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            {t.faq.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">{t.faq.titleHighlight}</span>
          </h2>
        </div>

        <div className="space-y-2">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-zinc-900 dark:text-white text-sm">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-zinc-400 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
