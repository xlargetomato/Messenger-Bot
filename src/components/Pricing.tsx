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
            <div 
              key={index} 
              className={`relative border-2 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-up ${plan.popular ? 'border-azure-500 bg-azure-50 dark:bg-slate-800' : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-xs font-bold text-white bg-azure-500 uppercase tracking-wide">
                    {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                  </span>
                </div>
              )}
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.description}</p>
                {plan.price ? (
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-lg">{plan.period}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-8">
                  </div>
                )}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-azure-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 ${plan.popular ? 'bg-azure-500 text-white hover:bg-azure-600 hover:shadow-lg' : 'border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900'}`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
