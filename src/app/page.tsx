'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BotCapabilities from '@/components/BotCapabilities'
import AutomationDemo from '@/components/AutomationDemo'
import UseCases from '@/components/UseCases'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BotCapabilities />
      <AutomationDemo />
      <UseCases />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
