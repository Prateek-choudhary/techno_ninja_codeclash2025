"use client"

import { useLanguage } from "@/contexts/language-context"
import { Brain, BookOpen, FileQuestion, MessageSquare, BarChart, Zap } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-green-600" />,
    title: "AI-Powered Learning",
    description:
      "Our advanced AI understands your learning style and adapts to provide personalized educational content.",
  },
  {
    icon: <FileQuestion className="h-10 w-10 text-green-600" />,
    title: "Dynamic Practice Questions",
    description: "Generate unlimited practice questions tailored to your knowledge gaps and learning objectives.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-green-600" />,
    title: "Citation-Based Chatbots",
    description: "Get accurate answers with sources cited, ensuring reliable information for your studies.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-green-600" />,
    title: "Interactive Study Guides",
    description: "Create comprehensive study guides that adapt to your progress and highlight areas needing review.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-green-600" />,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and performance insights.",
  },
  {
    icon: <Zap className="h-10 w-10 text-green-600" />,
    title: "Instant Feedback",
    description: "Receive immediate feedback on your answers to accelerate your learning and understanding.",
  },
]

export default function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">{t.features.items.practice.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t.features.items.practice.description}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">{t.features.items.chatbot.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t.features.items.chatbot.description}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">{t.features.items.guides.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t.features.items.guides.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
