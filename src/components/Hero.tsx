'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight, Bot, Sparkles, Zap, Send } from 'lucide-react'

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="pt-28 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-azure-200 dark:border-azure-900 bg-gradient-to-r from-azure-50 via-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/50 shadow-lg rounded-full">
            <Sparkles className="w-4 h-4 text-azure-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6">
            {t.hero.title}{' '}
            <span className="relative inline-block">
              <span className="text-azure-500">{t.hero.titleHighlight}</span>
              <span className="absolute inset-0 bg-azure-500/20 blur-3xl -z-10 animate-pulse"></span>
              <svg className="absolute -bottom-3 left-0 right-0 h-4" viewBox="0 0 300 20" preserveAspectRatio="none">
                <path d="M0,10 Q75,0 150,10 T300,10" fill="none" stroke="currentColor" strokeWidth="4" className="text-azure-400 opacity-30" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-azure-500 hover:bg-azure-600 text-white font-semibold transition-all rounded-xl shadow-lg hover:shadow-xl hover:scale-105">
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>
          <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-gray-900 dark:text-white font-semibold border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all rounded-xl">
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Bento Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Main Chat Preview - Light theme friendly */}
          <div className="md:col-span-2 bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-6 min-h-[320px] relative overflow-hidden rounded-3xl">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gray-700 dark:text-gray-300">U</span>
                </div>
                <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-[20px] px-4 py-3 max-w-[70%]">
                  <p className="text-gray-800 dark:text-gray-300 text-sm">{language === 'ar' ? 'ما هي أسعاركم؟' : 'What are your prices?'}</p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-azure-500 rounded-[20px] px-4 py-3 max-w-[70%]">
                  <p className="text-white text-sm">{language === 'ar' ? 'لدينا 3 خطط تبدأ من $19/شهر. هل تريد التفاصيل؟' : 'We have 3 plans starting at $19/mo. Want details?'}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-azure-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex gap-2 justify-end pr-11">
                <button className="px-4 py-2 text-xs text-azure-600 dark:text-azure-300 border border-azure-300 dark:border-azure-500/30 hover:bg-azure-50 dark:hover:bg-azure-500/10 transition-colors">{language === 'ar' ? 'نعم، أرسل التفاصيل' : 'Yes, send details'}</button>
                <button className="px-4 py-2 text-xs text-azure-600 dark:text-azure-300 border border-azure-300 dark:border-azure-500/30 hover:bg-azure-50 dark:hover:bg-azure-500/10 transition-colors">{language === 'ar' ? 'تحدث مع شخص' : 'Talk to human'}</button>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-full px-4 py-3 border border-gray-300 dark:border-slate-700">
                <input type="text" placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'} className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-400 placeholder-gray-500 outline-none" disabled />
                <button className="p-2 bg-azure-500 rounded-full text-white hover:bg-azure-600 transition-colors"><Send className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          {/* Side cards - Light theme friendly */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-azure-50 dark:bg-slate-800 border border-azure-200 dark:border-slate-700 p-5 rounded-2xl">
              <div className="w-10 h-10 bg-azure-500 flex items-center justify-center mb-4 rounded-xl"><Sparkles className="w-5 h-5 text-white" /></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{language === 'ar' ? 'مدعوم بالذكاء الاصطناعي' : 'AI-Powered'}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{language === 'ar' ? 'ردود ذكية تفهم السياق' : 'Smart responses that understand context'}</p>
            </div>
            <div className="flex-1 bg-cyan-50 dark:bg-slate-800 border border-cyan-200 dark:border-slate-700 p-5 rounded-2xl">
              <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center mb-4 rounded-xl"><Zap className="w-5 h-5 text-white" /></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{language === 'ar' ? 'أتمتة 24/7' : '24/7 Automation'}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{language === 'ar' ? 'يعمل حتى عندما تكون بعيداً' : "Works even when you're away"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
