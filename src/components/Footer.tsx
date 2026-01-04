'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  const productLinks = [
    { href: '/#features', label: t.footer.links.features },
    { href: '/#pricing', label: t.footer.links.pricing },
  ]

  const companyLinks = [
    { href: '#', label: t.footer.links.about },
    { href: '#', label: t.footer.links.contact },
  ]

  const legalLinks = [
    { href: '#', label: t.footer.links.privacy },
    { href: '/terms', label: t.footer.links.terms },
  ]

  return (
    <footer className="border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-azure-500 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">ServiceHub</span>
            </Link>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t.footer.product}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
