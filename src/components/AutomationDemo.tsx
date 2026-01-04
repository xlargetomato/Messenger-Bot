'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Zap, ShoppingCart, Headphones, Package, Calendar, Search, Image, DollarSign, Sparkles, HelpCircle, Hash, Lightbulb, User, FileText, Truck, Link, Timer, CalendarDays, Check, Bell, Smartphone, CheckCircle2 } from 'lucide-react'

export default function AutomationDemo() {
  const { language } = useLanguage()

  const scenarios = language === 'ar' ? [
    { icon: ShoppingCart, trigger: 'عميل يسأل عن منتج', triggerExample: '"هل المنتج X متوفر؟"', actions: [{ text: 'البحث في قاعدة البيانات', icon: Search }, { text: 'إرسال صورة المنتج', icon: Image }, { text: 'عرض السعر والتوفر', icon: DollarSign }, { text: 'اقتراح منتجات مشابهة', icon: Sparkles }], result: 'العميل يحصل على كل المعلومات فوراً', color: 'azure' },
    { icon: Headphones, trigger: 'طلب دعم فني', triggerExample: '"عندي مشكلة في الطلب"', actions: [{ text: 'تحديد نوع المشكلة', icon: HelpCircle }, { text: 'طلب رقم الطلب', icon: Hash }, { text: 'عرض حلول شائعة', icon: Lightbulb }, { text: 'تحويل للفريق إذا لزم', icon: User }], result: 'حل المشكلة أو تصعيدها للفريق', color: 'amber' },
    { icon: Package, trigger: 'استفسار عن الشحن', triggerExample: '"وين وصل طلبي؟"', actions: [{ text: 'طلب رقم التتبع', icon: FileText }, { text: 'جلب حالة الشحن', icon: Truck }, { text: 'إرسال رابط التتبع', icon: Link }, { text: 'تقدير وقت الوصول', icon: Timer }], result: 'العميل يعرف مكان طلبه بالضبط', color: 'emerald' },
    { icon: Calendar, trigger: 'حجز موعد', triggerExample: '"أبي أحجز موعد"', actions: [{ text: 'عرض الأوقات المتاحة', icon: CalendarDays }, { text: 'تأكيد الموعد', icon: Check }, { text: 'إرسال تذكير', icon: Bell }, { text: 'إضافة للتقويم', icon: Smartphone }], result: 'الموعد محجوز ومؤكد تلقائياً', color: 'violet' },
  ] : [
    { icon: ShoppingCart, trigger: 'Customer asks about product', triggerExample: '"Is product X available?"', actions: [{ text: 'Search database', icon: Search }, { text: 'Send product image', icon: Image }, { text: 'Show price & availability', icon: DollarSign }, { text: 'Suggest similar items', icon: Sparkles }], result: 'Customer gets all info instantly', color: 'azure' },
    { icon: Headphones, trigger: 'Support request received', triggerExample: '"I have an issue with my order"', actions: [{ text: 'Identify issue type', icon: HelpCircle }, { text: 'Request order number', icon: Hash }, { text: 'Show common solutions', icon: Lightbulb }, { text: 'Escalate if needed', icon: User }], result: 'Issue resolved or escalated to team', color: 'amber' },
    { icon: Package, trigger: 'Shipping inquiry', triggerExample: '"Where is my order?"', actions: [{ text: 'Request tracking number', icon: FileText }, { text: 'Fetch shipping status', icon: Truck }, { text: 'Send tracking link', icon: Link }, { text: 'Estimate delivery time', icon: Timer }], result: 'Customer knows exact order location', color: 'emerald' },
    { icon: Calendar, trigger: 'Appointment booking', triggerExample: '"I want to book an appointment"', actions: [{ text: 'Show available slots', icon: CalendarDays }, { text: 'Confirm booking', icon: Check }, { text: 'Send reminder', icon: Bell }, { text: 'Add to calendar', icon: Smartphone }], result: 'Appointment booked & confirmed automatically', color: 'violet' },
  ]

  const iconColorClasses = {
    azure: 'text-azure-500 bg-azure-500/10 border-azure-500/20',
    amber: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    emerald: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    violet: 'text-violet-500 bg-violet-500/10 border-violet-500/20',
  }

  return (
    <section className="py-24 px-4 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-200 dark:border-emerald-900 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-slate-800 dark:to-slate-800/50 mb-6 shadow-md rounded-full">
            <Zap className="w-4 h-4 text-azure-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{language === 'ar' ? 'الأتمتة في العمل' : 'Automation In Action'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'ar' ? 'شاهد كيف يعمل ' : 'See How It '}
            <span className="relative inline-block">
              <span className="text-azure-500">{language === 'ar' ? 'البوت' : 'Works'}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-azure-500/20 -skew-x-12 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{language === 'ar' ? 'كل سيناريو يتم التعامل معه تلقائياً من البداية للنهاية' : 'Every scenario handled automatically from start to finish'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scenario, index) => {
            const TriggerIcon = scenario.icon
            return (
              <div key={index} className="border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 border flex items-center justify-center ${iconColorClasses[scenario.color as keyof typeof iconColorClasses]}`}>
                      <TriggerIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{scenario.trigger}</h3>
                      <p className="text-sm text-gray-500 italic">{scenario.triggerExample}</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-slate-900 p-4 mb-4 border border-gray-200 dark:border-slate-700">
                    <p className="text-xs text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-1"><Zap className="w-3 h-3" />{language === 'ar' ? 'الإجراءات التلقائية' : 'Automated Actions'}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {scenario.actions.map((action, actionIndex) => {
                        const ActionIcon = action.icon
                        return (
                          <div key={actionIndex} className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-2 border border-gray-200 dark:border-slate-700">
                            <ActionIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                            <span className="text-xs text-gray-800 dark:text-gray-200">{action.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-600 dark:text-emerald-500">{language === 'ar' ? 'النتيجة' : 'Result'}</p>
                      <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{scenario.result}</p>
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
