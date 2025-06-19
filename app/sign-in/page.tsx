import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign In - ChatEDU",
  description: "Sign in to your ChatEDU account",
}

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Sign In to ChatEDU</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your email below to sign in to your account</p>
          </div>

          <div className="w-full max-w-sm space-y-4">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign in</CardTitle>
                <CardDescription className="text-center">Choose your preferred sign in method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white dark:bg-gray-950 px-2 text-gray-500 dark:text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Password
                      </label>
                      <Link
                        href="#"
                        className="text-sm text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>
              </CardContent>
              <CardFooter className="flex flex-col">
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="#"
                    className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
                  >
                    Sign up
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
