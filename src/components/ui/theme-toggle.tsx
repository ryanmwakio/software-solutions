"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  className?: string
  variant?: "default" | "header"
}

export function ThemeToggle({ className, variant = "default" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted before accessing window or theme
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    // If current theme is system, check system preference and toggle accordingly
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const newTheme = systemPrefersDark ? "light" : "dark"
      setTheme(newTheme)
    } else {
      // Toggle between light and dark
      const newTheme = theme === "light" ? "dark" : "light"
      setTheme(newTheme)
    }
  }

  // Get the actual applied theme for icon display - only after mounting
  const getAppliedTheme = () => {
    if (!mounted) return 'light' // Default to light during SSR
    if (theme === "system") {
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    }
    return theme
  }

  const appliedTheme = getAppliedTheme()

  // Show loading state during SSR to prevent hydration mismatch
  if (!mounted) {
    if (variant === "header") {
      return (
        <div className={cn(
          "relative h-9 w-9 rounded-md p-2 transition-colors",
          "text-foreground",
          className
        )}>
          <Sun className="h-5 w-5 transition-all rotate-0 scale-100" />
          <span className="sr-only">Toggle theme</span>
        </div>
      )
    }
    return (
      <Button
        variant="ghost"
        size="sm"
        className={cn("h-9 w-9 px-0", className)}
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  if (variant === "header") {
    return (
      <button
        onClick={handleToggle}
        className={cn(
          "relative h-9 w-9 rounded-md p-2 transition-colors hover:bg-accent/10",
          "text-foreground hover:text-accent",
          className
        )}
        title={`Current theme: ${theme} (${appliedTheme})`}
      >
        <Sun className={`h-5 w-5 transition-all ${appliedTheme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
        <Moon className={`absolute left-2 top-2 h-5 w-5 transition-all ${appliedTheme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className={cn("h-9 w-9 px-0", className)}
      title={`Current theme: ${theme} (${appliedTheme})`}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${appliedTheme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${appliedTheme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}