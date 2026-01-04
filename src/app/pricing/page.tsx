'use client'

import { useLanguage } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-3">
              {t.pricing.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">{t.pricing.titleHighlight}</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {t.pricing.plans.map((plan, index) => {
              const isPopular = plan.popular
              
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-6 ${
                    isPopular 
                      ? 'bg-gradient-to-br from-cyan-500 to-teal-600 ring-2 ring-cyan-500/20' 
                      : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-white text-teal-600 text-xs font-medium rounded-full shadow-sm">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-5">
                    <h3 className={`text-lg font-semibold mb-1 ${isPopular ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${isPopular ? 'text-cyan-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-5">
                    <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${isPopular ? 'text-cyan-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isPopular ? 'text-white' : 'text-cyan-600 dark:text-cyan-400'}`} />
                        <span className={`text-sm ${isPopular ? 'text-cyan-50' : 'text-zinc-600 dark:text-zinc-400'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isPopular
                        ? 'bg-white text-teal-600 hover:bg-cyan-50'
                        : 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white hover:from-cyan-600 hover:to-teal-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
