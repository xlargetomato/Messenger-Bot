'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { Menu, X, MessageCircle, Sun, Moon, Languages } from 'lucide-react'

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/#features', label: t.nav.features },
    { href: '/#pricing', label: t.nav.pricing },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-700 rounded-2xl shadow-lg">
            <div className="px-4 h-14 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-azure-500 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-semibold text-gray-900 dark:text-white">
                  ServiceHub
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-4">
                {/* Controls */}
                <div className="flex items-center border border-gray-200 dark:border-slate-600 divide-x divide-gray-200 dark:divide-slate-600 rounded-lg overflow-hidden">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Toggle language"
                  >
                    <Languages className="w-4 h-4" />
                    <span className="font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
                  </button>

                  <button
                    onClick={toggleTheme}
                    className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </button>
                </div>

                {/* CTA */}
                <Link
                  href="/#pricing"
                  className="px-4 py-2 bg-azure-500 hover:bg-azure-600 text-white text-sm font-medium transition-colors rounded-lg"
                >
                  {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden px-4 pb-4 border-t border-gray-200 dark:border-slate-700 rounded-b-2xl">
                <nav className="flex flex-col gap-1 py-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-200 dark:border-slate-700">
                  <div className="flex items-center border border-gray-200 dark:border-slate-600 divide-x divide-gray-200 dark:divide-slate-600 rounded-lg overflow-hidden">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      <Languages className="w-4 h-4" />
                      <span>{language === 'en' ? 'العربية' : 'English'}</span>
                    </button>
                    <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-200">
                      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    </button>
                  </div>
                  <Link
                    href="/#pricing"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 text-center px-4 py-2 bg-azure-500 text-white text-sm font-medium rounded-lg"
                  >
                    {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
