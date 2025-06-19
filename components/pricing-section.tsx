"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function PricingSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{t.pricing.plans.free.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t.pricing.plans.free.description}</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{t.pricing.plans.pro.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t.pricing.plans.pro.description}</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">Upgrade to Pro</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
