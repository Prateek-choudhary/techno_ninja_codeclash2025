"use client"

export default function FloatingCards() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-[50%] rounded-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-20 dark:from-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute right-[25%] top-0 h-[750px] w-[750px] rounded-full bg-gradient-to-r from-purple-50 to-pink-50 opacity-20 dark:from-purple-900/20 dark:to-pink-900/20" />
      <div className="absolute left-[25%] top-0 h-[750px] w-[750px] rounded-full bg-gradient-to-r from-pink-50 to-blue-50 opacity-20 dark:from-pink-900/20 dark:to-blue-900/20" />
    </div>
  )
} 