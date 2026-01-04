'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight, Bot, Sparkles, Zap, Send } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const { t, language } = useLanguage()
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', text: string, id: number }>>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const conversation = language === 'ar' ? [
    { type: 'user' as const, text: 'ما هي أسعاركم؟', delay: 1000 },
    { type: 'bot' as const, text: 'لدينا 3 خطط تبدأ من $19/شهر. هل تريد التفاصيل؟', delay: 2000 },
    { type: 'user' as const, text: 'نعم، أرسل التفاصيل', delay: 1500 },
    { type: 'bot' as const, text: 'بالتأكيد! الخطة الأساسية $19، المحترف $49، والمؤسسات حسب الطلب. جميعها تشمل تجربة مجانية 14 يوم!', delay: 2500 },
  ] : [
    { type: 'user' as const, text: 'What are your prices?', delay: 1000 },
    { type: 'bot' as const, text: 'We have 3 plans starting at $19/mo. Want details?', delay: 2000 },
    { type: 'user' as const, text: 'Yes, send details', delay: 1500 },
    { type: 'bot' as const, text: 'Sure! Starter $19, Professional $49, and Enterprise custom pricing. All include 14-day free trial!', delay: 2500 },
  ]

  // Reset conversation when language changes
  useEffect(() => {
    setMessages([])
    setCurrentStep(0)
    setIsTyping(false)
  }, [language])

  useEffect(() => {
    if (currentStep >= conversation.length) {
      // Reset after all messages shown
      const resetTimer = setTimeout(() => {
        setMessages([])
        setCurrentStep(0)
        setIsTyping(false)
      }, 5000)
      return () => clearTimeout(resetTimer)
    }

    const timer = setTimeout(() => {
      const currentMessage = conversation[currentStep]
      
      if (currentMessage.type === 'bot') {
        setIsTyping(true)
        const typingTimer = setTimeout(() => {
          setMessages(prev => [...prev, { ...currentMessage, id: Date.now() + Math.random() }])
          setIsTyping(false)
          setCurrentStep(prev => prev + 1)
        }, 1500)
        return () => clearTimeout(typingTimer)
      } else {
        setMessages(prev => [...prev, { ...currentMessage, id: Date.now() + Math.random() }])
        setCurrentStep(prev => prev + 1)
      }
    }, currentStep === 0 ? conversation[currentStep].delay : conversation[currentStep - 1]?.delay || 1000)

    return () => clearTimeout(timer)
  }, [currentStep, language])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  return (
    <section className="pt-28 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-azure-200 dark:border-azure-900 bg-gradient-to-r from-azure-50 via-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/50 shadow-lg rounded-full hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-azure-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-8 animate-slide-up">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-azure-500 hover:bg-azure-600 text-white font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300">
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-gray-900 dark:text-white font-semibold border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all hover:scale-105 duration-300">
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Bento Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Main Chat Preview - Light theme friendly */}
          <div className="md:col-span-2 bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-6 min-h-[380px] relative overflow-hidden hover:border-azure-400 dark:hover:border-azure-600 transition-all duration-300 group">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            
            <div ref={chatContainerRef} className="mt-12 mb-16 space-y-3 h-[240px] overflow-y-auto scrollbar-hide scroll-smooth">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-2 ${message.type === 'bot' ? 'justify-end' : ''} animate-slide-up`}>
                  {message.type === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">U</span>
                    </div>
                  )}
                  <div className={`${message.type === 'user' ? 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700' : 'bg-azure-500'} rounded-[18px] px-3 py-2 max-w-[75%]`}>
                    <p className={`${message.type === 'user' ? 'text-gray-800 dark:text-gray-300' : 'text-white'} text-xs leading-relaxed`}>{message.text}</p>
                  </div>
                  {message.type === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-azure-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-end animate-slide-up">
                  <div className="bg-azure-500 rounded-[18px] px-4 py-2.5">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-azure-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-full px-4 py-2.5 border border-gray-300 dark:border-slate-700 shadow-sm">
                <input type="text" placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'} className="flex-1 bg-transparent text-xs text-gray-700 dark:text-gray-400 placeholder-gray-500 outline-none" disabled />
                <button className="p-1.5 bg-azure-500 rounded-full text-white hover:bg-azure-600 transition-colors"><Send className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>

          {/* Side cards - Light theme friendly */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-azure-50 dark:bg-slate-800 border border-azure-200 dark:border-slate-700 p-5 hover:border-azure-400 dark:hover:border-azure-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div className="w-10 h-10 bg-azure-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"><Sparkles className="w-5 h-5 text-white" /></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{language === 'ar' ? 'مدعوم بالذكاء الاصطناعي' : 'AI-Powered'}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{language === 'ar' ? 'ردود ذكية تفهم السياق' : 'Smart responses that understand context'}</p>
            </div>
            <div className="flex-1 bg-cyan-50 dark:bg-slate-800 border border-cyan-200 dark:border-slate-700 p-5 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"><Zap className="w-5 h-5 text-white" /></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{language === 'ar' ? 'أتمتة 24/7' : '24/7 Automation'}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{language === 'ar' ? 'يعمل حتى عندما تكون بعيداً' : "Works even when you're away"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
