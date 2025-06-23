import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <Image src="/logo.png" alt="EduBlock Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">EduBlock</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AI-powered educational tools for students and educators.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-500">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-500">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} EduBlock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
