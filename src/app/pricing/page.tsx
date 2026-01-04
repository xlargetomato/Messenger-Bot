'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Pricing />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}
