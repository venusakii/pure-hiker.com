import Link from "next/link"
import { ArrowLeft, Droplet, Filter, Sparkles, Waves, Shield, Zap } from "lucide-react"

const steps = [
  {
    icon: Droplet,
    title: "Collect",
    description: "Gather water from any natural source - streams, lakes, or rivers",
    details:
      "Our filters work with virtually any freshwater source. Simply fill your bottle or attach the filter to your hydration system.",
  },
  {
    icon: Filter,
    title: "Filter",
    description: "Advanced filtration removes contaminants instantly",
    details:
      "Multi-stage filtration removes 99.9999% of bacteria, 99.999% of parasites, and reduces chemicals and heavy metals.",
  },
  {
    icon: Sparkles,
    title: "Drink",
    description: "Enjoy pure, clean water anywhere on your adventure",
    details: "Within seconds, you have safe drinking water. No waiting, no chemicals, just pure hydration on demand.",
  },
]

const features = [
  {
    icon: Waves,
    title: "Hollow Fiber Technology",
    description: "Microscopic pores trap contaminants while allowing clean water to flow through",
  },
  {
    icon: Shield,
    title: "99.9999% Protection",
    description: "Removes bacteria, protozoa, and microplastics for safe drinking water",
  },
  {
    icon: Zap,
    title: "Instant Filtration",
    description: "No pumping or waiting - drink directly from the source",
  },
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-20">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            From Stream to{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Sip
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our water filters use cutting-edge technology to transform any freshwater source into safe, clean drinking
            water in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6 float" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="glass-strong w-32 h-32 rounded-full flex items-center justify-center mx-auto glow">
                <step.icon className="w-16 h-16 text-primary" />
              </div>
              <div className="glass px-6 py-2 rounded-full inline-block">
                <span className="text-sm font-medium">Step {index + 1}</span>
              </div>
              <h3 className="text-4xl font-serif font-semibold">{step.title}</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">{step.description}</p>
              <p className="text-foreground/60 leading-relaxed">{step.details}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            The{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Behind It
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl p-8 float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-serif font-semibold mb-4">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Experience Pure Water?</h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Join thousands of hikers who trust our filters for their outdoor adventures.
          </p>
          <Link
            href="/products"
            className="glass px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:glow-hover transition-all hover:scale-105"
          >
            <Droplet className="w-5 h-5" />
            Shop Water Filters
          </Link>
        </div>
      </div>
    </main>
  )
}
