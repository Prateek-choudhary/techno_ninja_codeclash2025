"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navLinks = [
  { key: "home", href: "/" },
  { key: "games", href: "/games" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="border-b border-gray-100 bg-white dark:bg-gray-950 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/clinkdrop-logo.png" 
            alt="ClinkDrop Logo" 
            width={40} 
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-xl">ClinkDrop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.key}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {t.nav[link.key as keyof typeof t.nav]}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ModeToggle />

          <a href="https://spark8-ai-part-3.onrender.com" target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:flex bg-green-600 hover:bg-green-700">{t.nav.tryClinkDrop}</Button>
          </a>

          <Link href="/sign-in" className="hidden md:block">
            <Button variant="ghost" className="font-medium">
              {t.nav.signIn}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <a href="https://spark8-ai-part-3.onrender.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-green-600 hover:bg-green-700">{t.nav.tryClinkDrop}</Button>
              </a>
              <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  {t.nav.signIn}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
