'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before triggering animations
          setTimeout(() => {
            setIsVisible(true)
          }, 100)
        }
      },
      { threshold: 0.2 } // Increased threshold so it triggers when 20% is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 border border-pink-200 dark:border-pink-900 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-slate-800 dark:to-slate-800/50 mb-6 shadow-md rounded-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="w-2 h-2 bg-azure-500 rounded-full animate-ping absolute" />
            <span className="w-2 h-2 bg-azure-500 rounded-full" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.faq.label}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {t.faq.title}{' '}
            <span className="relative inline-block">
              <span className="text-azure-500">{t.faq.titleHighlight}</span>
              <span className="absolute inset-0 bg-azure-500/10 blur-2xl -z-10 scale-110"></span>
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index} 
                className={`border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-azure-400 dark:hover:border-azure-600 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">{item.question}</span>
                  <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-azure-100 dark:bg-azure-900/40' : 'bg-gray-200 dark:bg-slate-700'}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-azure-500" /> : <Plus className="w-4 h-4 text-gray-700 dark:text-gray-300" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
