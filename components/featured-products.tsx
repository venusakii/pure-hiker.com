import { ExternalLink, Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "LifeStraw Personal Water Filter",
    description: "Removes 99.999999% of bacteria and 99.999% of parasites",
    capacity: "1,000 liters",
    weight: "46g",
    rating: 5,
    link: "#",
    image: "/lifestraw-water-filter-product.jpg",
  },
  {
    name: "Sawyer Mini Water System",
    description: "Lifetime filtration up to 378,000 liters",
    capacity: "378,000 liters",
    weight: "57g",
    rating: 4,
    link: "#",
    image: "/sawyer-mini-water-filter.jpg",
  },
  {
    name: "GRAYL GeoPress Purifier",
    description: "Purifies water in 8 seconds with one press",
    capacity: "710ml bottle",
    weight: "450g",
    rating: 5,
    link: "#",
    image: "/grayl-geopress-water-purifier.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Featured Products</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold">
            Flow with{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Confidence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-6 hover:glow-hover transition-all duration-300 hover:scale-105 float group"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-6 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4">
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

                <h3 className="text-xl font-serif font-semibold">{product.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{product.description}</p>

                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>{product.capacity}</span>
                  <span>{product.weight}</span>
                </div>

                <Link
                  href="/products"
                  className="glass px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:glow-hover transition-all group-hover:bg-primary/20"
                >
                  View Product
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
