'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ShoppingBag, MessageSquare, Target, CalendarCheck, User, Bot, Briefcase } from 'lucide-react'

export default function UseCases() {
  const { t, language } = useLanguage()

  const caseDetails = language === 'ar' ? [
    { icon: ShoppingBag, gradient: 'from-pink-500 to-rose-500', stats: ['رد فوري على الاستفسارات', 'تتبع الطلبات تلقائياً', 'اقتراحات ذكية'], example: { q: 'هل المنتج متوفر؟', a: 'نعم! متوفر بـ 3 ألوان. هل تريد رؤية الصور؟' } },
    { icon: MessageSquare, gradient: 'from-azure-400 to-azure-600', stats: ['حل 80% من الاستفسارات', 'تقليل وقت الانتظار', 'تحويل ذكي للفريق'], example: { q: 'كيف أسترجع المنتج؟', a: 'يمكنك الاسترجاع خلال 14 يوم. هل تريد بدء طلب استرجاع؟' } },
    { icon: Target, gradient: 'from-amber-500 to-orange-500', stats: ['جمع بيانات العملاء', 'تأهيل العملاء المحتملين', 'إرسال للمبيعات'], example: { q: 'أريد معرفة المزيد', a: 'رائع! ما هو مجال عملك؟ سأوصلك بالخبير المناسب.' } },
    { icon: CalendarCheck, gradient: 'from-violet-500 to-purple-500', stats: ['حجز تلقائي', 'تذكيرات ذكية', 'إدارة الإلغاءات'], example: { q: 'أريد حجز موعد', a: 'متاح غداً الساعة 10 أو 2. أي وقت يناسبك؟' } },
  ] : [
    { icon: ShoppingBag, gradient: 'from-pink-500 to-rose-500', stats: ['Instant inquiry response', 'Auto order tracking', 'Smart recommendations'], example: { q: 'Is this product available?', a: 'Yes! Available in 3 colors. Want to see photos?' } },
    { icon: MessageSquare, gradient: 'from-azure-400 to-azure-600', stats: ['Resolve 80% of inquiries', 'Reduce wait time', 'Smart team handoff'], example: { q: 'How do I return an item?', a: 'Returns accepted within 14 days. Want to start a return?' } },
    { icon: Target, gradient: 'from-amber-500 to-orange-500', stats: ['Collect customer data', 'Qualify leads', 'Route to sales'], example: { q: 'I want to learn more', a: "Great! What industry are you in? I'll connect you with the right expert." } },
    { icon: CalendarCheck, gradient: 'from-violet-500 to-purple-500', stats: ['Auto booking', 'Smart reminders', 'Handle cancellations'], example: { q: 'I want to book an appointment', a: 'Available tomorrow at 10am or 2pm. Which works for you?' } },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-slate-600 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800/50 mb-6 shadow-sm rounded-full">
            <Briefcase className="w-4 h-4 text-azure-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{t.useCases.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.useCases.title}{' '}
            <span className="relative inline-block">
              <span className="text-azure-500">{t.useCases.titleHighlight}</span>
              <svg className="absolute -bottom-2 left-0 right-0 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="currentColor" strokeWidth="3" className="text-azure-500 opacity-30" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{language === 'ar' ? 'حلول جاهزة لمختلف أنواع الأعمال والصناعات' : 'Ready-made solutions for different business types and industries'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.useCases.cases.map((useCase, index) => {
            const details = caseDetails[index]
            const Icon = details.icon
            return (
              <div key={index} className="group border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-azure-400 dark:hover:border-azure-600 transition-all">
                <div className={`h-1 bg-gradient-to-r ${details.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${details.gradient} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{useCase.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {details.stats.map((stat, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 dark:bg-slate-700 text-xs text-gray-800 dark:text-gray-200">
                        <span className="w-1 h-1 bg-azure-500" />{stat}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-200 dark:border-slate-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{language === 'ar' ? 'مثال على المحادثة:' : 'Example conversation:'}</p>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-gray-300 dark:bg-slate-700 flex items-center justify-center flex-shrink-0"><User className="w-3 h-3 text-gray-700 dark:text-gray-300" /></div>
                        <span className="text-sm text-gray-800 dark:text-gray-200">{details.example.q}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-azure-100 dark:bg-azure-900/40 flex items-center justify-center flex-shrink-0"><Bot className="w-3 h-3 text-azure-600 dark:text-azure-300" /></div>
                        <span className="text-sm text-gray-800 dark:text-gray-200">{details.example.a}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
