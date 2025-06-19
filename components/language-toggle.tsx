"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
    >
      <Image
        src={language === "en" ? "/us-flag.svg" : "/in-flag.svg"}
        alt={language === "en" ? "English" : "हिंदी"}
        width={20}
        height={15}
        className="rounded-sm"
      />
      <span className="text-sm font-medium">
        {language === "en" ? "English" : "हिंदी"}
      </span>
    </button>
  )
} 