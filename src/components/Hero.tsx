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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-azure-200 dark:border-azure-800 bg-azure-100 dark:bg-azure-900">
            <Sparkles className="w-4 h-4 text-azure-500" />
            <span className="text-sm text-azure-700 dark:text-zinc-400">{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-azure-900 dark:text-white leading-[1.1] mb-6">
            {t.hero.title}{' '}
            <span className="text-azure-500">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-azure-700 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-azure-500 hover:bg-azure-600 text-white font-semibold transition-all">
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-azure-800 dark:text-zinc-300 font-semibold border border-azure-300 dark:border-azure-700 hover:bg-azure-100 dark:hover:bg-azure-800/50 transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Bento Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Main Chat Preview - Spans 2 columns */}
          <div className="md:col-span-2 bg-azure-900 dark:bg-azure-950 border border-azure-800 p-6 min-h-[320px] relative overflow-hidden">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500/80" />
              <div className="w-3 h-3 bg-yellow-500/80" />
              <div className="w-3 h-3 bg-green-500/80" />
            </div>
            
            <div className="mt-8 space-y-4">
              {/* Incoming message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-azure-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-zinc-300">U</span>
                </div>
                <div className="bg-azure-800 px-4 py-3 max-w-[70%]">
                  <p className="text-zinc-300 text-sm">
                    {language === 'ar' ? 'ما هي أسعاركم؟' : 'What are your prices?'}
                  </p>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex gap-3 justify-end">
                <div className="bg-azure-500 px-4 py-3 max-w-[70%]">
                  <p className="text-white text-sm">
                    {language === 'ar' 
                      ? 'لدينا 3 خطط تبدأ من $19/شهر. هل تريد التفاصيل؟'
                      : 'We have 3 plans starting at $19/mo. Want details?'}
                  </p>
                </div>
                <div className="w-8 h-8 bg-azure-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Quick replies */}
              <div className="flex gap-2 justify-end pr-11">
                <button className="px-3 py-1.5 text-xs text-azure-300 border border-azure-500/30 hover:bg-azure-500/10 transition-colors">
                  {language === 'ar' ? 'نعم، أرسل التفاصيل' : 'Yes, send details'}
                </button>
                <button className="px-3 py-1.5 text-xs text-azure-300 border border-azure-500/30 hover:bg-azure-500/10 transition-colors">
                  {language === 'ar' ? 'تحدث مع شخص' : 'Talk to human'}
                </button>
              </div>
            </div>

            {/* Input bar */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 bg-azure-800 px-4 py-3">
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
                  className="flex-1 bg-transparent text-sm text-zinc-400 placeholder-zinc-500 outline-none"
                  disabled
                />
                <button className="p-2 bg-azure-500 text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {/* AI Card */}
            <div className="flex-1 bg-azure-50 dark:bg-azure-900 border border-azure-200 dark:border-azure-800 p-5">
              <div className="w-10 h-10 bg-azure-500 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-azure-900 dark:text-white mb-2">
                {language === 'ar' ? 'مدعوم بالذكاء الاصطناعي' : 'AI-Powered'}
              </h3>
              <p className="text-sm text-azure-700 dark:text-zinc-400">
                {language === 'ar' 
                  ? 'ردود ذكية تفهم السياق'
                  : 'Smart responses that understand context'}
              </p>
            </div>

            {/* Automation Card */}
            <div className="flex-1 bg-azure-100 dark:bg-azure-900 border border-azure-200 dark:border-azure-800 p-5">
              <div className="w-10 h-10 bg-azure-200 dark:bg-azure-800 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-azure-700 dark:text-zinc-400" />
              </div>
              <h3 className="font-semibold text-azure-900 dark:text-white mb-2">
                {language === 'ar' ? 'أتمتة 24/7' : '24/7 Automation'}
              </h3>
              <p className="text-sm text-azure-700 dark:text-zinc-400">
                {language === 'ar'
                  ? 'يعمل حتى عندما تكون بعيداً'
                  : "Works even when you're away"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
