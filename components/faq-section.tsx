import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is ClinkDrop?",
    answer:
      "ClinkDrop is an AI-powered educational platform that provides dynamic practice questions, citation-based chatbots, interactive study guides, and more to help students learn more effectively.",
  },
  {
    question: "How does the AI generate practice questions?",
    answer:
      "Our AI analyzes your learning patterns, identifies knowledge gaps, and generates targeted questions to help strengthen your understanding of specific topics. The questions adapt to your skill level as you progress.",
  },
  {
    question: "Are the AI-generated answers reliable?",
    answer:
      "Yes, our citation-based chatbots provide answers with references to credible sources, ensuring the information is accurate and trustworthy. You can verify the information through the provided citations.",
  },
  {
    question: "Can I use ClinkDrop for any subject?",
    answer:
      "Yes, ClinkDrop supports a wide range of subjects including mathematics, science, history, literature, computer science, and more. Our AI is trained on diverse educational content to assist with virtually any subject.",
  },
  {
    question: "Is there a limit to how many questions I can generate?",
    answer:
      "Free users can generate up to 10 practice questions per day. Premium subscribers have unlimited access to question generation and other advanced features.",
  },
  {
    question: "How can educators use ClinkDrop in their classrooms?",
    answer:
      "Educators can use ClinkDrop to create custom content for students, track student progress, identify areas where students need additional support, and integrate with existing learning management systems (LMS).",
  },
]

export default function FAQSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about ClinkDrop and how it can enhance your learning experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
