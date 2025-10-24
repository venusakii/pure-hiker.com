export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block glass px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Our Philosophy</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Pure Technology.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Natural Inspiration.
              </span>
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              At Pure Hiker, we believe clean water is freedom. Our filters bring clarity — to your water, and your
              journey.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Every drop matters. Every adventure deserves purity. We combine cutting-edge filtration technology with
              nature-inspired design to create products that feel as good as they perform.
            </p>
          </div>

          <div className="relative">
            <div className="glass-strong rounded-3xl p-8 float">
              <div className="aspect-square bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-2xl overflow-hidden">
                <img
                  src="/crystal-clear-water-droplet-on-leaf-in-nature-hiki.jpg"
                  alt="Pure water in nature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
