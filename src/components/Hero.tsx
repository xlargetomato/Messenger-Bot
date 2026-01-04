'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight, MessageCircle, Send } from 'lucide-react'

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-[1.1] mb-5">
              {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
              <a 
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 text-zinc-700 dark:text-zinc-300 font-medium rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Chat Mockup */}
          <div className="relative">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white text-sm">Your Bot</p>
                  <p className="text-xs text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {language === 'ar' ? 'متصل' : 'Online'}
                  </p>
                </div>
              </div>
              
              {/* Messages */}
              <div className="p-4 space-y-3 bg-zinc-50 dark:bg-zinc-900/50 min-h-[300px]">
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[80%] shadow-sm">
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                      {language === 'ar' ? 'مرحباً! كيف يمكنني مساعدتك؟' : 'Hi! How can I help you?'}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[80%]">
                    <p className="text-white text-sm">
                      {language === 'ar' ? 'ما هي خدماتكم؟' : 'What services do you offer?'}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[80%] shadow-sm">
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                      {language === 'ar' 
                        ? 'نقدم خدمات متنوعة! هل تريد معرفة الأسعار؟'
                        : 'We offer various services! Want to know the prices?'}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[80%]">
                    <p className="text-white text-sm">
                      {language === 'ar' ? 'نعم، أرسل لي الأسعار' : 'Yes, send me the prices'}
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[80%] shadow-sm">
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                      {language === 'ar' 
                        ? 'تم! ✅ أرسلت لك قائمة الأسعار. هل تحتاج مساعدة أخرى؟'
                        : 'Done! ✅ I sent you the price list. Need anything else?'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 p-3 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <input 
                  type="text" 
                  placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
                  className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-2.5 text-sm outline-none text-zinc-700 dark:text-zinc-300 placeholder-zinc-400 dark:placeholder-zinc-500"
                  disabled
                />
                <button className="p-2.5 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
