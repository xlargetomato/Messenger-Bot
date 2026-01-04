'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Blocks, Sparkles, Users, BarChart3, Globe, Zap, ArrowRight, Check } from 'lucide-react'

const icons = [Blocks, Sparkles, Users, BarChart3, Globe, Zap]

export default function Features() {
  const { t, language } = useLanguage()

  const featureVisuals = [
    (
      <div className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-16 h-8 bg-azure-500 flex items-center justify-center text-[10px] text-white">Start</div>
          <div className="w-4 h-px bg-gray-400 dark:bg-slate-600" />
          <div className="w-16 h-8 bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-[10px] text-gray-700 dark:text-gray-300">Message</div>
          <div className="w-4 h-px bg-gray-400 dark:bg-slate-600" />
          <div className="w-16 h-8 bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-[10px] text-gray-700 dark:text-gray-300">Reply</div>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-azure-500" />
          <div className="w-2 h-2 bg-gray-400 dark:bg-slate-600" />
          <div className="w-2 h-2 bg-gray-400 dark:bg-slate-600" />
        </div>
      </div>
    ),
    (
      <div className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-azure-500 dark:text-azure-400" />
          <div className="flex-1 h-2 bg-azure-500 animate-pulse" />
        </div>
        <p className="text-[10px] text-gray-600 dark:text-gray-500">{language === 'ar' ? 'جاري التحليل...' : 'Analyzing intent...'}</p>
      </div>
    ),
    (
      <div className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-azure-500 flex items-center justify-center"><Sparkles className="w-4 h-4 text-white" /></div>
            <ArrowRight className="w-4 h-4 text-gray-400 dark:text-slate-600" />
            <div className="w-8 h-8 bg-gray-200 dark:bg-slate-800 flex items-center justify-center"><Users className="w-4 h-4 text-gray-700 dark:text-gray-300" /></div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <Check className="w-3 h-3 text-emerald-500" />
          <p className="text-[10px] text-emerald-600 dark:text-emerald-500">{language === 'ar' ? 'تم التحويل' : 'Transferred'}</p>
        </div>
      </div>
    ),
    (
      <div className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-end gap-1 h-12">
          <div className="w-3 bg-gray-300 dark:bg-slate-700" style={{ height: '40%' }} />
          <div className="w-3 bg-gray-300 dark:bg-slate-700" style={{ height: '60%' }} />
          <div className="w-3 bg-azure-500" style={{ height: '80%' }} />
          <div className="w-3 bg-azure-500" style={{ height: '100%' }} />
          <div className="w-3 bg-azure-400" style={{ height: '90%' }} />
        </div>
        <p className="text-[10px] text-gray-600 dark:text-gray-500 mt-2">{language === 'ar' ? 'المحادثات هذا الأسبوع' : 'Conversations this week'}</p>
      </div>
    ),
    (
      <div className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 text-xs text-gray-700 dark:text-gray-400">EN</span>
          <span className="px-2 py-1 bg-azure-600 text-xs text-white">AR</span>
          <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 text-xs text-gray-700 dark:text-gray-400">FR</span>
          <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 text-xs text-gray-700 dark:text-gray-400">ES</span>
        </div>
      </div>
    ),
    (
      <div className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-azure-100 dark:bg-azure-500/20 border border-azure-300 dark:border-azure-500/30 text-[10px] text-azure-700 dark:text-azure-300 flex items-center gap-1">
            <Check className="w-3 h-3" />{language === 'ar' ? 'نعم' : 'Yes'}
          </button>
          <button className="px-3 py-1.5 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-[10px] text-gray-700 dark:text-gray-400">{language === 'ar' ? 'لا' : 'No'}</button>
          <button className="px-3 py-1.5 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-[10px] text-gray-700 dark:text-gray-400">{language === 'ar' ? 'المزيد...' : 'More...'}</button>
        </div>
      </div>
    ),
  ]

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-slate-600 bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-800/50 mb-6 shadow-sm rounded-full">
            <span className="w-2 h-2 bg-azure-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{t.features.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.features.title}{' '}
            <span className="relative inline-block text-azure-500">
              {t.features.titleHighlight}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-azure-400 to-azure-600 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {language === 'ar' ? 'أدوات قوية لبناء بوتات احترافية بدون كتابة سطر كود واحد' : 'Powerful tools to build professional bots without writing a single line of code'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="group relative p-6 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-azure-400 dark:hover:border-azure-600 transition-all duration-300">
                <div className="w-12 h-12 bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-azure-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                {featureVisuals[index]}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
