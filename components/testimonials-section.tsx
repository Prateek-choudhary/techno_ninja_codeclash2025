"use client"

import { useLanguage } from "@/contexts/language-context"

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "ClinkDrop has transformed how I study. The AI-powered practice questions are incredibly helpful!"
            </p>
            <div className="font-semibold">Sarah K.</div>
            <div className="text-sm text-gray-500">Computer Science Student</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "The citation-based chatbot is a game-changer. I can trust the answers I get."
            </p>
            <div className="font-semibold">Michael R.</div>
            <div className="text-sm text-gray-500">Medical Student</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "Interactive study guides make group study sessions so much more effective."
            </p>
            <div className="font-semibold">Priya S.</div>
            <div className="text-sm text-gray-500">Engineering Student</div>
          </div>
        </div>
      </div>
    </section>
  )
}
