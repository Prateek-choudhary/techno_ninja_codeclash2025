"use client"

import { useLanguage } from "@/contexts/language-context"
import { Coins, Trophy, Lock, Unlock } from "lucide-react"

export default function TokenSection() {
  const { t } = useLanguage()
  // Dummy data - in real app, this would come from your backend
  const questionsCompleted = 3
  const questionsRemaining = 2
  const tokensEarned = 150
  const isNFTUnlocked = questionsCompleted >= 5

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.tokens.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t.tokens.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Progress Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold">{t.tokens.progress.title}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">{t.tokens.progress.completed}</span>
                <span className="font-semibold">{questionsCompleted}/5</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${(questionsCompleted / 5) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">{t.tokens.progress.remaining}</span>
                <span className="font-semibold">{questionsRemaining}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">{t.tokens.progress.nextReward}</span>
                <span className="font-semibold">5 {t.tokens.progress.completed}</span>
              </div>
            </div>
          </div>

          {/* Rewards Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Coins className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold">{t.tokens.rewards.title}</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-300">{t.tokens.rewards.tokens}</span>
                  <span className="font-semibold">{tokensEarned} CLK</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${(tokensEarned / 250) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-300">{t.tokens.rewards.nft}</span>
                  {isNFTUnlocked ? (
                    <Unlock className="h-5 w-5 text-green-600" />
                  ) : (
                    <Lock className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isNFTUnlocked ? t.tokens.rewards.nftUnlocked : t.tokens.rewards.nftLocked}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 