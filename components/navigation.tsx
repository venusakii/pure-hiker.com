"use client"

import { useState, useEffect } from "react"
import { Droplet } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Droplet className="w-8 h-8 text-primary" />
          <span className="text-2xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            PURE HIKER
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-foreground/80 hover:text-foreground transition-colors">
            Products
          </Link>
          <Link href="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="/reviews" className="text-foreground/80 hover:text-foreground transition-colors">
            Reviews
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        
      </div>
    </nav>
  )
}
