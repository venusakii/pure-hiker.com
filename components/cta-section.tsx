import { Droplet } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-alt" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Take the First <span className="text-white drop-shadow-lg">Sip</span>
          </h2>

          <p className="text-2xl md:text-3xl font-light text-foreground/80">Purity is a choice. Make it yours.</p>

          <Link
            href="/products"
            className="glass-strong px-12 py-6 rounded-full font-medium text-lg flex items-center gap-3 mx-auto glow-hover transition-all hover:scale-105 w-fit"
          >
            <Droplet className="w-6 h-6" />
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
