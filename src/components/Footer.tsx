'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { MessageCircle, Sun, Moon, Languages } from 'lucide-react'

export default function Footer() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <footer className="py-12 px-4 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">MessengerBots</span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">{t.footer.product}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {t.footer.links.features}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {t.footer.links.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {t.footer.links.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {t.footer.links.privacy}
                </a>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {t.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            {t.footer.copyright}
          </p>
          
          <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-lg divide-x divide-zinc-200 dark:divide-zinc-700">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
