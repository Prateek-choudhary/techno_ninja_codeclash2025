"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Send } from "lucide-react"

export default function ChatbotSection() {
  const { t } = useLanguage()
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "assistant"; content: string }>>([])

  const handleSend = () => {
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory(prev => [...prev, { role: "user", content: message }])

    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          role: "assistant",
          content: "This is a dummy response. The actual AI integration will be implemented later."
        }
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.chatbot.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t.chatbot.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Chat History */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4 h-[400px] overflow-y-auto">
            {chatHistory.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 h-full flex flex-col justify-center">
                <p className="mb-4">{t.chatbot.example}</p>
                <div className="space-y-2">
                  {t.chatbot.examples.map((example, index) => (
                    <p key={index} className="text-sm">{example}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === "user"
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.chatbot.placeholder}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button
              onClick={handleSend}
              className="bg-green-600 hover:bg-green-700"
              disabled={!message.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 