import type { Metadata } from "next"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Pricing - ClinkDrop",
  description: "Affordable plans for students, educators, and institutions.",
}

export default function PricingPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
        <PricingSection />
        <FAQSection />
      </div>
    </div>
  )
}
