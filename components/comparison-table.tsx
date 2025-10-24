import { Star, ExternalLink } from "lucide-react"

const products = [
  {
    name: "LifeStraw",
    capacity: "1,000 L",
    lifespan: "5 years",
    weight: "46g",
    rating: 5,
    link: "#",
  },
  {
    name: "Sawyer Mini",
    capacity: "378,000 L",
    lifespan: "Lifetime",
    weight: "57g",
    rating: 4,
    link: "#",
  },
  {
    name: "GRAYL GeoPress",
    capacity: "710ml",
    lifespan: "350 uses",
    weight: "450g",
    rating: 5,
    link: "#",
  },
]

export function ComparisonTable() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Flow</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto glass-strong rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left p-6 font-serif text-lg">Product</th>
                  <th className="text-left p-6 font-serif text-lg">Capacity</th>
                  <th className="text-left p-6 font-serif text-lg">Lifespan</th>
                  <th className="text-left p-6 font-serif text-lg">Weight</th>
                  <th className="text-left p-6 font-serif text-lg">Rating</th>
                  
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    <td className="p-6 font-medium">{product.name}</td>
                    <td className="p-6 text-foreground/70">{product.capacity}</td>
                    <td className="p-6 text-foreground/70">{product.lifespan}</td>
                    <td className="p-6 text-foreground/70">{product.weight}</td>
                    <td className="p-6">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating ? "fill-primary text-primary" : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
