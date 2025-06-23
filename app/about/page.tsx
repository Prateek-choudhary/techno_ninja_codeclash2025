import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About - EduBlock",
  description: "Learn about our mission to transform education with AI.",
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About EduBlock</h1>

          <div className="mb-12 relative h-64 md:h-96 rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=1200" alt="EduBlock Team" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              At EduBlock, we're on a mission to transform education through the power of artificial intelligence. We
              believe that every student deserves access to high-quality educational resources and personalized learning
              experiences that adapt to their unique needs and learning styles.
            </p>

            <h2>Our Story</h2>
            <p>
              Founded in 2023 by a team of educators, AI researchers, and education technology experts, EduBlock was born
              from a simple observation: students learn best when they receive immediate, personalized feedback and
              support. Traditional educational models often struggle to provide this level of individualization at
              scale.
            </p>

            <p>
              We set out to build AI-powered tools that could provide students with instant feedback, generate practice
              questions tailored to their knowledge gaps, and create interactive study guides that adapt to their
              learning progress.
            </p>

            <h2>Our Team</h2>
            <p>
              Our diverse team brings together expertise in education, artificial intelligence, user experience design,
              and software engineering. We're united by our passion for improving educational outcomes and making
              learning more engaging and effective.
            </p>

            <div className="mt-8 flex justify-center">
              <Button className="bg-green-600 hover:bg-green-700">Join Our Team</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
