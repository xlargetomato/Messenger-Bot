'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Blocks, Zap, Users, BarChart3 } from 'lucide-react'

const icons = [Blocks, Zap, Users, BarChart3]

export default function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            {t.features.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            {t.features.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">{t.features.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-cyan-200 dark:hover:border-cyan-800 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 transition-colors">
                  <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
                
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
