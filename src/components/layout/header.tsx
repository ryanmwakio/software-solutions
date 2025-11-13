"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Custom Software Development", href: "/services/custom-software" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "IT Support", href: "/services/it-support" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "AI & Automation", href: "/services/ai-automation" },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
        : "bg-transparent"
    )}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className={cn(
              "font-heading font-bold text-xl transition-colors",
              isScrolled ? "text-foreground" : "text-foreground dark:text-white"
            )}>
              Muoka Software Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className={cn(
                      "flex items-center space-x-1 hover:text-accent transition-colors cursor-pointer font-medium",
                      isScrolled ? "text-foreground" : "text-foreground dark:text-white"
                    )}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                    
                    {/* Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-lg border border-border py-2 z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-accent transition-colors font-medium",
                      isScrolled ? "text-foreground" : "text-foreground dark:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <ThemeToggle variant="header" />
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button variant="gradient" size="sm" asChild>
                <Link href="/contact">Start Project</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "lg:hidden p-2 hover:text-accent transition-colors",
              isScrolled ? "text-foreground" : "text-foreground dark:text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-foreground hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-sm text-muted-foreground hover:text-accent transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <div className="flex justify-center mb-2">
                  <ThemeToggle variant="header" />
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
                <Button variant="gradient" size="sm" asChild>
                  <Link href="/contact">Start Project</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}