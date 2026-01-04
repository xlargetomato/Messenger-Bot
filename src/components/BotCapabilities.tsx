'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Brain, GitBranch, Clock, Shield, Bot, Check, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function BotCapabilities() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before triggering animations
          setTimeout(() => {
            setIsVisible(true)
          }, 100)
        }
      },
      { threshold: 0.2 } // Increased threshold so it triggers when 20% is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const capabilities = language === 'ar' ? [
    {
      icon: Brain,
      title: 'فهم اللغة الطبيعية',
      description: 'يفهم البوت ما يقصده العملاء، حتى لو كتبوا بطرق مختلفة أو بأخطاء إملائية.',
      details: ['يتعرف على النية من السياق', 'يفهم اللهجات المختلفة', 'يتعامل مع الأخطاء الإملائية'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full">
          <p className="text-xs text-gray-600 dark:text-gray-500 mb-3">رسائل مختلفة، نفس الفهم:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 animate-slide-in-right">
              <ArrowRight className="w-3 h-3 text-azure-500" />
              <span className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3 py-1.5 text-sm text-gray-800 dark:text-gray-300">"كم السعر؟"</span>
            </div>
            <div className="flex items-center gap-2 animate-slide-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <ArrowRight className="w-3 h-3 text-azure-500" />
              <span className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3 py-1.5 text-sm text-gray-800 dark:text-gray-300">"ابي اعرف الاسعار"</span>
            </div>
            <div className="flex items-center gap-2 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <ArrowRight className="w-3 h-3 text-azure-500" />
              <span className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3 py-1.5 text-sm text-gray-800 dark:text-gray-300">"بكم؟"</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-300 dark:border-slate-700 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-emerald-600 dark:text-emerald-400">تم التعرف: استفسار عن السعر</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: GitBranch,
      title: 'تدفقات محادثة ذكية',
      description: 'أنشئ محادثات متفرعة تتكيف مع ردود العميل وتوجهه للمسار الصحيح.',
      details: ['تفرعات شرطية متعددة', 'حفظ بيانات المحادثة', 'إعادة استخدام التدفقات'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full">
          <div className="flex flex-col items-center">
            <div className="bg-azure-500 px-4 py-2 text-sm text-white mb-3 animate-scale-in">هل تريد المساعدة؟</div>
            <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.3s' }} />
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.5s' }} />
                <div className="bg-emerald-100 dark:bg-emerald-600/20 border border-emerald-400 dark:border-emerald-600/30 px-3 py-1.5 text-xs text-emerald-700 dark:text-emerald-400 animate-scale-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>نعم</div>
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.9s' }} />
                <div className="bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>عرض الخيارات</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.5s' }} />
                <div className="bg-red-100 dark:bg-red-600/20 border border-red-400 dark:border-red-600/30 px-3 py-1.5 text-xs text-red-700 dark:text-red-400 animate-scale-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>لا</div>
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.9s' }} />
                <div className="bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>إنهاء المحادثة</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Clock,
      title: 'متاح على مدار الساعة',
      description: 'البوت يعمل 24/7 بدون توقف، يرد على العملاء حتى في العطلات وخارج ساعات العمل.',
      details: ['لا يحتاج راحة أو إجازات', 'رد فوري في أي وقت', 'تقليل وقت الانتظار'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full flex flex-col items-center justify-center">
          <div className="relative animate-scale-in">
            <div className="text-6xl font-bold text-gray-900 dark:text-white">24<span className="text-azure-500">/</span>7</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-500 text-sm mt-3 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>متصل دائماً</p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>صباحاً</span>
            <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>ليلاً</span>
            <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>عطلات</span>
          </div>
        </div>
      ),
    },
    {
      icon: Shield,
      title: 'آمن وموثوق',
      description: 'بياناتك وبيانات عملائك محمية بأعلى معايير الأمان والتشفير.',
      details: ['تشفير البيانات', 'نسخ احتياطي تلقائي', 'توافق مع GDPR'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full">
          <div className="flex items-center justify-center mb-4 animate-scale-in">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 border-2 border-emerald-400 dark:border-emerald-500/50 flex items-center justify-center">
              <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm animate-slide-in-left"><Check className="w-4 h-4 text-emerald-500" /><span className="text-gray-700 dark:text-gray-400">SSL/TLS Encryption</span></div>
            <div className="flex items-center gap-2 text-sm animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}><Check className="w-4 h-4 text-emerald-500" /><span className="text-gray-700 dark:text-gray-400">Data Backup</span></div>
            <div className="flex items-center gap-2 text-sm animate-slide-in-left" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}><Check className="w-4 h-4 text-emerald-500" /><span className="text-gray-700 dark:text-gray-400">GDPR Compliant</span></div>
          </div>
        </div>
      ),
    },
  ] : [
    {
      icon: Brain,
      title: 'Natural Language Understanding',
      description: 'Bot understands what customers mean, even with typos, slang, or different phrasings.',
      details: ['Recognizes intent from context', 'Handles typos gracefully', 'Understands variations'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full">
          <p className="text-xs text-gray-600 dark:text-gray-500 mb-3">Different messages, same understanding:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 animate-slide-in-right">
              <ArrowRight className="w-3 h-3 text-azure-500" />
              <span className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3 py-1.5 text-sm text-gray-800 dark:text-gray-300">"What's the price?"</span>
            </div>
            <div className="flex items-center gap-2 animate-slide-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <ArrowRight className="w-3 h-3 text-azure-500" />
              <span className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3 py-1.5 text-sm text-gray-800 dark:text-gray-300">"how much does it cost"</span>
            </div>
            <div className="flex items-center gap-2 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <ArrowRight className="w-3 h-3 text-azure-500" />
              <span className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3 py-1.5 text-sm text-gray-800 dark:text-gray-300">"pricing pls"</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-300 dark:border-slate-700 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-emerald-600 dark:text-emerald-400">Detected: Pricing inquiry</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: GitBranch,
      title: 'Smart Conversation Flows',
      description: 'Create branching conversations that adapt to customer responses and guide them to the right path.',
      details: ['Multiple conditional branches', 'Save conversation data', 'Reusable flow templates'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full">
          <div className="flex flex-col items-center">
            <div className="bg-azure-500 px-4 py-2 text-sm text-white mb-3 animate-scale-in">Need help?</div>
            <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.3s' }} />
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.5s' }} />
                <div className="bg-emerald-100 dark:bg-emerald-600/20 border border-emerald-400 dark:border-emerald-600/30 px-3 py-1.5 text-xs text-emerald-700 dark:text-emerald-400 animate-scale-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>Yes</div>
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.9s' }} />
                <div className="bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>Show options</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.5s' }} />
                <div className="bg-red-100 dark:bg-red-600/20 border border-red-400 dark:border-red-600/30 px-3 py-1.5 text-xs text-red-700 dark:text-red-400 animate-scale-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>No</div>
                <div className="w-px h-4 bg-gray-400 dark:bg-slate-600 animate-grow-height" style={{ animationDelay: '0.9s' }} />
                <div className="bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>End chat</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      description: 'Bot works around the clock without breaks, responding to customers even on holidays and after hours.',
      details: ['No breaks or vacations needed', 'Instant response anytime', 'Reduced wait times'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full flex flex-col items-center justify-center">
          <div className="relative animate-scale-in">
            <div className="text-6xl font-bold text-gray-900 dark:text-white">24<span className="text-azure-500">/</span>7</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-500 text-sm mt-3 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Always Online</p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>Morning</span>
            <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>Night</span>
            <span className="px-2 py-1 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-xs text-gray-700 dark:text-gray-400 animate-scale-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>Holidays</span>
          </div>
        </div>
      ),
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data and customer data protected with top security standards and encryption.',
      details: ['End-to-end encryption', 'Automatic backups', 'GDPR compliant'],
      visual: (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 border border-gray-300 dark:border-slate-700 h-full">
          <div className="flex items-center justify-center mb-4 animate-scale-in">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 border-2 border-emerald-400 dark:border-emerald-500/50 flex items-center justify-center">
              <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm animate-slide-in-left"><Check className="w-4 h-4 text-emerald-500" /><span className="text-gray-700 dark:text-gray-400">SSL/TLS Encryption</span></div>
            <div className="flex items-center gap-2 text-sm animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}><Check className="w-4 h-4 text-emerald-500" /><span className="text-gray-700 dark:text-gray-400">Data Backup</span></div>
            <div className="flex items-center gap-2 text-sm animate-slide-in-left" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}><Check className="w-4 h-4 text-emerald-500" /><span className="text-gray-700 dark:text-gray-400">GDPR Compliant</span></div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 border-2 border-azure-200 dark:border-azure-900 bg-gradient-to-r from-azure-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/50 mb-6 shadow-md rounded-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Bot className="w-4 h-4 text-azure-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{language === 'ar' ? 'قدرات البوت' : 'Bot Capabilities'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {language === 'ar' ? 'ماذا يمكن للبوت ' : 'What Your Bot '}
            <span className="relative inline-block text-azure-500">
              {language === 'ar' ? 'أن يفعل' : 'Can Do'}
              <span className="absolute -inset-1 bg-azure-500/10 blur-xl rounded-lg -z-10"></span>
            </span>
          </h2>
          <p className={`text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>{language === 'ar' ? 'قدرات متقدمة تجعل البوت يتصرف كموظف حقيقي' : 'Advanced capabilities that make your bot act like a real employee'}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            return (
              <div key={index} className={`group border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-azure-400 dark:hover:border-azure-600 transition-all ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-azure-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{cap.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{cap.description}</p>
                    <ul className="space-y-2">
                      {cap.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"><span className="w-1.5 h-1.5 bg-azure-500" />{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-slate-900">{cap.visual}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

