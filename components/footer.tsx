import { Droplet } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="glass-strong py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Droplet className="w-8 h-8 text-primary" />
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                PURE HIKER
              </span>
            </div>

            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-foreground/70 hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-foreground/70 hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 text-center space-y-4">
            <p className="text-sm text-foreground/60">© 2025 Pure-Hiker.com — All Rights Reserved.</p>
            <p className="text-sm text-foreground/60">
              Amazon Affiliate Partner 🛒 As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
