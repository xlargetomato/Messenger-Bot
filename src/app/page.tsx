'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Divider />
      <Features />
      <Divider />
      <Pricing />
      <Divider />
      <FAQ />
      <Divider />
      <CTA />
      <Footer />
    </main>
  )
}
