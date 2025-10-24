"use client"

import { Droplet } from "lucide-react"

export function EcoImpact() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-alt opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Environmental Impact</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Every Drop{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Counts
            </span>
          </h2>

          <div className="glass-strong rounded-3xl p-12 float">
            <Droplet className="w-20 h-20 text-primary mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Every filter saves 1,000 plastic bottles from landfills.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              By choosing reusable water filtration, you're not just protecting yourself — you're protecting the planet.
              Join thousands of adventurers making a difference, one sip at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
