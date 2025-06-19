"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, MessageSquare, Trash2 } from "lucide-react"

type ChatHistory = {
  id: string
  title: string
  date: string
}

export default function ChatSidebar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    { id: "1", title: "Calculus Integration Methods", date: "2 hours ago" },
    { id: "2", title: "Physics - Newton's Laws", date: "Yesterday" },
    { id: "3", title: "Literary Analysis Help", date: "3 days ago" },
    { id: "4", title: "Chemistry Equations", date: "1 week ago" },
  ])

  const filteredHistory = chatHistory.filter((chat) => chat.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleDeleteChat = (id: string) => {
    setChatHistory(chatHistory.filter((chat) => chat.id !== id))
  }

  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-800 h-full flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="p-4">
        <Button className="w-full bg-green-600 hover:bg-green-700 mb-4">
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>

        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search chats..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-2">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-2 mb-2">RECENT CHATS</h3>
          <ul className="space-y-1">
            {filteredHistory.map((chat) => (
              <li key={chat.id}>
                <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer group">
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="h-4 w-4 text-gray-500 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{chat.title}</p>
                      <p className="text-xs text-gray-500">{chat.date}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 h-6 w-6"
                    onClick={() => handleDeleteChat(chat.id)}
                  >
                    <Trash2 className="h-3 w-3 text-gray-500" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p className="mb-1">Free Plan</p>
          <p>5/10 questions remaining today</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2">
            <div className="bg-green-600 h-1.5 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
