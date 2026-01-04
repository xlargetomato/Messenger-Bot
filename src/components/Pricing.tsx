'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Check, ArrowRight } from 'lucide-react'

export default function Pricing() {
  const { t, language } = useLanguage()
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-violet-200 dark:border-violet-900 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-slate-800 dark:to-slate-800/50 mb-6 shadow-md rounded-full">
            <span className="w-2 h-2 bg-azure-500 rounded-full" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.pricing.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.pricing.title}{' '}
            <span className="relative inline-block text-azure-500">
              {t.pricing.titleHighlight}
              <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-azure-400 opacity-40" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>{t.pricing.monthly}</span>
          <button onClick={() => setIsYearly(!isYearly)} className="relative w-14 h-7 bg-gray-300 dark:bg-slate-700 transition-colors rounded-full">
            <div className={`absolute top-1 w-5 h-5 bg-azure-500 transition-all rounded-full shadow-md ${isYearly ? 'left-8' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>{t.pricing.yearly}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan, index) => (
            <div key={index} className={`relative border p-8 ${plan.popular ? 'border-azure-500' : 'border-gray-200 dark:border-slate-700'} bg-white dark:bg-slate-800`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-semibold text-white bg-azure-500">
                    {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-azure-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 font-semibold flex items-center justify-center gap-2 transition-all rounded-lg ${plan.popular ? 'bg-azure-500 text-white hover:bg-azure-600 shadow-lg hover:shadow-xl hover:scale-105' : 'bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600'}`}>
                {plan.cta}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
