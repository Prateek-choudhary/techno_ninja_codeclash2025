"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {t.cta.subtitle}
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          {t.cta.button}
        </Button>
      </div>
    </section>
  )
}
