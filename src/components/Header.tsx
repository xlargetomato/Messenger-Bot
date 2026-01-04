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
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="px-4 h-14 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-semibold text-zinc-900 dark:text-white">
                  MessengerBots
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-2">
                {/* Controls */}
                <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-lg divide-x divide-zinc-200 dark:divide-zinc-700">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    aria-label="Toggle language"
                  >
                    <Languages className="w-4 h-4" />
                    <span className="font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
                  </button>

                  <button
                    onClick={toggleTheme}
                    className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </button>
                </div>

                {/* CTA */}
                <Link
                  href="/#pricing"
                  className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                >
                  {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden px-4 pb-4 border-t border-zinc-200 dark:border-zinc-800">
                <nav className="flex flex-col gap-1 py-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-lg divide-x divide-zinc-200 dark:divide-zinc-700">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <Languages className="w-4 h-4" />
                      <span>{language === 'en' ? 'العربية' : 'English'}</span>
                    </button>
                    <button onClick={toggleTheme} className="p-2 text-zinc-600 dark:text-zinc-400">
                      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    </button>
                  </div>
                  <Link
                    href="/#pricing"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 text-center px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-lg"
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
