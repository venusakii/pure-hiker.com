import { Droplet, Leaf, Mountain } from "lucide-react"

const features = [
  {
    icon: Droplet,
    title: "Advanced Filtration",
    description: "Removes 99.999% of bacteria, parasites, and microplastics for pure, safe drinking water.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Design",
    description: "Sustainable materials and reusable filters reduce plastic waste and environmental impact.",
  },
  {
    icon: Mountain,
    title: "Adventure-Proven",
    description: "Tested in extreme conditions by hikers, campers, and explorers worldwide.",
  },
]

export function WhyChoose() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pure Hiker</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 hover:glow-hover transition-all duration-300 hover:scale-105 float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
