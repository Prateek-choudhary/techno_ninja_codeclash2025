"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          {t.hero.cta}
        </Button>
      </div>
    </section>
  )
} 