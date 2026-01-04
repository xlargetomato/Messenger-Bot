'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Blocks, Sparkles, Users, BarChart3, Globe, Zap, ArrowRight, Check } from 'lucide-react'
import { useState, useEffect } from 'react'

const icons = [Blocks, Sparkles, Users, BarChart3, Globe, Zap]

export default function Features() {
  const { t, language } = useLanguage()
  const [animationKey, setAnimationKey] = useState(0)

  // Reset animations every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featureVisuals = [
    (
      <div key={animationKey} className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-16 h-8 bg-azure-500 flex items-center justify-center text-[10px] text-white animate-scale-in">Start</div>
          <div className="w-4 h-px bg-gray-400 dark:bg-slate-600 animate-fill-width" />
          <div className="w-16 h-8 bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-[10px] text-gray-700 dark:text-gray-300 animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Message</div>
          <div className="w-4 h-px bg-gray-400 dark:bg-slate-600 animate-fill-width" style={{ animationDelay: '0.5s' }} />
          <div className="w-16 h-8 bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-[10px] text-gray-700 dark:text-gray-300 animate-scale-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>Reply</div>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-azure-500 animate-scale-in" />
          <div className="w-2 h-2 bg-gray-400 dark:bg-slate-600 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }} />
          <div className="w-2 h-2 bg-gray-400 dark:bg-slate-600 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }} />
        </div>
      </div>
    ),
    (
      <div key={animationKey} className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-azure-500 dark:text-azure-400 animate-pulse" />
          <div className="flex-1 h-2 bg-gray-200 dark:bg-slate-700 overflow-hidden">
            <div className="h-full bg-azure-500 animate-fill-width" />
          </div>
        </div>
        <p className="text-[10px] text-gray-600 dark:text-gray-500 animate-pulse">{language === 'ar' ? 'جاري التحليل...' : 'Analyzing intent...'}</p>
      </div>
    ),
    (
      <div key={animationKey} className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-azure-500 flex items-center justify-center animate-scale-in"><Sparkles className="w-4 h-4 text-white" /></div>
            <ArrowRight className="w-4 h-4 text-gray-400 dark:text-slate-600 animate-slide-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'both' }} />
            <div className="w-8 h-8 bg-gray-200 dark:bg-slate-800 flex items-center justify-center animate-scale-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}><Users className="w-4 h-4 text-gray-700 dark:text-gray-300" /></div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2 animate-slide-up" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
          <Check className="w-3 h-3 text-emerald-500" />
          <p className="text-[10px] text-emerald-600 dark:text-emerald-500">{language === 'ar' ? 'تم التحويل' : 'Transferred'}</p>
        </div>
      </div>
    ),
    (
      <div key={animationKey} className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex items-end gap-1 h-12">
          <div className="w-3 bg-gray-300 dark:bg-slate-700 animate-grow-height" style={{ height: '40%', animationDelay: '0s' }} />
          <div className="w-3 bg-gray-300 dark:bg-slate-700 animate-grow-height" style={{ height: '60%', animationDelay: '0.2s' }} />
          <div className="w-3 bg-azure-500 animate-grow-height" style={{ height: '80%', animationDelay: '0.4s' }} />
          <div className="w-3 bg-azure-500 animate-grow-height" style={{ height: '100%', animationDelay: '0.6s' }} />
          <div className="w-3 bg-azure-400 animate-grow-height" style={{ height: '90%', animationDelay: '0.8s' }} />
        </div>
        <p className="text-[10px] text-gray-600 dark:text-gray-500 mt-2 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>{language === 'ar' ? 'المحادثات هذا الأسبوع' : 'Conversations this week'}</p>
      </div>
    ),
    (
      <div key={animationKey} className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 text-xs text-gray-700 dark:text-gray-400 animate-scale-in">EN</span>
          <span className="px-2 py-1 bg-azure-600 text-xs text-white animate-scale-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>AR</span>
          <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>FR</span>
          <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>ES</span>
        </div>
      </div>
    ),
    (
      <div key={animationKey} className="mt-4 bg-gray-100 dark:bg-slate-900 p-3 border border-gray-300 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-azure-100 dark:bg-azure-500/20 border border-azure-300 dark:border-azure-500/30 text-[10px] text-azure-700 dark:text-azure-300 flex items-center gap-1 animate-scale-in transition-all hover:scale-110">
            <Check className="w-3 h-3" />{language === 'ar' ? 'نعم' : 'Yes'}
          </button>
          <button className="px-3 py-1.5 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-[10px] text-gray-700 dark:text-gray-400 animate-scale-in transition-all hover:scale-110" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>{language === 'ar' ? 'لا' : 'No'}</button>
          <button className="px-3 py-1.5 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-[10px] text-gray-700 dark:text-gray-400 animate-scale-in transition-all hover:scale-110" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>{language === 'ar' ? 'المزيد...' : 'More...'}</button>
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
              <div 
                key={index} 
                className="group relative p-6 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-azure-400 dark:hover:border-azure-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
