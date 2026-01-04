'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { translations, Language } from '@/i18n/translations'

type TranslationType = typeof translations.en

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: TranslationType
  dir: 'ltr' | 'rtl'
}

const defaultContext: LanguageContextType = {
  language: 'en',
  toggleLanguage: () => {},
  t: translations.en,
  dir: 'ltr',
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'
  const t = translations[language] as TranslationType

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
