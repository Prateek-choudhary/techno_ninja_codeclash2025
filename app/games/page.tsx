"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { useWallet } from "@/contexts/wallet-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shuffle, RotateCcw, HelpCircle, SkipForward, Trophy, Clock, CheckCircle2, XCircle, Wallet, Loader2 } from "lucide-react"
import confetti from "canvas-confetti"
import { useToast } from "@/components/ui/use-toast"

interface Question {
  id: string
  title: string
  description: string
  options: string[]
  correctAnswer: number
  explanation: string
  status: "locked" | "inProgress" | "completed"
  score: number
  timeSpent: number
}

export default function GamesPage() {
  const { t } = useLanguage()
  const { address, balance, isConnecting, isConnected, connectWallet, rewardUser, mintBadge, isMinting } = useWallet()
  const { toast } = useToast()
  const [questions, setQuestions] = useState<Question[]>([])
  const [isShuffling, setIsShuffling] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [stats, setStats] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
    timeSpent: 0
  })

  useEffect(() => {
    // Initialize questions
    const initialQuestions: Question[] = [
      {
        id: "arrays-1",
        title: "Array Operations",
        description: "What is the time complexity of accessing an element in an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 0,
        explanation: "Array access is O(1) because we can directly access any element using its index.",
        status: "inProgress",
        score: 0,
        timeSpent: 0
      },
      {
        id: "linkedLists-1",
        title: "Linked List Basics",
        description: "What is the time complexity of inserting a node at the beginning of a linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 0,
        explanation: "Inserting at the beginning of a linked list is O(1) as we only need to update the head pointer.",
        status: "locked",
        score: 0,
        timeSpent: 0
      },
      {
        id: "stacks-1",
        title: "Stack Operations",
        description: "Which operation is NOT typically associated with a stack?",
        options: ["Push", "Pop", "Peek", "Enqueue"],
        correctAnswer: 3,
        explanation: "Enqueue is a queue operation, not a stack operation. Stacks use push, pop, and peek.",
        status: "locked",
        score: 0,
        timeSpent: 0
      },
      {
        id: "queues-1",
        title: "Queue Implementation",
        description: "What data structure is commonly used to implement a queue?",
        options: ["Array", "Linked List", "Both A and B", "Binary Tree"],
        correctAnswer: 2,
        explanation: "Queues can be implemented using either arrays or linked lists, each with its own advantages.",
        status: "locked",
        score: 0,
        timeSpent: 0
      },
      {
        id: "trees-1",
        title: "Tree Traversal",
        description: "Which traversal visits nodes in the order: left, root, right?",
        options: ["Pre-order", "In-order", "Post-order", "Level-order"],
        correctAnswer: 1,
        explanation: "In-order traversal visits the left subtree, then the root, and finally the right subtree.",
        status: "locked",
        score: 0,
        timeSpent: 0
      }
    ]
    setQuestions(initialQuestions)
    setStats(prev => ({ ...prev, totalQuestions: initialQuestions.length }))
  }, [t])

  const handleShuffle = () => {
    setIsShuffling(true)
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled)
    setTimeout(() => setIsShuffling(false), 500)
  }

  const handleAnswer = async (questionId: string, answerIndex: number) => {
    const question = questions.find(q => q.id === questionId)
    if (!question || question.status === "locked") return

    setSelectedAnswer(answerIndex)
    setShowExplanation(true)

    const isCorrect = answerIndex === question.correctAnswer
    const currentIndex = questions.findIndex(q => q.id === questionId)
    const nextQuestionIndex = currentIndex + 1

    // Update current question status
    setQuestions(prev => prev.map((q, index) => {
      if (q.id === questionId) {
        return {
          ...q,
          status: "completed",
          score: isCorrect ? 100 : 0,
          timeSpent: q.timeSpent + 1
        }
      }
      // Unlock next question if it exists
      if (index === nextQuestionIndex) {
        return {
          ...q,
          status: "inProgress"
        }
      }
      return q
    }))

    // Update stats
    setStats(prev => {
      const newStats = {
        ...prev,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        timeSpent: prev.timeSpent + 1
      }

      // Check if user achieved ≥70% score
      const scorePercentage = (newStats.correctAnswers / newStats.totalQuestions) * 100
      if (scorePercentage >= 70 && isConnected) {
        // Mint badge
        mintBadge().catch(console.error)
      }

      return newStats
    })

    if (isCorrect) {
      // Trigger celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })

      // Reward user with tokens if wallet is connected
      if (isConnected) {
        try {
          await rewardUser()
        } catch (error) {
          console.error("Error rewarding user:", error)
        }
      } else {
        toast({
          title: "Wallet Not Connected",
          description: "Connect your wallet to earn tokens for correct answers!",
          variant: "destructive",
        })
      }
    } else {
      toast({
        title: "Wrong Answer",
        description: "Try again!",
        variant: "destructive",
      })
    }
  }

  const getStatusColor = (status: Question["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "inProgress":
        return "bg-yellow-500"
      case "locked":
        return "bg-gray-500"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Wallet Connection */}
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">{t.games.wallet.title}</h2>
            <p className="text-muted-foreground">{t.games.wallet.subtitle}</p>
          </div>
          <div className="flex items-center gap-4">
            {isConnected ? (
              <>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Balance</p>
                  <p className="font-bold">{balance} CLK</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-mono text-sm">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </p>
                </div>
              </>
            ) : (
              <Button
                onClick={connectWallet}
                disabled={isConnecting}
                className="flex items-center gap-2"
              >
                <Wallet className="w-4 h-4" />
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Score</p>
              <p className="text-2xl font-bold">{stats.correctAnswers}/{stats.totalQuestions}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Time Spent</p>
              <p className="text-2xl font-bold">{stats.timeSpent}m</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Progress value={(stats.correctAnswers / stats.totalQuestions) * 100} className="h-2" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
              <p className="text-2xl font-bold">{Math.round((stats.correctAnswers / stats.totalQuestions) * 100)}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.games.title}</h1>
        <p className="text-xl text-muted-foreground">{t.games.subtitle}</p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant="outline"
          onClick={handleShuffle}
          disabled={isShuffling}
          className="flex items-center gap-2"
        >
          <Shuffle className="w-4 h-4" />
          {t.games.gameBoard.shuffle}
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {t.games.gameBoard.reset}
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2"
        >
          <HelpCircle className="w-4 h-4" />
          {t.games.gameBoard.hint}
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2"
        >
          <SkipForward className="w-4 h-4" />
          {t.games.gameBoard.skip}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {questions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className={`transition-all duration-300 ${
                  question.status === "locked" ? "opacity-50" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{question.title}</CardTitle>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(question.status)}`} />
                  </div>
                  <CardDescription>{question.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {question.options.map((option, optionIndex) => (
                      <Button
                        key={optionIndex}
                        variant={selectedAnswer === optionIndex ? "default" : "outline"}
                        className={`w-full justify-start ${
                          showExplanation && question.id === questions[0].id
                            ? optionIndex === question.correctAnswer
                              ? "bg-green-500 hover:bg-green-600"
                              : selectedAnswer === optionIndex
                              ? "bg-red-500 hover:bg-red-600"
                              : ""
                            : ""
                        }`}
                        onClick={() => handleAnswer(question.id, optionIndex)}
                        disabled={question.status === "locked" || question.status === "completed"}
                      >
                        {showExplanation && question.id === questions[0].id && optionIndex === question.correctAnswer && (
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                        )}
                        {showExplanation && question.id === questions[0].id && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer && (
                          <XCircle className="w-4 h-4 mr-2" />
                        )}
                        {option}
                      </Button>
                    ))}
                    {showExplanation && question.id === questions[0].id && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        {question.explanation}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{t.games.progress.score}</span>
                      <span>{question.score}%</span>
                    </div>
                    <Progress value={question.score} />
                    <div className="flex justify-between text-sm">
                      <span>{t.games.progress.timeSpent}</span>
                      <span>{question.timeSpent}m</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add Badge Claim Button */}
      {stats.correctAnswers / stats.totalQuestions >= 0.7 && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-lg">
          <Button
            onClick={mintBadge}
            disabled={!isConnected || isMinting}
            className="flex items-center gap-2"
          >
            {isMinting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Minting Badge...
              </>
            ) : (
              <>
                <Trophy className="w-4 h-4" />
                Claim DSA Khiladi Badge
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
} 