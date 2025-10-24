"use client"

import { useState, useEffect } from "react"
import { Droplet, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 glass-strong rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-4">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-start gap-4 mb-4">
        <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-serif font-semibold text-lg mb-2">Cookie Notice</h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            This website uses cookies to enhance your experience and analyze usage. By continuing, you consent to our
            use of cookies.
          </p>
        </div>
      </div>

      <button
        onClick={handleAccept}
        className="w-full glass px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 glow-hover transition-all hover:scale-105"
      >
        <Droplet className="w-4 h-4" />
        Accept & Flow
      </button>
    </div>
  )
}
