"use client"

import { Droplet, Filter, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Droplet,
    title: "Collect",
    description: "Gather water from any natural source",
  },
  {
    icon: Filter,
    title: "Filter",
    description: "Advanced filtration removes contaminants",
  },
  {
    icon: Sparkles,
    title: "Drink",
    description: "Enjoy pure, clean water anywhere",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold">
            From Stream to{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Sip
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6 float" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="glass-strong w-24 h-24 rounded-full flex items-center justify-center mx-auto glow">
                <step.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-semibold">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
