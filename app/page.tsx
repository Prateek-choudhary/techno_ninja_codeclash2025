import HeroSection from "@/components/hero-section"
import FloatingCards from "@/components/floating-cards"
import FeaturesSection from "@/components/features-section"
import ChatbotSection from "@/components/chatbot-section"
import TokenSection from "@/components/token-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <FloatingCards />
        <HeroSection />
        <div className="flex justify-center mt-16 mb-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
      <FeaturesSection />
      <ChatbotSection />
      <TokenSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  )
}

